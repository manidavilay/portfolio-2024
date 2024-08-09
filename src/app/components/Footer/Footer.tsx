"use client";
import classNames from "classnames";
import useIsMobile from "@/app/hooks/useIsMobile";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.scss";

const Footer = () => {
  const isMobile = useIsMobile();

  return (
    <footer className={classNames(styles.footer, "absolute")}>
      <div className="flex justify-between md:flex-row flex-col md:items-end items-center w-11/12 h-full mx-auto md:pb-8 sm:pb-6 pb-4">
        <div
          className={classNames(
            styles.footer__links,
            "flex flex-col justify-end md:mb-0 mb-4"
          )}
        >
          <Link
            href="mailto:vilaymanida@gmail.com"
            className="inline-flex items-center md:justify-start justify-center"
          >
            <Image
              src="/assets/icons/mail.svg"
              width={!isMobile ? "25" : "20"}
              height={!isMobile ? "25" : "20"}
              alt="Logo mail"
              className="mr-1"
            />
            vilaymanida@gmail.com
          </Link>
          <Link
            href="https://www.linkedin.com/in/manida-vilay/"
            className="inline-flex items-center md:justify-start justify-center mt-1"
            target="_blank"
          >
            <Image
              src="/assets/icons/linkedin.svg"
              width={!isMobile ? "25" : "20"}
              height={!isMobile ? "25" : "20"}
              alt="Linkedin logo"
              className="mr-1"
            />
            linkedin
          </Link>
          <Link
            href="/resume.pdf"
            target="_blank"
            className={classNames(styles.footer__logoWrapper, "inline-flex items-center md:justify-start justify-center mt-1")}
          >
            <Image
              src="/assets/logos/mv-squared-logo.svg"
              width="20"
              height="20"
              alt="Manida Vilay's squared logo"
              className={classNames(styles.footer__logo, "mr-2")}
            />
            download resume here
          </Link>
        </div>
        <p className={classNames(styles.footer__copyright, "flex items-end")}>
          © designed, animated and coded by manida vilay - 2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
