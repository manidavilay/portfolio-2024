"use client";
import { useEffect, useState } from "react";
import classNames from "classnames";
import useIsMobile from "@/app/hooks/useIsMobile";
import Image from "next/image";
import styles from "./styles.module.scss";

interface Props {
  isItemOpened: boolean
  setIsItemOpened: (value: boolean) => void
}

const About = ({isItemOpened, setIsItemOpened}: Props) => {
    const [hasTranslated, setHasTranslated] = useState(false);
    const isMobile = useIsMobile();

    const closeMenuItem = () => {
      setHasTranslated(false);
    }

    const handleTransitionEnd = () => {
      if (!hasTranslated) {
        setIsItemOpened(false);
      }
    }

    useEffect(() => {
      if (isItemOpened) {
        setHasTranslated(true)
      }
    }, [isItemOpened])

  return (
    <section className={classNames(styles.about, "absolute flex items-center", {
      [styles.hasTranslated]: hasTranslated,
    })} onTransitionEnd={handleTransitionEnd}>
      <button className={classNames(styles.about__closeButton, "absolute")} onClick={closeMenuItem}>
        <Image
          src="/assets/icons/cross.svg"
          width="15"
          height="15"
          alt="Closing cross icon"
        />
      </button>
      <div className="relative flex items-center md:flex-row flex-col w-10/12 mx-auto">
        <div className="flex flex-col items-center lg:w-4/12 md:w-6/12 w-12/12 md:mr-10 mr-0 md:mb-0 sm:mb-8 mb-8">
          <Image
            src={!isMobile ? "/assets/images/avatar.svg" : "/assets/images/mobile-avatar.svg"}
            width="345"
            height="450"
            alt="Manida Vilay's avatar"
            className={styles.about__avatar}
          />
          <p className={classNames(styles.about__avatarCaption, "mt-3")}>
            hover for a surprise
          </p>
        </div>
        <div className={classNames(styles.about__textBlock, "lg:w-8/12 md:w-6/12 w-12/12")}>
          <p>
            My name is <b>Manida</b>, and i am a <b>front-end web developer</b>{" "}
            from France.
          </p>
          <p>
            Since childhood, i’ve aspired to become a <b>doctor</b>, leading me
            to attend medical school at UPEC (Université Paris-Est-Créteil)
            after high school. However, after five years of rigorous study, i
            chose to pursue a different career path.
          </p>
          <p>
            The transition brought a mix of <b>fear</b>, <b>excitement</b>,{" "}
            <b>doubt</b>, <b>joy</b>, and <b>relief</b>.
          </p>
          <p>
            Seeking a profession that continuously challenges me and fosters
            learning, i turned to web development. It&lsquo;s been five years now, and
            despite the challenges, i remained dedicated, curious, and eager to
            learn.
          </p>
          <p>
            I love <b>traveling</b> but as i can’t do it all year long (sadly),
            i enjoy spending my free time <b>watching anime</b>, experimenting
            with <b>cooking</b>, <b>DIY stuff</b> and <b>playing music</b>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
