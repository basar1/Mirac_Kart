"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Clock, Mail, Menu, Phone, X } from "lucide-react";
import { lawyerConfig } from "@/data/lawyerConfig";
import { formatPhone, officeInitials } from "@/utils/format";
import { mailHref, telHref } from "@/utils/links";

const links = [
  { href: "/#hakkimizda", label: "Hakkımızda" },
  { href: "/#calisma-alanlari", label: "Çalışma Alanları" },
  { href: "/makaleler", label: "Hukuki Makaleler" },
  { href: "/#iletisim", label: "İletişim" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { office, personalInfo, contact } = lawyerConfig;
  const initials = officeInitials(office.name);
  const [brandName, brandSuffix = ""] = office.name.split(/\s+&\s+/);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header>
      <div className="bg-topbar text-on-topbar">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-2 text-[11px] tracking-wide sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:text-xs">
          <p>{personalInfo.barRegistration}</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="size-3.5 text-topbar-accent" aria-hidden="true" />
              {contact.workingHours}
            </span>
            <a className="inline-flex items-center gap-1.5 hover:text-topbar-accent" href={telHref(contact.phone)}>
              <Phone className="size-3.5 text-topbar-accent" aria-hidden="true" />
              {formatPhone(contact.phone)}
            </a>
            <a
              className="inline-flex items-center gap-1.5 hover:text-topbar-accent"
              href={mailHref(contact.email)}
            >
              <Mail className="size-3.5 text-topbar-accent" aria-hidden="true" />
              {contact.email}
            </a>
          </div>
        </div>
      </div>

      <div className="sticky top-0 z-40 border-b border-line bg-header backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <Link href="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
            <span className="grid size-11 shrink-0 place-items-center rounded-full border border-accent-2 font-display text-sm text-ink">
              {initials}
            </span>
            <span className="min-w-0">
              <span className="block truncate font-display text-lg leading-none text-ink">
                {brandName}
              </span>
              {brandSuffix ? (
                <span className="mt-1 block text-[10px] uppercase tracking-[0.18em] text-muted">
                  {brandSuffix}
                </span>
              ) : null}
            </span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Ana menü">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-ink-soft transition hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <Link
              href="/kart"
              className="rounded-full border border-accent-2 px-4 py-2 text-sm font-medium text-ink transition hover:bg-accent-soft"
            >
              Dijital Kartvizit
            </Link>
            <Link
              href="/#iletisim"
              className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-on-accent transition hover:bg-accent-hover"
            >
              Randevu / İletişim
            </Link>
          </div>

          <button
            type="button"
            className="grid size-11 place-items-center rounded-full border border-line text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobil-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
            <span className="sr-only">{open ? "Menüyü kapat" : "Menüyü aç"}</span>
          </button>
        </div>

        {open ? (
          <nav id="mobil-menu" className="border-t border-line bg-canvas px-4 py-4 lg:hidden" aria-label="Mobil menü">
            <div className="mx-auto flex max-w-6xl flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-xl px-3 py-3 text-base text-ink hover:bg-surface"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/kart"
                className="mt-2 rounded-full border border-accent-2 px-4 py-3 text-center text-sm font-medium text-ink"
                onClick={() => setOpen(false)}
              >
                Dijital Kartvizit
              </Link>
              <Link
                href="/#iletisim"
                className="rounded-full bg-accent px-4 py-3 text-center text-sm font-semibold text-on-accent"
                onClick={() => setOpen(false)}
              >
                Randevu / İletişim
              </Link>
            </div>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
