"use client"
import {useState } from "react";
import Loading from '../components/Loading/Loading';

export default function Home() {
  const [isLoadingVisible, setIsLoadingVisible] = useState(true)

  console.log(111, isLoadingVisible)
  
  const toggleLoading = () => {
    setIsLoadingVisible(!isLoadingVisible)
  }

  return (
    <main>
      {isLoadingVisible ? (
        <Loading toggleLoading={toggleLoading} />
      ) : (
        <p>
          This is the homepage
        </p>
      )}
    </main>
  );
}
