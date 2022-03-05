import React from 'react';
import FooterSection from './FooterSection';

const Footer = () => {

  const footerLinks = {
    products: {
      title: "Products",
      links: ["Overview", "Pricing", "Marketplace", "Features", "Integrations"]
    },
    company: {
      title: "Company",
      links: ["About", "Team", "Blog", "Careers"]
    },
    connect: {
      title: "Connect",
      links: ["Contact", "Newsletter", "LinkedIn"]
    }
  }

  return (
    <footer className="Footer">
        <div>Blogr</div>
        <FooterSection title={footerLinks.products.title} links={footerLinks.products.links} />
        <FooterSection title={footerLinks.company.title} links={footerLinks.company.links} />
        <FooterSection title={footerLinks.connect.title} links={footerLinks.connect.links} />
    </footer>
  )
}

export default Footer;