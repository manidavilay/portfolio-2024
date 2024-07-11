"use client";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

interface Props {
    logoLink: string
}

const Logo = ({logoLink}: Props) => {
  return (
    <div
      className={classNames(
        styles.logoWrapper,
        "relative overflow-hidden"
      )}
    >
      <Link href={logoLink} target="_blank">
        <Image
          src="/assets/logos/mv-squared-logo.svg"
          width="40"
          height="15"
          alt="Manida Vilay's squared logo"
          className={styles.logo}
        />
        <span className={[styles.square, styles.square__top].join(" ")}></span>
        <span
          className={[styles.square, styles.square__right].join(" ")}
        ></span>
        <span
          className={[styles.square, styles.square__bottom].join(" ")}
        ></span>
        <span className={[styles.square, styles.square__left].join(" ")}></span>
      </Link>
    </div>
  );
};

export default Logo;
