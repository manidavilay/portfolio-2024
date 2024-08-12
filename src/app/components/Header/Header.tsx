"use client";
import classNames from "classnames";
import Logo from "../Logo/Logo";
import styles from "./styles.module.scss";

interface Props {
  isItemOpened: boolean;
  openedItem: string | null;
  setOpenedItem: (item: string | null) => void;
}

const Header = ({ isItemOpened, setOpenedItem, openedItem }: Props) => {
  const menuItems = [
    { name: "about", label: "about" },
    { name: "works", label: "works" },
  ];

  const openMenuItem = (item: string) => {
    if (!isItemOpened) {
      setOpenedItem(item);
    }
  };

  return (
    <header className="relative flex items-center md:justify-center justify-end w-11/12 md:mt-10 mt-6 mx-auto">
      <Logo />
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
