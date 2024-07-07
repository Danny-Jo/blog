'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { AspectRatio } from './ui/aspect-ratio';

type Props = {
  page: any;
};

const ArticleCard = ({ page }: Props) => {
  const [loading, setLoading] = useState(true);

  return (
    <Link href={'/article'}>
      <div className="flex gap-2.5">
        <div className="relative w-full min-w-[100px] max-w-[195px] rounded-[20px]">
          <AspectRatio ratio={13 / 9}>
            <Skeleton className="w-[195px] h-[135px] rounded-[20px]" />
            <Image
              src={page.cover.file.url}
              fill
              style={{ objectFit: 'cover' }}
              alt="thumbnail"
              placeholder="blur"
              blurDataURL="https://www.google.com/url?sa=i&url=https%3A%2F%2Fkr.freepik.com%2Fpremium-photo%2Fnight-sky-beyond-space-wallpaper-is-computer-generated-image-star-field-nebula_42881924.htm&psig=AOvVaw04ycWQFkYwrUEcNVrhKJCg&ust=1720197488268000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIDqmJPpjYcDFQAAAAAdAAAAABAE"
              className="rounded-[20px]"
              onLoad={() => setLoading(false)}
            />
          </AspectRatio>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-[18px] font-semibold">
            {page.properties.title.title[0].plain_text}
          </h1>
          <div className="text-[16px]">
            {page.properties.description.rich_text[0].plain_text}
          </div>
          <div className="text-[13px]">{page.created_time}</div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
