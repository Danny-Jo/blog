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
    <div className="flex flex-col gap-1">
      {data.results.map((page: any) => (
        <h1 key={page.id} className="text-md">
          {page.properties.title.title[0].text.content}
        </h1>
      ))}
    </div>
  );

  return <>{list}</>;
}
