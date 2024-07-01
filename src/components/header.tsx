import React from 'react';
import { Button } from './ui/button';
import { ThemeToggle } from './theme-toggle';
import { Separator } from './ui/separator';
import { LinkData, PathData } from '@/assets/data/types';
import linkData from '@/assets/data/link.json';
import pathData from '@/assets/data/path.json';
import GithubMarkIcon from '@/assets/images/svg/github-mark.svg';
import Link from 'next/link';
import { bitter, pacifico, merriweather, inter } from '@/app/fonts';

export const Header = () => {
  const link: LinkData = linkData;
  const path: PathData = pathData;

  const fonts = [inter, merriweather, pacifico];

  return (
    <header className="h-14 px-6 w-full flex fixed top-0 z-10 bg-opacity-50 backdrop-blur">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between">
        <Link href="/" aria-label="Danny-Jo Blog">
          <div className="flex items-center gap-2 font-custom">
            <span className={`${bitter.className} text-3xl`}>Danny-Jo</span>
          </div>
        </Link>
        <nav className="flex gap-2 items-center">
          {path.map((data, index) => (
            <Link href={data.href} key={data.href}>
              <Button variant="ghost">
                <span className={fonts[index % path.length].className}>
                  {data.name}
                </span>
              </Button>
            </Link>
          ))}
          <Separator orientation="vertical" className="h-7" />
          <ThemeToggle />
          <a href={link.github} target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" className="p-0 w-10 h-10">
              <GithubMarkIcon
                width="22"
                height="22"
                className="text-[#020817] dark:text-[#f8fafc]"
              />
            </Button>
          </a>
        </nav>
      </div>
    </header>
  );
};
