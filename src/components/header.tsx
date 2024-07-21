import Link from 'next/link';
import ThemeToggler from './theme-toggler';
import siteData from '@/data/siteInfo.json';

const Header = () => {
  return (
    <header className="header fixed w-full flex top-0 z-10">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link href={'/'}>{siteData.siteName}</Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <ThemeToggler />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
