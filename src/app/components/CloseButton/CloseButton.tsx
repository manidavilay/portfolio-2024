"use client";
import { useState } from "react";
import classNames from "classnames";
import useIsMobile from "@/app/hooks/useIsMobile";
import styles from './styles.module.scss';

interface Props {
  closeItem: () => void
}

const CloseButton = ({closeItem}: Props) => {
  const isMobile = useIsMobile();
  const [isCrossHovered, setIsCrossHovered] = useState(false);

  const mouseEnterCross = () => {
    setIsCrossHovered(true);
  }

  const mouseLeaveCross = () => {
    setIsCrossHovered(false);
  }

    return (
        <button
        className={classNames(styles.closeBtn, "absolute")}
        onClick={closeItem}
        onMouseEnter={mouseEnterCross}
        onMouseLeave={mouseLeaveCross}
      >
        <div className={classNames(styles.closeBtn__cross, styles['closeBtn__cross--left'], "absolute", {
          [styles.isHovered]: !isMobile && isCrossHovered
        })} />
        <div className={classNames(styles.closeBtn__cross, styles['closeBtn__cross--right'], "absolute", {
          [styles.isHovered]: !isMobile && isCrossHovered
        })} />
      </button>
    )
}

export default CloseButton