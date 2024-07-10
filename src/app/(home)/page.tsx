"use client";
import { useEffect, useState } from "react";
import classNames from "classnames";
import Loading from "../components/Loading/Loading";
import styles from "./styles.module.scss";

export default function Home() {
  const [isLoadingVisible, setIsLoadingVisible] = useState(true);
  const [isDoneLoading, setIsDoneLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsDoneLoading(!isDoneLoading);
    }, 6000);
    setTimeout(() => {
      setIsLoadingVisible(!isLoadingVisible);
    }, 7800);
  }, []);

  return (
    <main className="relative">
      {isLoadingVisible && <Loading isDoneLoading={isDoneLoading} />}
      <section className={classNames(styles.homeContainer, "absolute")}>
        je teste en écrivant du lorem ipsum
      </section>
    </main>
  );
}
