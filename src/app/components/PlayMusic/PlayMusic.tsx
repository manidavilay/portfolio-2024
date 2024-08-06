import { useCallback, useRef, useState } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

interface Props {
  isPlaying: boolean
  setIsPlaying: (value: boolean) => void;
}

const PlayMusic = ({ isPlaying, setIsPlaying }: Props) => {
  // const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRefs = useRef<HTMLAudioElement[]>([]);
  
  const audioSources = [
    "/assets/sounds/lesfm-lost-ambient-lofi-60s.mp3",
    "/assets/sounds/purplecat-opening-the-window-for-some-fresh-air.mp3",
    "/assets/sounds/xethrocc-summernight-lofi-vibes.mp3",
  ];

  const onAudioEnded = useCallback((index: number) => {
    const nextIndex = (index + 1) % audioRefs.current.length;
    if (audioRefs.current[nextIndex]) {
      audioRefs.current[nextIndex].play();
    }
  }, []);

  const playSound = () => {
    if (isPlaying) {
      audioRefs.current.forEach((audio) => audio.pause());
      setIsPlaying(false);
    } else {
      audioRefs.current.forEach((audio, index) => {
        audio.addEventListener("ended", () => onAudioEnded(index));
        if (index === 0) {
          audio.play();
        }
      });
      setIsPlaying(true);
    }
  };
  
  return (
    <>
      <div
        className={classNames(styles.playmusic__headphones, "absolute")}
        onClick={playSound}
      />
      {audioSources.map((src, index) => (
        <audio
          key={index}
          ref={(el) => {
            if (el) {
              audioRefs.current[index] = el;
            }
          }}
          src={src}
        />
      ))}
    </>
  );
};

export default PlayMusic;
