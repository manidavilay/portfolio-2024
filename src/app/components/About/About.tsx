"use client";
import { useState } from "react";
import classNames from "classnames";
import useIsMobile from "@/app/hooks/useIsMobile";
import Image from "next/image";
import ThisOrThat from "../ThisOrThat/ThisOrThat";
import styles from "./styles.module.scss";
import ItemsLayout from "@/app/layouts/Items/ItemsLayout";

interface Props {
  isItemOpened: boolean;
  setOpenedItem: (item: string | null) => void;
}

const About = ({ isItemOpened, setOpenedItem }: Props) => {
  const [isAvatarVisible, setIsAvatarVisible] = useState(true);
  const isMobile = useIsMobile();

  const aboutText = (
    <>
      <p>
        My name is <b>Manida</b>, and I am a <b>front-end web developer</b> from
        France.
      </p>
      <p>
        From a young age, I dreamed of becoming a <b>doctor</b>, which led me to  pursue medical studies at UPEC (Université Paris-Est-Créteil) right after high
        school. However, after five intense years of study, <b>I made the difficult decision to follow a different path</b>.
      </p>
      <p>
        The transition was a whirlwind of <b>fear</b>, <b>excitement</b>,{" "}
        <b>doubt</b>, and ultimately, <b>relief</b>.
      </p>
      <p>
        Driven by a desire for continuous challenge and growth, I turned to web development. It&lsquo;s now been five years,
        and despite the difficulties, my passion, curiosity, and commitment to learning have only deepened.
      </p>
      <p>
        I love <b>traveling</b> but since I can&lsquo;t do it year-round (sadly), I
       spend my free time exploring other passions like <b>watching anime</b>, experimenting with{" "}
        <b>cooking</b>, tackling <b>DIY projects</b> and <b>playing music</b>.
      </p>
    </>
  );

  const mouseEnterAvatar = () => {
    if (!isMobile) {
      setIsAvatarVisible(false)
    }
    return
  }

  const mouseLeaveAvatar = () => {
    if (!isMobile) {
      setIsAvatarVisible(true)
    }
    return
  }

  const touchAvatar = () => {
    if (window.innerWidth >= 768) {
      setIsAvatarVisible(!isAvatarVisible)
    }
  }

  return (
    <ItemsLayout isItemOpened={isItemOpened} setOpenedItem={setOpenedItem}>
      <div className="flex items-center w-full h-full">
        <div className="relative flex items-center md:flex-row flex-col w-10/12 mx-auto">
        <div className="flex flex-col items-center lg:w-4/12 md:w-6/12 w-12/12 md:mr-10 mr-0 md:mb-0 sm:mb-8 mb-8">
          <div className={classNames((styles.about__avatarBlock), "relative")} onClick={touchAvatar} onMouseEnter={mouseEnterAvatar} onMouseLeave={mouseLeaveAvatar}>
            <Image
              src={
                !isMobile
                  ? "/assets/images/avatar.svg"
                  : "/assets/images/mobile-avatar.svg"
              }
              layout="fill"
              alt="Manida Vilay's avatar"
              className={classNames(styles.about__avatar, "absolute", {
                [styles.isFading]: !isAvatarVisible
              })}
            />
            {!isMobile && (
              <ThisOrThat />
            )}
          </div>
          {!isMobile && (
            <p className={classNames(styles.about__avatarCaption, "mt-3 italic")}>
              hover/tap for more
            </p>
          )}
        </div>
          <div
            className={classNames(
              styles.about__textBlock,
              "md:overflow-y-auto overflow-y-scroll lg:w-8/12 md:w-6/12 w-12/12"
            )}
          >
            {aboutText}
          </div>
        </div>
      </div>
    </ItemsLayout>
  );
};

export default About;
