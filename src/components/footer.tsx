import siteData from '@/data/siteInfo.json';

const Footer = () => {
  return (
    <footer className="footer flex items-center justify-center">
      <div className="container mx-auto text-center">
        <p className="text-sm">{siteData.footerText}</p>
      </div>
    </footer>
  );
};

export default Footer;
