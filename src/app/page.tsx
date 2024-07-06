import { ArticleBox } from '@/components/article-box';
import ArticleCard from '@/components/article-card';

export default async function Home() {
  const { NOTION_API_TOKEN, NOTION_VERSION, NOTION_DB_ARTICLE_ID } =
    process.env;

  const res = await fetch(
    `https://api.notion.com/v1/databases/${NOTION_DB_ARTICLE_ID}/query`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${NOTION_API_TOKEN}`,
        'Notion-Version': NOTION_VERSION ?? '2022-06-28',
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    }
  );

  const data = await res.json();

  const list = (
    <div className="flex flex-col gap-[48px] max-w-[700px]">
      {data.results.map((page: any) => (
        <ArticleCard page={page} key={page.id} />
      ))}
    </div>
  );

  const sidebar = (
    <div className="px-6 pb-12">
      <ArticleBox title="추천하는 글" />
      <ArticleBox title="인기있는 글" />
    </div>
  );

  return <div className="flex justify-evenly min-h-12">{list}</div>;
}
