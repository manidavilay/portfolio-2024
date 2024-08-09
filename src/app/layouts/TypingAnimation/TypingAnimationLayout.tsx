import React from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

interface Props {
  children: React.ReactNode;
  type: string;
}

const TypingAnimationLayout = ({ children , type }: Props) => {
    return (
        <div
          className={classNames(styles.typing__shared, {
            [styles.loadingText]: type === "loadingText",
            [styles.titleText]: type === "titleText",
            [styles.subtitleText]: type === "subtitleText",
            [styles.listeningText]: type === "listeningText",
            [styles.headphonesText]: type === "headphonesText"
          })}
        >
          {children}
        </div>
      );
}

export default TypingAnimationLayout;