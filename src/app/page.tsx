import ArticleCard from '@/components/article-card';
import { getArticles } from '@/lib/articles';

const Home = () => {
  const articles = getArticles();

  return (
    <section className="flex flex-col items-center justify-between p-24">
      {articles.map((article) => (
        <ArticleCard article={article} key={article.slug} />
      ))}
    </section>
  );
};

export default Home;
