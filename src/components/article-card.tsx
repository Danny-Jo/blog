import { ArticleData } from '@/scripts/validate-md';
import Link from 'next/link';

interface Props {
  article: ArticleData;
}

const ArticleCard = ({ article }: Props) => {
  return (
    <Link href={`articles/${article.slug}`}>
      <div>{article.title}</div>
    </Link>
  );
};

export default ArticleCard;
