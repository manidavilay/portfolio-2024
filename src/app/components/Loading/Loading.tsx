"use client";
import classNames from "classnames";
import Drawing from "../Drawing/Drawing";
import TypingAnimationLayout from "@/app/layouts/TypingAnimation/TypingAnimationLayout";
import styles from "./styles.module.scss";

interface Props {
  isDoneLoading: boolean;
}

const Loading = ({ isDoneLoading }: Props) => {
  return (
    <section
      className={classNames(styles.main, "absolute w-full h-screen", {
        [styles.isDoneLoading]: isDoneLoading,
      })}
    >
      <div className="relative flex justify-center items-center h-full">
        <Drawing />
        <div
          className={classNames(
            styles.textWrapper,
            "h-full flex flex-col items-center justify-center text-white"
          )}
        >
          <h1 className={styles.textWrapper__title}>Manida Vilay</h1>
          <div className="flex flex-col items-center justify-center">
            <div
              className={classNames(
                styles.textWrapper__separator,
                "mt-4 mb-7 sm:mt-5 sm:mb-8"
              )}
            />
            <TypingAnimationLayout type="loadingText">
              <h2 className={classNames(styles.textWrapper__subtitle)}>
                front-end web developer
              </h2>
            </TypingAnimationLayout>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loading;
