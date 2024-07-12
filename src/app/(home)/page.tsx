"use client";
import { useEffect, useState } from "react";
import classNames from "classnames";
import Loading from "../components/Loading/Loading";
import Header from "../components/Header/Header";
import Footer from '../components/Footer/Footer';
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
        <Header />
        <div className="sm:w-11/12 lg:w-9/12 w-10/12 m-auto">
          <div
            className={classNames(styles.homeContainer__titleWrapper)}
          >
            <h2 className={classNames(styles.homeContainer__title)}>
              manida vilay
            </h2>
            <h3 className={classNames(styles.homeContainer__subtitle, "mt-1")}>
              front-end web developer
            </h3>
          </div>
          <p
            className={classNames(
              styles.homeContainer__text,
              "text-right"
            )}
          >
            want to know what i am listening to ? <br />
            <b>click on my headphones</b>
          </p>
        </div>
      <Footer/>
      </section>
    </main>
  );
}
