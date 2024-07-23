"use client";
import { useState } from "react";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import useIsMobile from "@/app/hooks/useIsMobile";
import ItemsLayout from "@/app/layouts/Items/ItemsLayout";
import styles from "./styles.module.scss";

interface Props {
  isItemOpened: boolean;
  setOpenedItem: (item: string | null) => void;
}

const Works = ({ isItemOpened, setOpenedItem }: Props) => {
  const [isScrollable, setIsScrollable] = useState(true);
  const isMobile = useIsMobile();

  const projectItems = [
    {
      logo: "/assets/logos/dbd-logo.svg",
      alt: "Dead By Daylight logo",
      title: "Dead By Daylight",
      location: "personal project",
      description: "static website about a multiplayer (4 vs 1) horror game",
      tech: [{ type: "vue.js" }, { type: "nuxt" }, { type: "vuetify" }],
      website: "https://deadbydaylight.manidavilay.com/",
    },
    {
      logo: "/assets/logos/virtuo-logo.svg",
      alt: "Virtuo logo",
      title: "Govirtuo",
      location: "Virtuo",
      description:
        "online platform for car rentals, offering convenient and hassle-free way to rent vehicle",
      tech: [
        { type: "react.js" },
        { type: "next" },
        { type: "redux" },
        { type: "typescript" },
        { type: "node" },
        { type: "express" },
        { type: "mangoDB" },
        { type: "prismic" },
      ],
      website: "https://www.govirtuo.com/fr",
    },
    {
      logo: "/assets/logos/weather-app-logo.svg",
      alt: "Weather App logo",
      title: "Weather App",
      location: "personal project",
      description: "simple react weather app using OpenWeather API",
      tech: [{ type: "react.js" }, { type: "typescript" }],
      website: "https://weatherapp.manidavilay.com/",
    },
    {
      logo: "/assets/logos/sineora-logo.svg",
      alt: "Sineora logo",
      title: "Sineora",
      location: "freelance",
      description:
        "website about SaaS solution to connect corporates / investors and startups crossborder with relevant use cases",
      tech: [
        { type: "php" },
        { type: "bootstrap" },
        { type: "tailwind css" },
        { type: "jquery" },
        { type: "vue.js" },
      ],
      website: "https://www.sineora.com/en/about-us",
    },
    {
      logo: "/assets/logos/tv-logo.svg",
      alt: "Time Vallée logo",
      title: "Time Vallée",
      location: "Opsone",
      description:
        "showcase website of the new prestigious, luxious and innovative watchmaking brand created by Richemont Group",
      tech: [{ type: "ruby on rails" }, { type: "native javascript" }],
      website: "https://www.timevallee.com/",
    },
    {
      logo: "/assets/logos/geonames-logo.svg",
      alt: "Geonames logo",
      title: "Geonames API",
      location: "personal project",
      description: "website using Geonames API to fetch different countries",
      tech: [
        { type: "react.js" },
        { type: "typescript" },
        { type: "material UI" },
      ],
      website: "https://geonamesapi.manidavilay.com/",
    },
    {
      logo: "/assets/logos/cml-logo.svg",
      alt: "CML logo",
      title: "Créer Mon Livre",
      location: "Opsone",
      description: "e-shop selling customizable books",
      tech: [
        { type: "magento 1" },
        { type: "magento 2" },
        { type: "symfony" },
        { type: "native javascript" },
      ],
      website: "https://www.creermonlivre.com/",
    },
    {
      logo: "/assets/logos/opsone-logo.svg",
      alt: "Opsone logo",
      title: "Opsone",
      location: "Opsone",
      description: "an independent web agency's website",
      tech: [
        { type: "php" },
        { type: "wordpress" },
        { type: "native javascript" },
      ],
      website: "https://www.opsone.net/",
    },
    {
      logo: "/assets/logos/react-logo.svg",
      alt: "React logo",
      title: "React Calculator",
      location: "personal project",
      description: "simple calculator made in React and TypeScript",
      tech: [{ type: "react.js" }, { type: "typescript" }],
      website: "https://simplecalculator.manidavilay.com/",
    },
    {
      logo: "/assets/logos/cos-logo.svg",
      alt: "COS logo",
      title: "Fondation COS",
      location: "Opsone",
      description:
        "institutional website about professional readaptation and COS CRPF formation",
      tech: [
        { type: "php" },
        { type: "wordpress" },
        { type: "native javascript" },
      ],
      website: "https://www.cosformation.fr/",
    },
  ];

  return (
    <ItemsLayout
      isItemOpened={isItemOpened}
      setOpenedItem={setOpenedItem}
      isScrollable={isScrollable}
    >
      <div className={classNames(styles.works, "flex items-center")}>
        <div className="flex flex-wrap justify-center items-center w-10/12 h-3/4 m-auto">
          {projectItems.map(
            (
              { logo, alt, title, location, description, tech, website },
              index
            ) => (
              <div
                key={index}
                className={classNames(
                  styles.works__container,
                  "flex flex-col justify-center items-center xs:p-5 xs:m-5 m-3"
                )}
              >
                <div className={classNames(styles.works__logo, "mb-8")}>
                  <Image src={logo} layout="fill" alt={alt} />
                </div>
                <div className="flex md:flex-row flex-col w-full mb-8 italic">
                  <h2 className="font-bold">{title}</h2>
                  {!isMobile && <>&nbsp; - &nbsp;</>}
                  <span>{location}</span>
                </div>
                <div className="w-full mb-8">
                  <p className="mb-8 font-bold">{description}</p>
                  <div className="flex flex-wrap italic">
                    {tech.map(({ type }, index) => (
                      <span
                        key={index}
                        className={classNames(
                          styles.works__tech,
                          "py-1 xs:px-3 px-2 mr-2 my-1"
                        )}
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  href={website}
                  target="_blank"
                  className={classNames(styles.works__link, "text-center")}
                >
                  discover website here
                </Link>
              </div>
            )
          )}
        </div>
      </div>
    </ItemsLayout>
  );
};

export default Works;
