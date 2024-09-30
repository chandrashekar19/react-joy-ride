import React from "react";
import { useEffect, useState } from "react";
import type { CallBackProps, Step } from "react-joyride";
import Joyride, { EVENTS, STATUS } from "react-joyride";
import Image from "next/image";

interface State {
  run: boolean;
  stepIndex: number;
  steps: Step[];
}

interface TourGuideProps {
  start: boolean;
  setStartTour: (value: boolean) => void;
  onTourEnd: () => void;
}

const TourGuide = ({ start, setStartTour, onTourEnd }: TourGuideProps) => {
  const [progress, setProgress] = useState<number>(1);
  const totalSteps: number = 4;

  const generateSteps = (val: number): Step[] => [
    {
      content: (
        <div className="p-3">
          <p className="text-4xl">Virat Kohli Stats</p>
          <div className="mt-6 w-full bg-white py-8 flex items-center justify-center">
            <Image
              src="/virat-kohli.jpg"
              alt="Virat Kohli"
              className="rounded-full"
              width={250}
              height={150}
              priority
            />
          </div>
          <p className="mt-12 text-2xl font-bold">
            Indian Cricketer - Virat Kohli
          </p>
          <p className="mt-6 mb-8 text-md">
            Virat Kohli is one of the greatest batsmen of all time in cricket.
            Here are some of his top stats:
          </p>
          <div className="mt-4 border-b border-sessionbutton-foreground" />
          <div className="absolute bottom-[34px] left-[47%] text-sm text-neutral-400">
            {val} of {totalSteps}
          </div>
        </div>
      ),
      locale: { skip: <strong aria-label="skip">Skip</strong> },
      styles: {
        options: {
          width: 700,
        },
      },
      placement: "center",
      target: "body",
    },
    {
      content: (
        <div className="mb-4 flex flex-col gap-4 px-2 text-left">
          <p className="mr-4 text-base font-bold">Virat Kohli Stats</p>
          <ul className="list-disc ml-5 text-md">
            <li>Matches Played: 500+</li>
            <li>Runs Scored: 25,000+</li>
            <li>Centuries: 70+</li>
            <li>ODI Average: 59.33</li>
            <li>T20 Average: 52.73</li>
            <li>Test Average: 53.14</li>
          </ul>
          <div className="absolute bottom-[30px] left-[38%] text-sm text-neutral-400">
            {val} of {totalSteps}
          </div>
        </div>
      ),
      styles: {
        options: {
          width: 380,
        },
      },
      placement: "bottom",
      target: "#step-2",
      title: "",
    },
    {
      content: (
        <div className="mb-4 flex flex-col gap-4 px-2 text-left">
          <p className="mr-4 text-base font-bold">Virat khli Records</p>
          <ul className="list-disc ml-5 text-md">
            <li>Wickets: 100+</li>
            <li>Wickets Lost: 20+</li>
            <li>Catches Taken: 80+</li>
            <li>Centuries: 80+</li>
            <li>Fifties Taken: 100+</li>
            <li>Average: 50.00</li>
          </ul>
          <div className="absolute bottom-[30px] left-[8%] text-sm text-neutral-400">
            {val} of {totalSteps}
          </div>
        </div>
      ),
      styles: {
        options: {
          width: 380,
        },
      },
      placement: "top",
      target: "#step-3",
      title: "",
    },
  ];

  const [{ run, steps }, setState] = useState<State>({
    run: start,
    stepIndex: 0,
    steps: generateSteps(progress),
  });

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      steps: generateSteps(progress),
    }));
  }, [progress]);

  useEffect(() => {
    if (start) {
      setState((prevState) => ({
        ...prevState,
        run: true,
        stepIndex: 0,
      }));
    }
  }, [start]);

  const handleJoyrideCallback = (data: CallBackProps) => {
    const { status, type, index } = data;

    const finishedStatuses: string[] = [STATUS.FINISHED, STATUS.SKIPPED];

    if (finishedStatuses.includes(status)) {
      setState({ steps, run: false, stepIndex: 0 });
      setStartTour(false);
      onTourEnd();
    } else if (([EVENTS.STEP_BEFORE] as string[]).includes(type)) {
      setProgress(index + 1);
    }
  };

  return (
    <Joyride
      continuous
      callback={handleJoyrideCallback}
      run={run}
      steps={steps}
      scrollToFirstStep
      hideCloseButton={false}
      disableCloseOnEsc
      disableOverlayClose
      spotlightPadding={10}
      showProgress
      showSkipButton
      debug
      styles={{
        overlay: {
          border: "6px solid lightblue",
        },
        spotlight: {
          border: "2px solid lightblue",
        },
        buttonClose: {
          marginTop: "5px",
          marginRight: "5px",
          width: "12px",
        },
        buttonNext: {
          outline: "2px solid transparent",
          outlineOffset: "2px",
          backgroundColor: "#1c7bd4",
          borderRadius: "5px",
          color: "#FFFFFF",
        },
        buttonSkip: {
          color: "A3A3A3",
        },
        tooltipFooter: {
          margin: "0px 16px 10px 10px",
        },
        buttonBack: {
          outline: "2px solid transparent",
          outlineOffset: "2px",
        },
        options: {
          zIndex: 100,
          arrowColor: "#1F1F1F",
          backgroundColor: "#1F1F1F",
          textColor: "#FFFFFF",
          overlayColor: "rgba(0, 0, 0, 0.9)",
          primaryColor: "#1c7bd4",
        },
      }}
      locale={{
        back: (
          <p className="font-bold focus:ring-transparent focus-visible:outline-none">
            {`<-`}
          </p>
        ),
      }}
    />
  );
};

export default TourGuide;
