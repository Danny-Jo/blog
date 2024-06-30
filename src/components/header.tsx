import React from "react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";
import { Separator } from "./ui/separator";
import { LinkData } from "@/assets/data/types";
import linkData from "@/assets/data/link.json";
import GithubMarkIcon from "@/assets/images/svg/github-mark.svg";
import Link from "next/link";
import { bitter, pacifico, merriweather } from "@/app/fonts";

export const Header = () => {
  const link: LinkData = linkData;

  return (
    <header className="h-14 px-6 w-full flex fixed top-0 z-10 bg-opacity-50 backdrop-blur">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between">
        <Link href="/" aria-label="Danny-Jo Blog">
          <div className="flex items-center gap-2 font-custom">
            <span className={`${bitter.className} text-3xl`}>Danny-Jo</span>
          </div>
        </Link>
        <nav className="flex gap-2 items-center">
          <Link href="/article">
            <Button variant="ghost">Article</Button>
          </Link>
          <Link href="/TIL">
            <Button variant="ghost">
              <span className={merriweather.className}>TIL</span>
            </Button>
          </Link>
          <Link href="/ingsta">
            <Button variant="ghost">
              <span className={pacifico.className}>Ingstagram</span>
            </Button>
          </Link>
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
