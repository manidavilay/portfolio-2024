"use client";
import classNames from "classnames";
import Drawing from "../Drawing/Drawing";
import styles from "./styles.module.scss";

interface Props {
  isDoneLoading: boolean;
}

const Loading = ({ isDoneLoading }: Props) => {
  return (
    <section
      className={classNames(styles.main, "w-full h-screen", {
        [styles.isDoneLoading]: isDoneLoading,
      })}
    >
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
                "mt-4 mb-7 sm:mt-5 sm:mb-8"
              )}
            />
            <h2 className={classNames(styles.subtitle)}>
              front-end web developer
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loading;
