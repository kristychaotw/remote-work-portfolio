import { getTranslations, getLocale } from "next-intl/server";
import { homeContent } from "@/data/homeContent";
import { Link } from "@/i18n/navigation";

type HomeContentItem = {
  headings: string;
  textType: "string" | "array" | "table";
  text: string | string[] | string[][];
};

export default async function HomePage() {
  const t = await getTranslations("home");
  const rawLocale = await getLocale();
  const locale = rawLocale.startsWith("zh") ? "zh" : "en";
  const content = homeContent[locale as "zh" | "en"] as HomeContentItem[];
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">{t("title")}</h1>
      <p className="text-base whitespace-pre-line mb-12">{t("introduction")}</p>
      <Link
        className="text-blue-600 hover:text-blue-800 block mb-8 "
        href="/portfolio"
      >
        {t("portfolio")}
      </Link>
      {content.map((item: HomeContentItem, index: number) => (
        <section key={index} className="mb-10">
          <h2 className="text-xl font-semibold mb-4">{item.headings}</h2>

          {/* 單行文字 */}
          {item.textType === "string" && typeof item.text === "string" && (
            <p>{item.text}</p>
          )}

          {/* 多段落 */}
          {item.textType === "array" &&
            Array.isArray(item.text) &&
            (item.text as string[]).map((line, idx) => <p key={idx}>{line}</p>)}

          {/* 表格 */}
          {item.textType === "table" &&
            Array.isArray(item.text) &&
            Array.isArray((item.text as string[][])[0]) && (
              <table className="w-full text-sm border border-gray-300">
                <tbody>
                  {(item.text as string[][]).map((row, rIdx) => (
                    <tr key={rIdx}>
                      {row.map((cell, cIdx) => (
                        <td
                          key={cIdx}
                          className="border px-2 py-1 align-top whitespace-pre-line"
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
        </section>
      ))}
    </main>
  );
}
