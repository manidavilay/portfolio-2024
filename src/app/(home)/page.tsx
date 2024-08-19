"use client";
import { useEffect, useState } from "react";
import classNames from "classnames";
import Loading from "../components/Loading/Loading";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import About from "../components/About/About";
import Works from "../components/Works/Works";
import PlayMusic from "../components/PlayMusic/PlayMusic";
import TypingAnimationLayout from "../layouts/TypingAnimation/TypingAnimationLayout";
import styles from "./styles.module.scss";

const Home = () => {
  const [isLoadingVisible, setIsLoadingVisible] = useState(true);
  const [isDoneLoading, setIsDoneLoading] = useState(false);
  const [isItemOpened, setIsItemOpened] = useState(false);
  const [openedItem, setOpenedItem] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const loadingTimeout = setTimeout(() => {
    setIsDoneLoading(true);
  }, 6000);

  const loadingVisibleTimeout = setTimeout(() => {
    setIsLoadingVisible(false);
  }, 7800);

  const skipLoadingPage = () => {
    setIsLoadingVisible(false);
  };

  useEffect(() => {
    return () => {
      clearTimeout(loadingTimeout);
      clearTimeout(loadingVisibleTimeout);
    };
  }, []);

  return (
    <main className="relative">
      {isLoadingVisible && (
        <Loading
          isDoneLoading={isDoneLoading}
          skipLoadingPage={skipLoadingPage}
        />
      )}
      <section className={classNames(styles.home, "absolute overflow-hidden")}>
        {/* <div className={styles.home__container}> */}
          <Header
            isItemOpened={isItemOpened}
            openedItem={openedItem}
            setOpenedItem={setOpenedItem}
          />
          <div className={classNames(styles.home__contentWrapper, "absolute flex flex-col w-10/12 m-auto")}>
            <div className={classNames(styles.home__titleWrapper, "absolute")}>
              {!isLoadingVisible && (
                <>
                  <TypingAnimationLayout type="titleText">
                    <h1 className={classNames(styles.home__title)}>
                      manida vilay
                    </h1>
                  </TypingAnimationLayout>
                  <TypingAnimationLayout type="subtitleText">
                    <h2 className={classNames(styles.home__subtitle, "mt-0 md:mt-2")}>
                      front-end web developer
                    </h2>
                  </TypingAnimationLayout>
                </>
              )}
            </div>
            <div
              className={classNames(
                styles.home__textWrapper,
                "absolute flex flex-col items-end"
              )}
            >
              {!isLoadingVisible && (
                <>
                  <TypingAnimationLayout type="listeningText">
                    <p>want to know what i am listening to ?</p>
                  </TypingAnimationLayout>
                  <TypingAnimationLayout type="headphonesText">
                    <p>
                      click on my headphones to{" "}
                      <i>{!isPlaying ? "play" : "stop"}</i>
                    </p>
                  </TypingAnimationLayout>
                </>
              )}
            </div>
          </div>
          <PlayMusic isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
          {openedItem === "about" && (
            <About
              isItemOpened={openedItem === "about"}
              setOpenedItem={setOpenedItem}
            />
          )}
          {openedItem === "works" && (
            <Works
              isItemOpened={openedItem === "works"}
              setOpenedItem={setOpenedItem}
            />
          )}
          <Footer />
        {/* </div> */}
      </section>
    </main>
  );
};

export default Home;
