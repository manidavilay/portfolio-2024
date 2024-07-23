"use client";
import { useEffect, useState } from "react";
import classNames from "classnames";
import CloseButton from "@/app/components/CloseButton/CloseButton";
import styles from "./styles.module.scss";

interface Props {
  isItemOpened: boolean;
  children: React.ReactNode;
  setOpenedItem: (item: string | null) => void;
  isScrollable?: boolean;
}

const ItemsLayout = ({ isItemOpened, children, setOpenedItem, isScrollable }: Props) => {
  const [hasTranslated, setHasTranslated] = useState(false);

  const closeItem = () => {
    setHasTranslated(false);
  };

  const handleTransitionEnd = () => {
    if (!hasTranslated) {
      setOpenedItem(null);
    }
  };

  useEffect(() => {
    if (isItemOpened) {
      setHasTranslated(true);
    }
  }, [isItemOpened]);

  return (
    <section
      className={classNames(styles.itemsLayout, "absolute", {
        [styles.hasTranslated]: hasTranslated,
        [styles.isScrollable]: isScrollable
      })}
      onTransitionEnd={handleTransitionEnd}
    >
      <CloseButton closeItem={closeItem} />
      {children}
    </section>
  );
};

export default ItemsLayout;
