import Link from 'next/link';
import React from 'react';

type Props = {
  title: string;
};

export const ArticleBox = ({ title }: Props) => {
  return (
    <section className="w-[300px] mb-6 flex flex-col gap-2">
      <span className="text-[13px]">{title}</span>
      <article>
        <Link href={'/TIL'} className="flex flex-col gap-2">
          <span className="text-[15px]">title</span>
          <span className="text-[13px]">name</span>
        </Link>
      </article>
    </section>
  );
};
