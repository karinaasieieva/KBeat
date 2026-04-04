create table if not exists public.branches (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  district_ru text not null,
  district_ua text not null,
  district_en text not null,
  address_ru text not null,
  address_ua text not null,
  address_en text not null,
  phone text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.service_categories (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title_ru text not null,
  title_ua text not null,
  title_en text not null,
  summary_ru text,
  summary_ua text,
  summary_en text,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.services (
  id uuid primary key default gen_random_uuid(),
  category_id uuid references public.service_categories(id) on delete set null,
  slug text unique not null,
  title_ru text not null,
  title_ua text not null,
  title_en text not null,
  description_ru text,
  description_ua text,
  description_en text,
  is_featured boolean not null default false,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.doctors (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  full_name text not null,
  specialization_ru text not null,
  specialization_ua text not null,
  specialization_en text not null,
  bio_ru text,
  bio_ua text,
  bio_en text,
  photo_url text,
  certificate_url text,
  branch_id uuid references public.branches(id) on delete set null,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.call_requests (
  id uuid primary key default gen_random_uuid(),
  full_name text,
  phone text not null,
  preferred_branch text,
  notes text,
  created_at timestamptz not null default now()
);