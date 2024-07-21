import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { getArticleBySlug, getArticleSlugs } from '@/lib/articles';
import Giscus from '@/components/giscus';

export async function generateStaticParams() {
  const articleSlugs = getArticleSlugs();

  return articleSlugs.map((article) => ({
    slug: article.replace('.md', ''),
  }));
}

interface ArticleProps {
  params: {
    slug: string;
  };
}

const ArticleDetailPage = ({ params }: ArticleProps) => {
  const { content } = getArticleBySlug(params.slug);

  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="flex flex-col w-full max-w-[780px] items-center justify-center gap-6 md:gap-14 pb-24">
        <div className="w-full max-w-[780px] prose md:prose-lg dark:prose-invert text-[#F0F0F0]">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              img: ({ alt, src }) => (
                <Image
                  alt={alt || ''}
                  src={src || ''}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  width={780}
                  height={475}
                  className="mx-auto rounded-lg !mb-[4px]"
                />
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
        <div className="w-full">
          <Giscus />
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailPage;
