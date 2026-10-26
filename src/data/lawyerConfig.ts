/**
 * TEK MERKEZDEN YÖNETİM
 * Yeni bir işletme tesliminde yalnızca bu dosyayı güncelleyin.
 * Kurumsal site ve NFC dijital kartvizit buradaki veriden üretilir.
 *
 * `articles` boş bırakıldığında sitede yayın listesi gösterilmez.
 * Doluysa `content` boş satırla ayrılmış paragraflardan oluşur; `## ` ile başlayan blok ara başlık olur.
 * `contact.website` boşsa vCard, kartın açıldığı site adresini yazar.
 *
 * `activeTheme` teslim temasını belirler.
 * `showThemeSwitcher` sunumda `true`, müşteriye teslimde `false` olmalıdır.
 * `socials` alanları boş string bırakılırsa kartvizitte ve altbilgide o ikon gösterilmez.
 */

import type { ThemeId } from "@/data/themes";

export interface OfficeInfo {
  name: string;
  city: string;
  statement: string;
  intro: string;
}

export interface PersonalInfo {
  firstName: string;
  lastName: string;
  fullName: string;
  namePrefix: string;
  title: string;
  barRegistration: string;
  biography: string;
  education: string;
  photoUrl: string;
  photoAlt: string;
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  whatsappMessage: string;
  email: string;
  address: string;
  mapsDirectionsUrl: string;
  mapsEmbedUrl: string;
  workingHours: string;
  website: string;
}

export interface SocialLinks {
  linkedin?: string;
  x?: string;
  instagram?: string;
}

export type PracticeIconName = "Cake" | "Coffee" | "Store" | "ChefHat" | "Utensils";

export interface PracticeArea {
  title: string;
  icon: PracticeIconName;
  summary: string;
  description: string;
}

export interface Article {
  slug: string;
  title: string;
  date: string;
  category: string;
  readTime: string;
  summary: string;
  content: string;
}

export interface LawyerConfig {
  office: OfficeInfo;
  personalInfo: PersonalInfo;
  contact: ContactInfo;
  socials: SocialLinks;
  practiceAreas: PracticeArea[];
  articles: Article[];
  legalCompliance: string;
  activeTheme: ThemeId;
  showThemeSwitcher: boolean;
}

export const lawyerConfig = {
  office: {
    name: "Hançerlioğlu",
    city: "Mersin",
    statement: "Geleneksel Lezzetler, Modern Vizyon.",
    intro:
      "Hançerlioğlu, çeyrek asrı aşan tecrübesiyle geleneksel Türk tatlılarını ve zengin mutfak kültürünü en taze malzemelerle misafirlerine sunar. Modern işletmecilik anlayışıyla lezzet ve kalite standardını her zaman en üst seviyede tutmayı hedefler.",
  },
  personalInfo: {
    firstName: "Miraç",
    lastName: "Hançerlioğlu",
    fullName: "Miraç Hançerlioğlu",
    namePrefix: "",
    title: "Kurucu & İşletmeci",
    barRegistration: "Hançerlioğlu Gıda ve İkram Hizmetleri",
    biography:
      "Miraç Hançerlioğlu, geleneksel aile mirasını modern işletmecilik vizyonuyla birleştirerek markanın sürdürülebilir büyümesine liderlik etmektedir. Misafir deneyimini ve ürün kalitesini merkeze alan yaklaşımıyla, yerel lezzetleri yenilikçi bir sunumla misafirlerine ulaştırmaktadır.",
    education: "Çukurova Üniversitesi İktisat Bölümü",
    photoUrl: "/mirac.jpg",
    photoAlt: "Miraç Hançerlioğlu portre fotoğrafı",
  },
  contact: {
    phone: "+905435901885",
    whatsapp: "+905435901885",
    whatsappMessage:
      "Merhaba Miraç Bey, dijital kartvizitiniz üzerinden ulaşıyorum. İşletmeniz ve hizmetleriniz hakkında görüşmek isterim.",
    email: "miraacdogan@gmail.com",
    address: "Alata, Erdemoğlu Blv. No: 183 A, 33730 Erdemli / Mersin",
    mapsDirectionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Alata,+Erdemoğlu+Blv.+No:+183+A,+33730+Erdemli/Mersin",
    mapsEmbedUrl:
      "https://maps.google.com/maps?q=Alata,+Erdemoğlu+Blv.+No:+183+A,+33730+Erdemli/Mersin&z=16&output=embed",
    workingHours: "Haftanın Her Günü, 08:00 – 00:00",
    website: "",
  },
  socials: {
    linkedin: "https://www.linkedin.com/in/miraç-doğan-569683233",
    instagram: "https://www.instagram.com/mirachancerlioglu",
    x: "",
  },
  practiceAreas: [
    {
      title: "Geleneksel Tatlılar",
      icon: "Cake",
      summary: "Yılların tecrübesiyle hazırlanan imza lezzetler.",
      description:
        "En taze kuruyemişler ve doğal şeker pancarı kullanılarak hazırlanan baklava, kadayıf ve yöresel tatlı çeşitlerimiz, ustalarımızın el emeğiyle günlük olarak üretilir.",
    },
    {
      title: "Kurumsal İkram & Etkinlik",
      icon: "Utensils",
      summary: "Özel günleriniz için toplu sipariş ve organizasyon desteği.",
      description:
        "Düğün, nişan, kurumsal toplantı ve özel etkinlikleriniz için kişi sayısına özel tepsilerde dilediğiniz tatlı çeşitleriyle profesyonel ikram çözümleri sunuyoruz.",
    },
    {
      title: "Misafir Ağırlama",
      icon: "Coffee",
      summary: "Ferah mekanımızda eşsiz lezzet deneyimi.",
      description:
        "Geniş ve konforlu salonumuzda, aileniz ve sevdiklerinizle birlikte taze çayımız eşliğinde tatlılarımızı deneyimleyebilir, kaliteli vakit geçirebilirsiniz.",
    },
  ],
  articles: [] as Article[],
  legalCompliance:
    "Bu dijital kartvizit ve içerikler, Hançerlioğlu kurumsal kimlik standartları çerçevesinde hazırlanmıştır.",
  activeTheme: "obsidian-gold",
  showThemeSwitcher: false,
} satisfies LawyerConfig;

export function getArticle(slug: string): Article | undefined {
  return lawyerConfig.articles.find((article) => article.slug === slug);
}

export function getOtherArticles(slug: string, limit = 2): Article[] {
  return lawyerConfig.articles.filter((article) => article.slug !== slug).slice(0, limit);
}
