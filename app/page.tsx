"use client";

import TourGuide from "@/components/tour-guide";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [startTour, setStartTour] = useState(true);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleStartTour = () => {
    setStartTour(true);
  };

  const handleTourEnd = () => {
    setStartTour(false);
  };

  if (!loaded) {
    return null;
  }
  return (
    <div className="w-full">
      <div className="flex justify-center">
        <button
          className="px-4 py-2 text-white bg-green-500 rounded-md absolute top-4"
          onClick={handleStartTour}
        >
          Start Virat Kohli Journey Tour
        </button>
      </div>
      {startTour && (
        <TourGuide
          start={startTour}
          setStartTour={setStartTour}
          onTourEnd={handleTourEnd}
        />
      )}

      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <p
            id="step-1"
            className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-green-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-green-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-green-800/30"
          >
            Start your journey by revisiting Virat Kohli early days in&nbsp;
            <code className="font-mono font-bold">Delhi, India</code>
          </p>
          <div
            id="step-2"
            className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none"
          >
            <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="https://www.viratkohli.club"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/virat-logo.svg"
                alt="Virat Kohli Logo"
                className="dark:invert"
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-green-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/virat-image.svg"
            alt="Virat Kohli Image"
            width={180}
            height={37}
            priority
          />
        </div>

        <div
          id="step-3"
          className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left"
        >
          <a
            href="https://en.wikipedia.org/wiki/Virat_Kohli"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Early Career{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Learn about Virat Kohli rise through domestic cricket in Delhi.
            </p>
          </a>

          <a
            href="https://www.icc-cricket.com/players/virat-kohli"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Captaincy Era{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Explore Kohli journey as the Indian cricket team captain.
            </p>
          </a>

          <a
            href="https://www.instagram.com/virat.kohli/"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Social Media{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Follow Virat on social media to stay updated with his life.
            </p>
          </a>

          <a
            href="https://viratkohli.club/store"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Merchandise{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Explore exclusive Virat Kohli merchandise here.
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}
