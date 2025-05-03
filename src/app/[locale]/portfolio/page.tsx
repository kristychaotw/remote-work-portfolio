import { getTranslations, getLocale } from "next-intl/server";
import { portfolioContent, PortfolioItem } from "@/data/portfolioContent";
import { Link } from "@/i18n/navigation";

export default async function PortfolioPage() {
  const t = await getTranslations("portfolio");
  const rawLocale = await getLocale();
  const locale = rawLocale.startsWith("zh") ? "zh" : "en";

  const content: PortfolioItem[] = portfolioContent[locale];

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">{t("title")}</h1>
      <p className="mb-10 text-gray-700">{t("description")}</p>
      <Link className="text-blue-600 hover:text-blue-800 block mb-8 " href="/">
        {t("toHome")}
      </Link>
      <ul className="space-y-6">
        {content.map((item) => (
          <li key={item.id} className="border p-4 rounded shadow-sm">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="text-gray-600">{item.description}</p>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline mt-2 inline-block"
            >
              {t("viewProject")}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
