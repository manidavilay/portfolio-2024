"use client";
import { useEffect, useState } from "react";
import Loading from "../components/Loading/Loading";

export default function Home() {
  const [isLoadingVisible, setIsLoadingVisible] = useState(true);
  const [isDoneLoading, setIsDoneLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsDoneLoading(!isDoneLoading);
    }, 6100);
    setTimeout(() => {
      setIsLoadingVisible(!isLoadingVisible);
    }, 7200);
  }, []);

  return (
    <main>
      {isLoadingVisible ? (
        <Loading isDoneLoading={isDoneLoading} />
      ) : (
        <p>This is the homepage</p>
      )}
    </main>
  );
}
