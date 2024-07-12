"use client";
import classNames from "classnames";
import useIsMobile from "../../hooks/useIsMobile";
import Link from "next/link";
import Image from "next/image";
import Logo from "../Logo/Logo";
import styles from "./styles.module.scss";

const Footer = () => {
  const isMobile = useIsMobile();

  return (
    <footer className={classNames(styles.footer, "absolute")}>
      <div className="flex justify-between md:flex-row flex-col md:items-end items-center w-11/12 h-full mx-auto md:pb-8 sm:pb-6 pb-4">
        <div
          className={classNames(
            styles.footer__links,
            "flex flex-col justify-end"
          )}
        >
          <Link
            href="mailto:vilaymanida@gmail.com"
            className="inline-flex items-center md:justify-start justify-center"
          >
            <Image
              src="/assets/icons/mail.svg"
              width="15"
              height="15"
              alt="Logo mail"
              className="mr-1"
            />
            vilaymanida@gmail.com
          </Link>
          <Link
            href="https://www.linkedin.com/in/manida-vilay/"
            className="inline-flex items-center md:justify-start justify-center"
            target="_blank"
          >
            <Image
              src="/assets/icons/linkedin.svg"
              width="15"
              height="15"
              alt="Linkedin logo"
              className="mr-1"
            />
            linkedin
          </Link>
        </div>
        <p className={classNames(styles.footer__copyright, "flex items-end")}>
          © designed, animated and coded by manida vilay - 2024
        </p>
        {!isMobile && (
          <div className="flex flex-col items-center justify-end">
            <Logo logoLink="/resume.pdf" />
            <p className={classNames(styles.footer__resume, "mt-2")}>
              see resume here
            </p>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
