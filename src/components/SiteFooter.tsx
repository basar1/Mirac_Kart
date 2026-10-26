import Link from "next/link";
import { LegalNotice } from "@/components/LegalNotice";
import { lawyerConfig } from "@/data/lawyerConfig";
import { formatPhone, lawyerPublicName } from "@/utils/format";
import { mailHref, telHref } from "@/utils/links";

const quickLinks = [
  { href: "/#hakkimizda", label: "Hakkımızda" },
  { href: "/#calisma-alanlari", label: "Çalışma Alanları" },
  { href: "/makaleler", label: "Hukuki Makaleler" },
  { href: "/#iletisim", label: "İletişim" },
  { href: "/kart", label: "Dijital Kartvizit" },
];

export function SiteFooter() {
  const { office, personalInfo, contact, socials } = lawyerConfig;
  const year = new Date().getFullYear();
  const socialItems = [
    { label: "LinkedIn", href: socials.linkedin },
    { label: "X", href: socials.x },
    { label: "Instagram", href: socials.instagram },
  ].filter((item): item is { label: string; href: string } => Boolean(item.href?.trim()));

  return (
    <footer className="border-t border-line bg-canvas">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-[1.4fr_0.8fr_1fr]">
        <div>
          <p className="font-display text-2xl text-ink">{office.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-7 text-muted">
            {lawyerPublicName(personalInfo.namePrefix, personalInfo.fullName)} · {personalInfo.title}
          </p>
          <p className="mt-2 text-sm text-muted">{personalInfo.barRegistration}</p>
          {socialItems.length > 0 ? (
            <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {socialItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink underline decoration-accent-2 underline-offset-4"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-2">Hızlı bağlantılar</p>
          <ul className="mt-4 space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-ink-soft hover:text-ink">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-2">İletişim</p>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-ink-soft">
            <li>{contact.address}</li>
            <li>
              <a href={telHref(contact.phone)} className="hover:text-ink">
                {formatPhone(contact.phone)}
              </a>
            </li>
            <li>
              <a href={mailHref(contact.email)} className="hover:text-ink">
                {contact.email}
              </a>
            </li>
            <li>{contact.workingHours}</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-8">
        <LegalNotice />
        <p className="mt-6 text-xs text-muted">
          © {year} {office.name}. Bilgilendirme amaçlı kurumsal yayın.
        </p>
      </div>
    </footer>
  );
}
