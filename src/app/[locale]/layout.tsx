import { getMessages } from "next-intl/server";
import Image from "next/image";

type HomeContentItem = {
  headings: string;
  text: string | string[] | string[][];
  textType: "string" | "array" | "table";
  photo?: string;
};

export default async function HomePage() {
  const messages = await getMessages();
  const content = messages.home.content as HomeContentItem[];

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">{messages.home.title}</h1>
      <p className="text-l mb-8">{messages.home.introduction}</p>

      {content.map((item, index) => (
        <section key={index} className="mb-10">
          <h2 className="text-xl font-semibold mb-3">{item.headings}</h2>

          {/* 單行文字 */}
          {item.textType === "string" && typeof item.text === "string" && (
            <p className="text-gray-700">{item.text}</p>
          )}

          {/* 多段段落文字 */}
          {item.textType === "array" && Array.isArray(item.text) && (
            <div className="space-y-2 text-gray-700 leading-relaxed">
              {item.text.map((t, i) => (
                <p key={i}>{t}</p>
              ))}
            </div>
          )}

          {/* 表格格式的技能列 */}
          {item.textType === "table" && Array.isArray(item.text) && (
            <div className="overflow-x-auto border border-gray-200 rounded-md">
              <table className="min-w-full text-sm text-left border-collapse">
                <thead className="bg-gray-100 text-gray-700 font-semibold">
                  <tr>
                    {(item.text[0] as string[]).map((header, i) => (
                      <th key={i} className="px-4 py-2 border-b">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {(item.text as string[][]).slice(1).map((row, rowIndex) => (
                    <tr key={rowIndex} className="hover:bg-gray-50">
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className="px-4 py-2 border-b">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* 圖片（如有） */}
          {item.photo && (
            <div className="mt-4">
              <Image
                src={item.photo}
                alt={item.headings}
                width={800}
                height={600}
                className="rounded-lg shadow-md"
              />
            </div>
          )}
        </section>
      ))}
    </main>
  );
}
