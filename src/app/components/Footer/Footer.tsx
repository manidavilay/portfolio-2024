"use client";
import classNames from "classnames";
import useIsMobile from "@/app/hooks/useIsMobile";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.scss";

const Footer = () => {
  const isMobile = useIsMobile();

  const footerLinks = [
    {
      href: "mailto:vilaymanida@gmail.com",
      src: "mail.svg",
      alt: "Logo mail",
      text: "vilaymanida@gmail.com",
    },
    {
      href: "https://www.linkedin.com/in/manida-vilay/",
      src: "linkedin.svg",
      alt: "Linkedin logo",
      text: "linkedin",
    },
    {
      href: "/resume.pdf",
      src: "mv.svg",
      alt: "Manida Vilay's squared logo",
      text: "download resume here",
    },
  ];

  return (
    <footer className={classNames(styles.footer, "absolute")}>
      <div className="flex justify-between md:flex-row flex-col md:items-end items-center w-11/12 h-full mx-auto md:pb-8 sm:pb-6 pb-4">
        <div
          className={classNames(
            styles.footer__links,
            "flex flex-col justify-end md:mb-0 mb-4"
          )}
        >
          {footerLinks.map(({ href, src, alt, text }, index) => (
            <Link
              key={index}
              href={href}
              className="inline-flex items-center md:justify-start justify-center mt-1"
            >
              <Image
                src={`/assets/icons/${src}`}
                width={!isMobile ? "22" : "18"}
                height={!isMobile ? "22" : "18"}
                alt={alt}
                className="md:mr-2 mr-1"
              />
              {text}
            </Link>
          ))}
        </div>
        <p className={classNames(styles.footer__copyright, "flex items-end")}>
          © designed, animated and coded by manida vilay - 2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
