# Hetzner Deployment

This project is deployed on a Hetzner server with nginx proxying traffic to a local Next.js process.

## Server layout

- App directory: `/var/www/karinaestetic-beauty`
- Service name: `kbeat`
- App bind address: `127.0.0.1:3010`
- Public web server: `nginx`

## Initial deployment

Clone the repository onto the server:

```bash
sudo mkdir -p /var/www/karinaestetic-beauty
sudo chown deploy:deploy /var/www/karinaestetic-beauty
cd /var/www/karinaestetic-beauty
git clone https://github.com/karinaasieieva/KBeat.git .
```

Install dependencies and build the production bundle:

```bash
npm ci
npm run build
```

## systemd service

Create `/etc/systemd/system/kbeat.service` with:

```ini
[Unit]
Description=Karina Estetic Beauty App
After=network.target

[Service]
Type=simple
User=deploy
WorkingDirectory=/var/www/karinaestetic-beauty
Environment=NODE_ENV=production
ExecStart=/usr/bin/env npm run start -- --hostname 127.0.0.1 --port 3010
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
```

Enable and start the service:

```bash
sudo systemctl daemon-reload
sudo systemctl enable kbeat
sudo systemctl restart kbeat
sudo systemctl status kbeat --no-pager
```

## nginx

Create `/etc/nginx/sites-available/karinaestetic.beauty` with:

```nginx
server {
    listen 80;
    server_name karinaestetic.beauty www.karinaestetic.beauty;

    location / {
        proxy_pass http://127.0.0.1:3010;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
```

Enable the site and disable the nginx default site:

```bash
sudo ln -sf /etc/nginx/sites-available/karinaestetic.beauty /etc/nginx/sites-enabled/karinaestetic.beauty
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl reload nginx
```

## Verification

Check the local app directly:

```bash
curl -I http://127.0.0.1:3010
```

Check nginx with the production host header:

```bash
curl -I -H "Host: karinaestetic.beauty" http://127.0.0.1
```

## Cloudflare cutover

Once the server is verified:

1. Update the proxied Cloudflare `A` record for `karinaestetic.beauty` to the new Hetzner IP.
2. Update `www` too if it has its own `A` record.
3. Keep the old server online for rollback for at least 48 to 72 hours.
4. After cutover, add or restore any Cloudflare-only origin restrictions in nginx.