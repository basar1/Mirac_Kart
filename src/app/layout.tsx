import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { lawyerConfig } from "@/data/lawyerConfig";
import { themeBootScript } from "@/data/themes";
import { lawyerPublicName } from "@/utils/format";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-jakarta",
  display: "swap",
});

const publicName = lawyerPublicName(
  lawyerConfig.personalInfo.namePrefix,
  lawyerConfig.personalInfo.fullName,
);

export const metadata: Metadata = {
  title: {
    default: `${publicName} | ${lawyerConfig.office.name}`,
    template: `%s | ${lawyerConfig.office.name}`,
  },
  description: lawyerConfig.office.intro,
  applicationName: lawyerConfig.office.name,
  authors: [{ name: publicName }],
};

export const viewport: Viewport = {
  themeColor: "#09090B",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      data-theme={lawyerConfig.activeTheme}
      suppressHydrationWarning
      className={`${playfair.variable} ${jakarta.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-canvas font-sans text-ink">
        <script
          dangerouslySetInnerHTML={{
            __html: themeBootScript(lawyerConfig.activeTheme, lawyerConfig.showThemeSwitcher),
          }}
        />
        <ThemeProvider
          defaultTheme={lawyerConfig.activeTheme}
          allowSwitch={lawyerConfig.showThemeSwitcher}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
