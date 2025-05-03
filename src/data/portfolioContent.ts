export type PortfolioItem = {
  id: string;
  title: string;
  description: string;
  link: string;
};

export const portfolioContent: Record<"zh" | "en", PortfolioItem[]> = {
  zh: [
    {
      id: "crm-system",
      title: "CRM SaaS 系統模組開發",
      description: "開發帳號管理、權限控制、發票功能（使用 React / Redux）",
      link: "https://litloyal.com",
    },
    {
      id: "brand-site",
      title: "品牌網站製作",
      description: "使用 Next.js + Firebase 架設形象官網",
      link: "https://loveboboanimalreiki.com/",
    },
    {
      id: "vue-todo",
      title: "Vue TodoList 小專案",
      description: "練習 Vue 3 基礎語法與組件設計",
      link: "https://kristychaotw.github.io/vue-todolist/",
    },
  ],
  en: [
    {
      id: "crm-system",
      title: "CRM SaaS Module Development",
      description:
        "Built account management, permission control, and invoicing features using React / Redux.",
      link: "https://litloyal.com",
    },
    {
      id: "brand-site",
      title: "Brand Website",
      description: "Developed a marketing site using Next.js and Firebase.",
      link: "https://loveboboanimalreiki.com/",
    },
    {
      id: "vue-todo",
      title: "Vue TodoList",
      description: "Practiced Vue 3 syntax and component design",
      link: "https://kristychaotw.github.io/vue-todolist/",
    },
  ],
};
