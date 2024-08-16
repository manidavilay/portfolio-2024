import { useCallback, useRef, useState } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

interface Props {
  isPlaying: boolean;
  setIsPlaying: (value: boolean) => void;
}

const PlayMusic = ({ isPlaying, setIsPlaying }: Props) => {
  const audioRefs = useRef<HTMLAudioElement[]>([]);
  const [volume, setVolume] = useState<number>(0.2);

  const audioSources = [
    {
      link: "/assets/sounds/lesfm-lost-ambient-lofi-60s.mp3",
      source: `Music by <a href=${`https://pixabay.com/users/lesfm-22579021/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=10821`}>Oleksii Kaplunskyi</a> from <a href=${`https://pixabay.com/music//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=10821`}>Pixabay</a>`,
      artist: 'Oleksii Kaplunskyi'
    },
    {
      link:
        "/assets/sounds/purplecat-opening-the-window-for-some-fresh-air.mp3",
      source: `Music by <a href=${`https://pixabay.com/users/purrplecat-41559583/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=186916`}>Purrple Cat</a> from <a href=${`https://pixabay.com/music//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=186916`}>Pixabay</a>`,
      artist: 'Purrple Cat'
    },
    {
      link: "/assets/sounds/xethrocc-summernight-lofi-vibes.mp3",
      source: `Music by <a href=${`https://pixabay.com/users/xethrocc-12734491/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=205065`}>Patrick A.</a> from <a href=${`https://pixabay.com/music//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=205065`}>Pixabay</a>`,
      artist: 'Patrick A'
    },
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
        audio.volume = volume;
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
      {audioSources.map(({link, source, artist}, index) => (
        <audio
          key={index}
          ref={(el) => {
            if (el) {
              audioRefs.current[index] = el;
            }
          }}
          src={link}
          data-source={source}
          data-artist={artist}
        />
      ))}
    </>
  );
};

export default PlayMusic;
