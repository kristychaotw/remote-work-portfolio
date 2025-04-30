import { getRequestConfig } from "next-intl/server";
import { defaultLocale } from "@/lib/i18n"; // 引用你自己定義的預設語系

export default getRequestConfig(async ({ locale }) => {
  const currentLocale = locale ?? defaultLocale;

  return {
    locale: currentLocale,
    messages: (await import(`./src/messages/${currentLocale}.json`)).default,
  };
});
