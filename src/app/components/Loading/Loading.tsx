"use client";
import { useState } from "react";
import classNames from "classnames";
import Drawing from "../Drawing/Drawing";
import styles from "./styles.module.scss";

interface Props {
  toggleLoading: () => void;
}

const Loading = ({ toggleLoading }: Props) => {
  const handleCTA = () => {
    toggleLoading();
  };

  return (
    <section className={classNames(styles.main, "w-full h-screen")}>
      <div
        className={classNames(
          styles.container,
          "relative flex justify-center items-center h-full"
        )}
      >
        <Drawing />
        <div
          className={classNames(
            styles.textBlock,
            "h-full flex flex-col items-center justify-center text-white"
          )}
        >
          <h1 className={styles.title}>Manida Vilay</h1>
          <div
            className={classNames(
              styles.subtitlesWrapper,
              "flex flex-col items-center justify-center"
            )}
          >
            <div
              className={classNames(
                styles.separator,
                "mt-2 mb-4 sm:mt-3 sm:mb-6"
              )}
            />
            <h2 className={classNames(styles.subtitle, "mb-10")}>
              front-end web developer
            </h2>
            <p className={styles.cta} onClick={handleCTA}>
              click here to enter
            </p>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Loading;
