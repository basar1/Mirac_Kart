import type { Metadata, Viewport } from "next";
import { DigitalCard } from "@/components/DigitalCard";
import { lawyerConfig } from "@/data/lawyerConfig";
import { lawyerPublicName } from "@/utils/format";

const publicName = lawyerPublicName(
  lawyerConfig.personalInfo.namePrefix,
  lawyerConfig.personalInfo.fullName,
);

export const metadata: Metadata = {
  title: "Dijital Kartvizit",
  description: `${publicName} dijital iletişim kartı. Rehbere kaydetme, telefon, WhatsApp, yol tarifi ve kurumsal site.`,
};

export const viewport: Viewport = {
  themeColor: "#09090B",
  colorScheme: "dark",
};

export default function KartPage() {
  return (
    <div data-page="kart" className="min-h-screen bg-hero text-on-hero">
      <DigitalCard />
    </div>
  );
}
