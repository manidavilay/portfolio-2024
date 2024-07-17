"use client";
import { useEffect, useState } from "react";
import classNames from "classnames";
import CloseButton from "@/app/components/CloseButton/CloseButton";
import styles from "./styles.module.scss";

interface Props {
  isItemOpened: boolean;
  setIsItemOpened: (value: boolean) => void;
  children: React.ReactNode;
  setOpenedItem: (item: string | null) => void;
}

const ItemsLayout = ({ isItemOpened, setIsItemOpened, children, setOpenedItem }: Props) => {
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
      className={classNames(styles.itemsLayout, "absolute flex items-center", {
        [styles.hasTranslated]: hasTranslated,
      })}
      onTransitionEnd={handleTransitionEnd}
    >
      <CloseButton closeItem={closeItem} />
      {children}
    </section>
  );
};

export default ItemsLayout;
