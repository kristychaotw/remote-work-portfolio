import { getTranslations } from "next-intl/server";

export default async function HomePage() {
  const t = await getTranslations("home");

  return (
    <main className="p-8">
      <h1 className="text-2xl">{t("title")}</h1>
    </main>
  );
}
