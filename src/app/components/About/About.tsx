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
  setIsItemOpened: (value: boolean) => void;
}

const About = ({ isItemOpened, setIsItemOpened }: Props) => {
  const [isAvatarVisible, setIsAvatarVisible] = useState(true);
  const isMobile = useIsMobile();

  const aboutText = (
    <>
      <p>
        My name is <b>Manida</b>, and i am a <b>front-end web developer</b> from
        France.
      </p>
      <p>
        Since childhood, i’ve aspired to become a <b>doctor</b>, leading me to
        attend medical school at UPEC (Université Paris-Est-Créteil) after high
        school. However, after five years of rigorous study, i chose to pursue a
        different career path.
      </p>
      <p>
        The transition brought a mix of <b>fear</b>, <b>excitement</b>,{" "}
        <b>doubt</b>, <b>joy</b>, and <b>relief</b>.
      </p>
      <p>
        Seeking a profession that continuously challenges me and fosters
        learning, i switched to web development. It&lsquo;s been five years now,
        and despite the challenges, i remained dedicated, curious, and eager to
        learn.
      </p>
      <p>
        I love <b>traveling</b> but as i can’t do it all year long (sadly), i
        enjoy spending my free time <b>watching anime</b>, experimenting with{" "}
        <b>cooking</b>, <b>DIY stuff</b> and <b>playing music</b>.
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
    <ItemsLayout isItemOpened={isItemOpened} setIsItemOpened={setIsItemOpened}>
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
            hover/tap for a surprise
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
    </ItemsLayout>
  );
};

export default About;
