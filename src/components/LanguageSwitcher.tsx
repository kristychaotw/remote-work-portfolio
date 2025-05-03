"use client";

import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";

export default function LanguageSwitcher({ locale }: { locale: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const toggleLocale = locale === "en" ? "zh" : "en";

  const handleClick = () => {
    const segments = pathname.split("/").filter(Boolean);
    const pathWithoutLocale = segments.slice(1).join("/");
    const newPath = `/${toggleLocale}/${pathWithoutLocale}`;

    startTransition(() => {
      router.push(newPath);
    });
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 border rounded text-sm hover:bg-gray-100"
      disabled={isPending}
    >
      {locale === "zh" ? "English" : "中文"}
    </button>
  );
}
