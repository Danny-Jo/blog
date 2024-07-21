import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const articlesDir = path.join(process.cwd(), 'public/articles');

export function getArticleSlugs() {
  const filenames = fs.readdirSync(articlesDir);
  return filenames.map((filename) => filename.replace('.md', ''));
}

export function getArticleBySlug(slug: string) {
  const articlePath = path.join(process.cwd(), 'public/articles', `${slug}.md`);
  const fileContents = fs.readFileSync(articlePath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    data,
    content,
  };
}

export function getArticles() {
  const filenames = fs.readdirSync(articlesDir);

  const articles = filenames.map((filename) => {
    const filePath = path.join(articlesDir, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug: filename.replace('.md', ''),
      title: data.title,
      date: data.date,
      author: data.author,
      description: data.description,
      hide: data.hide,
    };
  });

  const visibleArticles = articles.filter((article) => !article.hide);
  visibleArticles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return visibleArticles;
}
