import type { Metadata } from "next";
import { Baloo_2, Mukta } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";
import { LanguagePickerModal } from "./components/ui/LanguagePicker";
import SplashScreen from "./components/ui/SplashScreen";
import BottomNav from "./components/layout/BottomNav";

const baloo = Baloo_2({
  subsets: ["latin", "devanagari"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-baloo",
  display: "swap",
});

const mukta = Mukta({
  subsets: ["latin", "devanagari"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mukta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tiera & Cielo Agro | टिएरा एंड सिएलो एग्रो",
  description:
    "Seed to Sell. We have All. — nursery, farm produce, and agri inputs for farmers in Haryana. स्वस्थ पौध और ईमानदार खेती।",
  keywords:
    "seedlings, nursery, organic farming, Haryana farmer, agri inputs, पौध, नर्सरी, किसान",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${baloo.variable} ${mukta.variable}`}>
      <body suppressHydrationWarning>
        <LanguageProvider>
          <SplashScreen />
          <LanguagePickerModal />
          {children}
          <BottomNav />
        </LanguageProvider>
      </body>
    </html>
  );
}
