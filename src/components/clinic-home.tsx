"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  Camera,
  Award,
  ChevronDown,
  ChevronRight,
  Clock3,
  Globe,
  MapPin,
  Menu,
  PhoneCall,
  Play,
  Send,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import {
  assetPaths,
  branches,
  doctors,
  equipmentBrands,
  footerLinks,
  locales,
  navigation,
  popularProcedures,
  socialLinks,
  serviceCategories,
  siteCopy,
} from "@/data/site-content";
import { type Locale, type LocalizedText } from "@/types/site";

function t(value: LocalizedText, locale: Locale) {
  return value[locale];
}

export function ClinicHome() {
  const [locale, setLocale] = useState<Locale>("ua");
  const [bannerVisible, setBannerVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [comingSoonService, setComingSoonService] = useState<string | null>(null);

  const copy = siteCopy[locale];
  const instagramLink = socialLinks.find((link) => link.label === "Instagram")?.href ?? "#";

  const locationCards = useMemo(
    () => branches.map((branch) => ({ district: t(branch.district, locale), phone: branch.phone })),
    [locale],
  );

  function showComingSoon(serviceName: string) {
    setComingSoonService(serviceName);
  }

  function getMapSearchUrl(address: string) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  }

  function getNavigationUrl(address: string) {
    return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}&travelmode=driving`;
  }

  return (
    <div className="text-[var(--foreground)]">
      <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[rgba(248,242,234,0.82)] backdrop-blur-xl">
        {bannerVisible ? (
          <div className="border-b border-[var(--line)] bg-[var(--accent-strong)] px-4 py-3 text-sm text-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
              <span>{copy.topBar}</span>
              <button
                type="button"
                onClick={() => setBannerVisible(false)}
                className="rounded-full border border-white/25 p-1 transition hover:bg-white/10"
                aria-label="Close top notification"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        ) : null}

        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 lg:px-6">
          <a href="#home" className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent-strong)] text-lg font-semibold tracking-[0.12em] text-white">
              KS
            </div>
            <div>
              <p className="font-display text-3xl leading-none tracking-[0.18em] uppercase">
                Karina
              </p>
              <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
                {copy.brandName}
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-sm font-medium uppercase tracking-[0.16em] xl:flex">
            {navigation.map((item) => {
              const isServices = item.href === "#services";

              if (!isServices) {
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-[var(--muted)] transition hover:text-[var(--foreground)]"
                  >
                    {t(item.label, locale)}
                  </a>
                );
              }

              return (
                <div key={item.href} className="group relative">
                  <button
                    type="button"
                    className="flex items-center gap-2 text-[var(--muted)] transition group-hover:text-[var(--foreground)]"
                  >
                    {t(item.label, locale)}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  <div className="pointer-events-none absolute left-1/2 top-full mt-4 w-[900px] -translate-x-1/2 rounded-[2rem] border border-[var(--line)] bg-[rgba(255,250,244,0.96)] p-6 opacity-0 shadow-[var(--shadow)] transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                    <div className="mb-5 flex items-center justify-between gap-6 border-b border-[var(--line)] pb-4">
                      <div>
                        <p className="font-display text-3xl">{copy.servicesMenu}</p>
                        <p className="mt-2 max-w-2xl text-sm text-[var(--muted)]">
                          {copy.navServicesPlaceholder}
                        </p>
                      </div>
                      <a
                        href="#services"
                        className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--foreground)]"
                      >
                        {copy.requestCall}
                        <ChevronRight className="h-4 w-4" />
                      </a>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {serviceCategories.map((category) => (
                        <button
                          type="button"
                          key={t(category.title, locale)}
                          onClick={() => showComingSoon(t(category.title, locale))}
                          className="rounded-[1.5rem] border border-[var(--line)] bg-white/80 p-5"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <h3 className="text-lg font-semibold">{t(category.title, locale)}</h3>
                              <p className="mt-2 text-sm text-[var(--muted)]">
                                {t(category.summary, locale)}
                              </p>
                            </div>
                            <Sparkles className="mt-1 h-4 w-4 text-[var(--accent)]" />
                          </div>
                          <div className="mt-4 space-y-2 text-sm text-[var(--muted)]">
                            {category.placeholderItems.map((item) => (
                              <p
                                key={t(item, locale)}
                                className="flex items-center gap-2 rounded-full bg-[var(--surface-strong)] px-3 py-2"
                              >
                                <ChevronRight className="h-4 w-4 text-[var(--accent)]" />
                                {t(item, locale)}
                              </p>
                            ))}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <div className="flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/70 p-1">
              <Globe className="ml-2 h-4 w-4 text-[var(--muted)]" />
              {locales.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setLocale(item)}
                  className={`rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${
                    locale === item
                      ? "bg-[var(--accent-strong)] text-white"
                      : "text-[var(--muted)] hover:text-[var(--foreground)]"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 text-[var(--muted)]">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  aria-label={link.label}
                  className="rounded-full border border-[var(--line)] p-3 transition hover:border-[var(--accent)] hover:text-[var(--foreground)]"
                >
                  {link.label === "Instagram" ? <Camera className="h-4 w-4" /> : <Send className="h-4 w-4" />}
                </a>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
            className="rounded-full border border-[var(--line)] p-3 xl:hidden"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileOpen ? (
          <div className="border-t border-[var(--line)] bg-[var(--surface)] px-4 py-5 xl:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-5">
              <div className="flex flex-wrap gap-2">
                {locales.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setLocale(item)}
                    className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] ${
                      locale === item
                        ? "bg-[var(--accent-strong)] text-white"
                        : "border border-[var(--line)] bg-white text-[var(--muted)]"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <div className="grid gap-3">
                {navigation.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-2xl border border-[var(--line)] bg-white px-4 py-3 text-sm font-medium uppercase tracking-[0.16em] text-[var(--muted)]"
                  >
                    {t(item.label, locale)}
                  </a>
                ))}
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                {serviceCategories.map((category) => (
                  <button
                    type="button"
                    key={t(category.title, locale)}
                    onClick={() => showComingSoon(t(category.title, locale))}
                    className="rounded-3xl border border-[var(--line)] bg-white p-4 text-left"
                  >
                    <h3 className="text-sm font-semibold uppercase tracking-[0.16em]">
                      {t(category.title, locale)}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--muted)]">{t(category.summary, locale)}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </header>

      {comingSoonService ? (
        <div className="fixed right-4 bottom-4 z-50 max-w-sm rounded-[1.5rem] border border-[var(--line)] bg-[rgba(255,250,245,0.98)] p-4 shadow-[var(--shadow)]">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">{copy.servicesMenu}</p>
              <p className="mt-2 text-base font-semibold">{comingSoonService}</p>
              <p className="mt-2 text-sm text-[var(--muted)]">{copy.serviceComingSoon}</p>
            </div>
            <button
              type="button"
              onClick={() => setComingSoonService(null)}
              className="rounded-full border border-[var(--line)] p-2"
              aria-label="Close coming soon notification"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      ) : null}

      <main id="home" className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-6 lg:px-6 lg:py-8">
        <section className="mesh-accent overflow-hidden rounded-[2.5rem] border border-[var(--line)] px-6 py-8 shadow-[var(--shadow)] lg:px-10 lg:py-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
                <Sparkles className="h-4 w-4 text-[var(--accent)]" />
                {copy.clinicLabel}
              </div>

              <div className="space-y-5">
                <h1 className="font-display max-w-3xl text-5xl leading-[0.9] sm:text-6xl lg:text-7xl">
                  {copy.heroTitle}
                </h1>
                <p className="max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
                  {copy.heroDescription}
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contacts"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[var(--accent-strong)] px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:opacity-90"
                >
                  <PhoneCall className="h-4 w-4" />
                  {copy.requestCall}
                </a>
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-[var(--line)] bg-white/70 px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--foreground)] transition hover:border-[var(--accent)]"
                >
                  <Play className="h-4 w-4" />
                  {copy.watchPresentation}
                </button>
              </div>

              <div className="glass-panel rounded-[2rem] p-5">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
                      {copy.chooseDistrict}
                    </p>
                    <p className="mt-2 max-w-xl text-sm leading-7 text-[var(--muted)]">
                      м. Дніпро, вул. Європейська, буд. 11А
                    </p>
                  </div>
                  <div className="grid flex-1 gap-3 sm:grid-cols-2 xl:grid-cols-2">
                    {locationCards.map((branch) => (
                      <a
                        key={branch.phone}
                        href="#contacts"
                        className="rounded-[1.25rem] border border-[var(--line)] bg-white/85 px-4 py-4 transition hover:-translate-y-0.5 hover:border-[var(--accent)]"
                      >
                        <p className="text-sm font-semibold uppercase tracking-[0.16em]">
                          {branch.district}
                        </p>
                        <p className="mt-2 text-sm text-[var(--muted)]">{branch.phone}</p>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-panel rounded-[2.25rem] p-5 lg:p-6">
              <div className="relative overflow-hidden rounded-[1.8rem] border border-[var(--line)] bg-[linear-gradient(135deg,rgba(243,232,220,0.9),rgba(255,255,255,0.98))] p-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(158,122,91,0.18),transparent_35%)]" />
                <div className="relative flex min-h-[420px] flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <div className="rounded-full border border-[var(--line)] bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
                      {copy.introVideoLabel}
                    </div>
                    <div className="rounded-full bg-white/80 p-3 text-[var(--accent-strong)] shadow-lg">
                      <Play className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="space-y-5">
                    <div className="rounded-[1.6rem] border border-dashed border-[var(--line)] bg-white/75 p-6">
                      <p className="font-display text-3xl">{copy.videoPlaceholder}</p>
                      <p className="mt-3 max-w-md text-sm leading-7 text-[var(--muted)]">
                        Після отримання фінального відео цей блок можна замінити на презентацію клініки, кабінетів, процедур і головного спеціаліста.
                      </p>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-3">
                      <div className="rounded-[1.4rem] border border-[var(--line)] bg-white/80 p-4">
                        <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">Care</p>
                        <p className="mt-2 text-lg font-semibold">{copy.yearsPracticeLabel}</p>
                      </div>
                      <div className="rounded-[1.4rem] border border-[var(--line)] bg-white/80 p-4">
                        <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">City</p>
                        <p className="mt-2 text-lg font-semibold">Дніпро</p>
                      </div>
                      <div className="rounded-[1.4rem] border border-[var(--line)] bg-white/80 p-4">
                        <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">MOH</p>
                        <p className="mt-2 text-lg font-semibold">{copy.licensedClinicLabel}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="section-shell rounded-[2.25rem] p-8">
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
              {copy.aboutEyebrow}
            </p>
            <h2 className="font-display mt-4 text-4xl sm:text-5xl">
              {copy.aboutTitle}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)]">
              {copy.aboutBody}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.6rem] border border-[var(--line)] bg-white/80 p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">МОЗ</p>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">Наявність ліцензії дозволяє безпечно виконувати ін&apos;єкційні та лазерні процедури.</p>
              </div>
              <div className="rounded-[1.6rem] border border-[var(--line)] bg-white/80 p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">Підхід</p>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">Повна конфіденційність, індивідуальний підхід та безпека процедур.</p>
              </div>
              <div className="rounded-[1.6rem] border border-[var(--line)] bg-white/80 p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">Локація</p>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">м. Дніпро, вул. Європейська, буд. 11А</p>
              </div>
            </div>
          </div>

          <div className="section-shell rounded-[2.25rem] p-8">
            <div className="flex items-center gap-3 text-[var(--accent-strong)]">
              <ShieldCheck className="h-6 w-6" />
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
                {copy.missionTitle}
              </p>
            </div>
            <blockquote className="font-display mt-6 max-w-3xl text-4xl leading-tight sm:text-5xl">
              {copy.missionQuote}
            </blockquote>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-[1.7rem] border border-[var(--line)] bg-white/85 p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">Переваги</p>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  Наші спеціалісти застосовують сучасні методики класичної, апаратної та лазерної косметології для ефективних та безпечних результатів.
                </p>
              </div>
              <div className="rounded-[1.7rem] border border-[var(--line)] bg-white/85 p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">Результат</p>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  Мета клініки — допомогти пацієнтам виглядати молодо, доглянуто та впевнено у собі без зайвого ризику та перевантаження процедурами.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section-shell rounded-[2.25rem] p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">Напрями клініки</p>
              <h2 className="font-display mt-4 text-4xl sm:text-5xl">{copy.servicesMenu}</h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-[var(--muted)]">
              {copy.serviceSectionBody}
            </p>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
            {serviceCategories.map((category) => (
              <button
                type="button"
                key={t(category.title, locale)}
                onClick={() => showComingSoon(t(category.title, locale))}
                className="rounded-[1.8rem] border border-[var(--line)] bg-white/85 p-6 transition hover:-translate-y-1 hover:border-[var(--accent)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold">{t(category.title, locale)}</h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                      {t(category.summary, locale)}
                    </p>
                  </div>
                  <ChevronRight className="mt-1 h-5 w-5 text-[var(--accent)]" />
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {category.placeholderItems.map((item) => (
                    <span
                      key={t(item, locale)}
                      className="rounded-full bg-[var(--surface-strong)] px-3 py-2 text-xs uppercase tracking-[0.14em] text-[var(--muted)]"
                    >
                      {t(item, locale)}
                    </span>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="section-shell rounded-[2.25rem] p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">Популярні напрями</p>
              <h2 className="font-display mt-4 text-4xl sm:text-5xl">{copy.popularTitle}</h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-[var(--muted)]">
              {copy.popularSectionBody}
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {popularProcedures.map((procedure) => (
              <article
                key={t(procedure.title, locale)}
                className="rounded-[1.8rem] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(248,241,233,0.92))] p-5"
              >
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">Service</p>
                <h3 className="mt-4 text-xl font-semibold">{t(procedure.title, locale)}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  {t(procedure.description, locale)}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="specialists" className="section-shell rounded-[2.25rem] p-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">{copy.teamEyebrow}</p>
              <h2 className="font-display mt-4 text-4xl sm:text-5xl">{copy.specialistsTitle}</h2>
              <p className="mt-5 text-sm leading-7 text-[var(--muted)]">{copy.specialistsBody}</p>
            </div>
            <div className="rounded-[1.8rem] border border-[var(--line)] bg-white/85 p-6">
              <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">{copy.teamNeedsTitle}</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1.4rem] bg-[var(--surface-strong)] p-4 text-sm text-[var(--muted)]">Біографія лікаря</div>
                <div className="rounded-[1.4rem] bg-[var(--surface-strong)] p-4 text-sm text-[var(--muted)]">Додаткові сертифікати</div>
                <div className="rounded-[1.4rem] bg-[var(--surface-strong)] p-4 text-sm text-[var(--muted)]">Логотип клініки</div>
                <div className="rounded-[1.4rem] bg-[var(--surface-strong)] p-4 text-sm text-[var(--muted)]">Telegram або інші соцмережі</div>
              </div>
            </div>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-1 xl:grid-cols-1">
            {doctors.map((doctor, index) => (
              <article key={`${doctor.name}-${index}`} className="overflow-hidden rounded-[1.9rem] border border-[var(--line)] bg-white/90 lg:grid lg:grid-cols-[0.8fr_1.2fr]">
                <div className="flex min-h-[420px] items-end justify-start bg-[linear-gradient(180deg,rgba(243,232,220,0.5),rgba(199,172,145,0.35))] p-5">
                  <div className="relative h-full min-h-[380px] w-full overflow-hidden rounded-[1.4rem] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(247,240,230,0.9),rgba(255,255,255,0.98))]">
                    <Image
                      src={assetPaths.doctorPhoto}
                      alt={doctor.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      style={{ objectPosition: doctor.photoPosition ?? "center center" }}
                    />
                  </div>
                </div>
                <div className="p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-3xl font-semibold">{doctor.name}</h3>
                      <p className="mt-2 text-sm uppercase tracking-[0.16em] text-[var(--accent-strong)]">
                        {t(doctor.specialization, locale)}
                      </p>
                    </div>
                    <span className="rounded-full bg-[var(--surface-strong)] px-3 py-2 text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
                      {t(doctor.branch, locale)}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{t(doctor.bio, locale)}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="photos" className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="section-shell rounded-[2.25rem] p-8">
            <div className="flex items-center gap-3 text-[var(--accent-strong)]">
              <Award className="h-6 w-6" />
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
                {copy.equipmentTitle}
              </p>
            </div>
            <h2 className="font-display mt-4 text-4xl sm:text-5xl">{copy.licenseLabel}</h2>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-[var(--muted)]">
              {copy.equipmentBody}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {equipmentBrands.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--line)] bg-white/80 px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="section-shell rounded-[2.25rem] p-8">
            <div className="overflow-hidden rounded-[1.8rem] border border-[var(--line)] bg-white/80 p-4">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.3rem] bg-white">
                <Image
                  src={assetPaths.clinicCertificate}
                  alt="Clinic license certificate"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 35vw"
                />
              </div>
              <p className="font-display mt-4 text-3xl">{copy.certificatePlaceholder}</p>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                {copy.licenseNotice}
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer id="contacts" className="mt-2 border-t border-[var(--line)] bg-[rgba(255,250,245,0.86)] px-4 py-10 lg:px-6">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="section-shell rounded-[2.2rem] p-8">
            <div className="flex items-center gap-3 text-[var(--accent-strong)]">
              <Clock3 className="h-5 w-5" />
              <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">{copy.hoursLabel}</p>
            </div>
            <p className="font-display mt-4 text-4xl">{copy.hoursValue}</p>
            <div className="mt-8 flex items-center gap-3 text-[var(--muted)]">
              <Camera className="h-4 w-4" />
              <a href={instagramLink} target="_blank" rel="noreferrer">
                Instagram
              </a>
            </div>
          </div>

          <div className="section-shell rounded-[2.2rem] p-8">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">{copy.branchesLabel}</p>
                <div className="mt-5 grid gap-4 sm:grid-cols-1">
                  {branches.map((branch) => (
                    <article key={branch.phone} className="rounded-[1.6rem] border border-[var(--line)] bg-white/85 p-5">
                      <div className="flex items-center gap-2 text-[var(--accent-strong)]">
                        <MapPin className="h-4 w-4" />
                        <p className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
                          {t(branch.district, locale)}
                        </p>
                      </div>
                      <a
                        href={getMapSearchUrl(t(branch.address, locale))}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-3 block text-lg font-semibold transition hover:text-[var(--accent-strong)]"
                      >
                        {t(branch.address, locale)}
                      </a>
                      <a href={`tel:${branch.phone}`} className="mt-3 block text-sm text-[var(--muted)]">
                        066 8888838
                      </a>
                      <div className="mt-4 flex flex-wrap gap-3">
                        <a
                          href={getMapSearchUrl(t(branch.address, locale))}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-full border border-[var(--line)] bg-[var(--surface-strong)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--foreground)]"
                        >
                          {copy.openMapLabel}
                        </a>
                        <a
                          href={getNavigationUrl(t(branch.address, locale))}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-full bg-[var(--accent-strong)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:opacity-90"
                        >
                          {copy.navigationLabel}
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">{copy.mapCardTitle}</p>
                <a
                  href={getNavigationUrl(t(branches[0].address, locale))}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 block rounded-[1.7rem] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(245,236,226,0.94))] p-5 transition hover:-translate-y-0.5 hover:border-[var(--accent)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                        {copy.mapCardTitle}
                      </p>
                      <p className="mt-3 text-lg font-semibold text-[var(--foreground)]">
                        {t(branches[0].address, locale)}
                      </p>
                    </div>
                    <MapPin className="mt-1 h-5 w-5 text-[var(--accent-strong)]" />
                  </div>
                  <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{copy.mapCardBody}</p>
                  <div className="mt-5 flex items-center justify-between rounded-[1.2rem] border border-[var(--line)] bg-white/80 px-4 py-3 text-sm text-[var(--muted)]">
                    <span>{copy.navigationLabel}</span>
                    <ChevronRight className="h-4 w-4 text-[var(--accent)]" />
                  </div>
                </a>
                <p className="mt-6 text-xs uppercase tracking-[0.22em] text-[var(--muted)]">{copy.quickLinksLabel}</p>
                <div className="mt-5 grid gap-3">
                  {footerLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="rounded-[1.2rem] border border-[var(--line)] bg-white/85 px-4 py-3 text-sm text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--foreground)]"
                    >
                      {t(link.label, locale)}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <p className="mt-8 border-t border-[var(--line)] pt-6 text-sm text-[var(--muted)]">{copy.footerNote}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}