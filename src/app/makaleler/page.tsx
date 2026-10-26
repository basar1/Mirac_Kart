import type { Metadata } from "next";
import { ArticleCard } from "@/components/ArticleCard";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteShell } from "@/components/SiteShell";
import { lawyerConfig } from "@/data/lawyerConfig";

export const metadata: Metadata = {
  title: "Hukuki Makaleler",
  description:
    "Aile, iş, kira ve icra hukuku üzerine genel bilgilendirme yazıları. Metinler hukuki tavsiye yerine geçmez.",
};

export default function ArticlesPage() {
  return (
    <SiteShell>
      <section className="bg-canvas">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <SectionHeading
            eyebrow="Yayınlar"
            title="Hukuki makaleler"
            description="Yazılar, ilgili mevzuatın genel çerçevesini anlatır. Bir dilekçe, süre veya dava stratejisi yerine geçmez."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {lawyerConfig.articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
