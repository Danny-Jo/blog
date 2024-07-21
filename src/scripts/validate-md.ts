import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { z } from 'zod';

const articlesDirectory = path.join(process.cwd(), 'public/articles');

const articleDataSchema = z.object({
  title: z.string(),
  date: z.string(),
  author: z.string(),
  description: z.string(),

  category: z.string().optional(),
  thumbnail: z.string().optional(),
  tags: z.array(z.string()).optional(),
  hide: z.boolean().optional(),
});

export type ArticleData = z.infer<typeof articleDataSchema> & { slug: string };

function getArticleSlugs() {
  return fs
    .readdirSync(articlesDirectory)
    .filter((file) => file.endsWith('.md'));
}

function getArticleBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(articlesDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const parsedData = articleDataSchema.safeParse(data);
  if (!parsedData.success) {
    throw new Error(
      `Invalid frontmatter in file ${fullPath}: ${parsedData.error.message}`,
    );
  }

  return {
    slug: realSlug,
    data: parsedData.data,
    content,
  };
}

function validateAllArticles() {
  const slugs = getArticleSlugs();
  slugs.forEach((slug) => {
    getArticleBySlug(slug);
  });
}

validateAllArticles();
