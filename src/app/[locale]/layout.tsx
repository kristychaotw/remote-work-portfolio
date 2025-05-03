import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLocale } from "next-intl";
import { ReactNode } from "react";

export default function LocaleLayout({ children }: { children: ReactNode }) {
  const locale = useLocale();
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      {/* 語言切換區域放在這裡 */}
      <div className="flex justify-end mb-6">
        <LanguageSwitcher locale={locale} />
      </div>

      {/* 頁面內容 */}
      {children}
    </main>
  );
}
