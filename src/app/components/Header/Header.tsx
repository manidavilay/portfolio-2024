"use client";
import classNames from "classnames";
import useIsMobile from "@/app/hooks/useIsMobile";
import Image from "next/image";
import styles from "./styles.module.scss";

interface Props {
  menuItems: { name: string; label: string; }[];
  openMenuItem: (item: string) => void;
  isItemOpened: boolean;
  openedItem: string | null;
  setOpenedItem: (item: string | null) => void;
}

const Header = ({ menuItems, openMenuItem, isItemOpened, setOpenedItem, openedItem }: Props) => {
  const isMobile = useIsMobile();

  return (
    <header className="relative flex items-center md:justify-center justify-end w-11/12 md:mt-10 mt-6 mx-auto">
      <Image
        src="/assets/logos/mv-logo.svg"
        width={!isMobile ? 130 : 100}
        height={!isMobile ? 45 : 35}
        alt="Manida VILAY's logo"
        className={classNames(styles.logo, "absolute")}
      />
      <ul className={classNames(styles.menu, "flex")}>
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={classNames(styles.menu__button, {
              [styles.isActive]: openedItem === item.name,
            })}
          >
            <button onClick={() => openMenuItem(item.name)}>
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
