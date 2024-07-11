"use client";
import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";
import Logo from "../Logo/Logo";
import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <footer className={classNames(styles.footer, "absolute")}>
      <div className="flex justify-between w-11/12 h-full mx-auto pb-8">
        <div className={classNames(styles.footer__links, "flex flex-col justify-end")}>
          <Link
            href="mailto:vilaymanida@gmail.com"
            className="inline-flex items-center"
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
            className="inline-flex items-center"
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
        <div className="flex flex-col items-center justify-end">
          <Logo logoLink="/resume.pdf" />
          <p className={classNames(styles.footer__resume, "mt-2")}>see resume here</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
