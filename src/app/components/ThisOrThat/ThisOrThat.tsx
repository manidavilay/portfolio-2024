"use client";
import classNames from "classnames";
import useIsMobile from "@/app/hooks/useIsMobile";
import styles from "./styles.module.scss";

const ThisOrThat = () => {
  const preferencesList = [
    { left: "sunrise", right: "sunset", rightChoice: true },
    { left: "early bird", right: "night owl", rightChoice: true },
    { left: "coffee", right: "tea", leftChoice: true, rightChoice: true },
    { left: "beach", right: "mountains", rightChoice: true },
    { left: "animes", right: "series", leftChoice: true },
    { left: "introvert", right: "extrovert", leftChoice: true },
    { left: "go out", right: "stay in", rightChoice: true },
    { left: "cold weather", right: "hot weather", rightChoice: true },
    { left: "golden retriever", right: "black cat", rightChoice: true },
  ];

  return (
    <div
      className={classNames(
        styles.thisOrThat,
        "absolute flex flex-col justify-center items-center py-10 px-2"
      )}
    >
      {preferencesList.map(
        ({ left, right, leftChoice, rightChoice }, index) => (
          <div key={index} className="flex justify-evenly w-full my-2">
            <span
              className={
                leftChoice ? "font-bold underline underline-offset-4" : ""
              }
            >
              {left}
            </span>
            <span
              className={
                rightChoice ? "font-bold underline underline-offset-4" : ""
              }
            >
              {right}
            </span>
          </div>
        )
      )}
    </div>
  );
};

export default ThisOrThat;
