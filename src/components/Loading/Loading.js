import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  touch-action: none;
  overflow: hidden;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;

  svg {
    width: 14vw;
    height: auto;
    overflow: visible;
    stroke-linejoin: round;
    stroke-linecap: round;
  }

  div {
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 0.75rem;
    color: #000000;
  }

  div :nth-child(1) {
    font-size: 1.5em;
    font-weight: bold;
  }

  div :nth-child(2) {
    font-size: 1.27em;
  }

  @media (max-width: 768px) {
    svg {
      width: 25vw;
    }

    div :nth-child(1) {
        font-size: 1.17em;
        font-weight: bold;
    }

    div :nth-child(2) {
        font-size: 0.75em;
    }
  }
`;

const pathVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const Loader = () => {
  return (
    <Container
      initial={{
        y: 0,
        opacity: 1,
      }}
      exit={{
        y: "100%",
        opacity: 0,
      }}
      transition={{
        duration: 2,
      }}
    >
      <svg
        version="1.2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 700 700"
        width="700"
        height="700"
      >
        <title>b gas final-ai</title>
        <defs>
          <linearGradient
            id="g1"
            x1="-357.6"
            y1="474.3"
            x2="-357.6"
            y2="111.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#2d2059" />
            <stop offset="1" stop-color="#e4e415" />
          </linearGradient>
          <linearGradient
            id="g2"
            x1="-44.4"
            y1="525.1"
            x2="-44.4"
            y2="36"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#2d2059" />
            <stop offset="1" stop-color="#e4e415" />
          </linearGradient>
          <linearGradient
            id="g3"
            x1="-226.9"
            y1="508.1"
            x2="-226.9"
            y2="56.4"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#2d2059" />
            <stop offset="1" stop-color="#e4e415" />
          </linearGradient>
          <linearGradient
            id="g4"
            x1="680.7"
            y1="559.2"
            x2="651.8"
            y2="588.1"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#2e6c70" />
            <stop offset="1" stop-color="#39a798" />
          </linearGradient>
          <linearGradient
            id="g5"
            x1="699.6"
            y1="551.6"
            x2="699.6"
            y2="661.1"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#2e6c70" />
            <stop offset="1" stop-color="#39a798" />
          </linearGradient>
          <linearGradient
            id="g6"
            x1="619.4"
            y1="628.3"
            x2="654.3"
            y2="628.3"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#2e6c70" />
            <stop offset="1" stop-color="#39a798" />
          </linearGradient>
          <linearGradient
            id="g7"
            x1="587.8"
            y1="551.8"
            x2="700"
            y2="551.8"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#2e6c70" />
            <stop offset="1" stop-color="#39a798" />
          </linearGradient>
          <linearGradient
            id="g8"
            x1="591.2"
            y1="610.7"
            x2="624"
            y2="610.7"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#2e6c70" />
            <stop offset="1" stop-color="#39a798" />
          </linearGradient>
          <linearGradient
            id="g9"
            x1="19.3"
            y1="529.5"
            x2="48.2"
            y2="500.6"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#2e6c70" />
            <stop offset="1" stop-color="#39a798" />
          </linearGradient>
          <linearGradient
            id="g10"
            x1=".4"
            y1="664.9"
            x2=".4"
            y2="555.3"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#2e6c70" />
            <stop offset="1" stop-color="#39a798" />
          </linearGradient>
          <linearGradient
            id="g11"
            x1="80.6"
            y1="664.6"
            x2="45.7"
            y2="664.6"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#2e6c70" />
            <stop offset="1" stop-color="#39a798" />
          </linearGradient>
          <linearGradient
            id="g12"
            x1="112.2"
            y1="623.4"
            x2="0"
            y2="623.4"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#2e6c70" />
            <stop offset="1" stop-color="#39a798" />
          </linearGradient>
          <linearGradient
            id="g13"
            x1="108.8"
            y1="657.3"
            x2="76"
            y2="657.3"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#2e6c70" />
            <stop offset="1" stop-color="#39a798" />
          </linearGradient>
          <linearGradient
            id="g14"
            x1="496.3"
            y1="206.1"
            x2="496.3"
            y2="642.1"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#2e6c70" />
            <stop offset="1" stop-color="#39a798" />
          </linearGradient>
          <linearGradient
            id="g15"
            x1="578.5"
            y1="206.9"
            x2="601.4"
            y2="206.9"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#2e6c70" />
            <stop offset="1" stop-color="#39a798" />
          </linearGradient>
          <linearGradient
            id="g16"
            x1="605.4"
            y1="306.1"
            x2="692.3"
            y2="306.1"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#2e6c70" />
            <stop offset="1" stop-color="#39a798" />
          </linearGradient>
          <linearGradient
            id="g17"
            x1="419"
            y1="495.3"
            x2="631.4"
            y2="495.3"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#2e6c70" />
            <stop offset="1" stop-color="#39a798" />
          </linearGradient>
          <linearGradient
            id="g18"
            x1="8.8"
            y1="306.1"
            x2="95.7"
            y2="306.1"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#2e6c70" />
            <stop offset="1" stop-color="#39a798" />
          </linearGradient>
          <linearGradient
            id="g19"
            x1="99.7"
            y1="206.9"
            x2="122.5"
            y2="206.9"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#2e6c70" />
            <stop offset="1" stop-color="#39a798" />
          </linearGradient>
          <linearGradient
            id="g20"
            x1="69.7"
            y1="495.3"
            x2="282"
            y2="495.3"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#2e6c70" />
            <stop offset="1" stop-color="#39a798" />
          </linearGradient>
          <linearGradient
            id="g21"
            x1="280.6"
            y1="625.7"
            x2="420.4"
            y2="625.7"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#2e6c70" />
            <stop offset="1" stop-color="#39a798" />
          </linearGradient>
          <linearGradient
            id="g22"
            x1="612"
            y1="474.9"
            x2="612"
            y2="569"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#2e6c70" />
            <stop offset="1" stop-color="#39a798" />
          </linearGradient>
          <linearGradient
            id="g23"
            x1="539.5"
            y1="471.1"
            x2="607.1"
            y2="471.1"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#2e6c70" />
            <stop offset="1" stop-color="#39a798" />
          </linearGradient>
          <linearGradient
            id="g24"
            x1="192.1"
            y1="475.5"
            x2="192.1"
            y2="567.4"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#2e6c70" />
            <stop offset="1" stop-color="#39a798" />
          </linearGradient>
          <linearGradient
            id="g25"
            x1="93.9"
            y1="471.1"
            x2="161.6"
            y2="471.1"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#2e6c70" />
            <stop offset="1" stop-color="#39a798" />
          </linearGradient>
        </defs>
        <style>
          {".s0 { fill: url(#g1) } "}
          {".s1 { fill: url(#g2) } "}
          {".s2 { fill: url(#g3) } "}
          {".s3 { fill: url(#g4) } "}
          {".s4 { fill: url(#g5) } "}
          {".s5 { fill: url(#g6) } "}
          {".s6 { fill: url(#g7) } "}
          {".s7 { opacity: .3;mix-blend-mode: overlay;fill: url(#g8) } "}
          {".s8 { fill: url(#g9) } "}
          {".s9 { fill: url(#g10) } "}
          {".s10 { fill: url(#g11) } "}
          {".s11 { fill: url(#g12) } "}
          {".s12 { opacity: .3;mix-blend-mode: overlay;fill: url(#g13) } "}
          {".s13 { fill: url(#g14) } "}
          {".s14 { fill: url(#g15) } "}
          {".s15 { fill: url(#g16) } "}
          {".s16 { fill: url(#g17) } "}
          {".s17 { fill: url(#g18) } "}
          {".s18 { fill: url(#g19) } "}
          {".s19 { fill: url(#g20) } "}
          {".s20 { fill: url(#g21) } "}
          {".s21 { fill: url(#g22) } "}
          {".s22 { opacity: .3;mix-blend-mode: multiply;fill: url(#g23) } "}
          {".s23 { fill: url(#g24) } "}
          {".s24 { opacity: .3;mix-blend-mode: multiply;fill: url(#g25) } "}
        </style>
        <g id="Layer 1">
          <g id="colored-logo">
            <g id="&lt;Group&gt;">
              <g
                id="&lt;Group&gt;"
                style={{ opacity: 0.3, mixBlendMode: "overlay" }}
              ></g>
            </g>
            <g id="&lt;Group&gt;"></g>
            <g id="&lt;Group&gt;">
              <g id="Folder 1">
                <path
                  id="&lt;Path&gt;"
                  className="s0"
                  d="m257.7 111.5q-2.2 8.1-3.9 17.3-1.6 8.9-2.5 17.1c-1.7 1.3-3.5 2.5-5.2 3.8-48.7 35.4-80.4 92.9-80.4 157.8 0 46 15.9 90.5 42.5 123.9 0.8 2.5-9.2 21.3 7 42.9-46.5-40.5-75.8-100.3-75.8-166.8 0-83.1 45.7-155.4 113.3-193.3q2.5-1.4 5-2.7z"
                />
                <path
                  id="&lt;Path&gt;"
                  className="s1"
                  d="m565.9 306.9c0 91.6-55.7 170.3-135 204-15.4 6.5-31.5 11.3-48.4 14.2 11.4-11.1 21.1-22.9 29.2-35 15.6-23.1 24.8-47.7 26.6-72 3.3-47.3-20.2-115.1-36.3-141.7-10.7-17.7-26.3-39.5-26.3-39.5-10-13.9-16.9-22.5-19.8-26.3-14-18.6-35-58-35.2-97.4 0-9 1-18.1 3.5-26.9q2-7.1 5.4-14.1c4.1-8.4 13-22.9 32.9-36.2-5.8 5.7-15 16.3-20.9 32.2-2.5 6.6-3.8 12.6-4.6 17.3-0.7 5-0.8 8.5-0.8 9.8-0.1 5.9 0.5 11.5 1.7 16.6 3.2 14.8 10.4 26.2 14.7 32.8 34.7 53.6 52 80.3 56 85.6 4 5.4 47.4 64.4 56 131.8 4 31.5 1.1 70.2-13.2 108 53.1-34.9 88.1-94.9 88.1-163.2 0-103.6-80.7-188.3-182.7-194.7q-3.3-13.4-6.6-26.7c119.6 3 215.7 101 215.7 221.4z"
                />
                <path
                  id="&lt;Path&gt;"
                  className="s2"
                  d="m392.2 395.6c-1.9 19.9-5.1 54.8-33 82.4-10.7 10.5-22.3 17.3-32.6 21.6-13.9 5.9-25.6 7.5-30 8q0 0-0.1 0c-18.1 2-36.5-2-51.9-11.6q-8-4.9-15.4-10.4c-14.5-10.7-22.2-28.8-18.8-46.5q0.3-1.4 0.6-2.7 0.4-1.5 0.9-2.9c1.8-5.4 4.7-10.4 9-14.8 12.4-12.8 33.1-16.6 52.7-9.9-4.1-1-16.1-3.3-26.4 3.3-4.2 2.7-7.5 6.5-9.8 10.9-7.9 15.1-3 33.8 10.6 44 9.9 7.5 20.8 14.8 26.1 15.3 12.2 1.5 25.2-0.2 35.7-4.3 14.3-5.7 24.9-16.5 32.6-29.4 6.1-8.8 10.4-18.9 12.3-29.8 3.1-11.6 4.5-23.1 4.5-33.1 0.2-42-23.5-77.8-46.1-112-12.5-18.8-23.8-31.8-36.2-59.2-9-19.9-15-33.4-16.5-52.7-0.2-3.2-0.7-11.3 0.4-21.9 1.1-9.9 3.6-22.1 9.1-34.4 4.4-10.1 10.9-20.3 20.1-29.4 10.9-10.7 22.3-16.6 29.7-19.7-6.8 6.2-14.1 14.8-19.8 26.3-2.1 4.5-3.9 8.9-5.2 13.3-3 10.1-3.9 20-3.7 29.3 0.6 24.7 9.9 44.8 12.2 49.6 8.9 13.8 21.7 34.1 36.3 59.3 19.3 33.5 29 50.2 36.2 69.2 8.5 22.6 20 53 16.5 92.2z"
                />
                <path
                  id="&lt;Path&gt;"
                  className="s3"
                  d="m595.6 598.3l-6-6.5-17.7-19.1-8.8-9.6-29.3-31.8q0.2-0.1 0.4-0.2 6.2-4.4 11.9-9.3 0.2-0.1 0.3-0.3c6.6-5.6 12.6-11.7 18.1-18.4q0.1-0.2 0.3-0.4 4.8-5.8 9-12.2l29.7 32.2 9 9.7 19.1 20.7 5.9 6.5z"
                />
                <path
                  id="&lt;Path&gt;"
                  className="s4"
                  d="m697.9 623.4l-32.6-35.3-33.4 7.5-10.2 32.7 32.6 35.3c-18.5 3.6-38.4-2.2-52.2-17.1-21.1-22.9-19.6-58.6 3.3-79.7 22.9-21.2 58.5-19.7 79.7 3.2 13.7 14.9 17.9 35.2 12.8 53.4z"
                />
                <path
                  id="&lt;Path&gt;"
                  className="s5"
                  d="m619.4 635.9l2.3-7.6 32.6 35.3q-4.2 0.8-8.5 1z"
                />
                <path
                  id="&lt;Path&gt;"
                  className="s6"
                  d="m697.9 623.4l-0.2-0.2c1.9-15.9-2.8-32.4-14.5-45-21.1-22.9-56.8-24.4-79.7-3.2-7.7 7.1-12.9 15.9-15.7 25.3 1.7-12.5 7.6-24.4 17.6-33.5 22.9-21.2 58.5-19.7 79.7 3.2 13.7 14.9 17.9 35.2 12.8 53.4z"
                />
                <path
                  id="&lt;Path&gt;"
                  className="s7"
                  d="m624 657.3c0 0-29.6-13.4-32.8-46.6"
                />
                <path
                  id="&lt;Path&gt;"
                  className="s8"
                  d="m62.5 559.6l5.9-6.5 19.1-20.7 9-9.7 29.7-32.2q4.2 6.4 9 12.2 0.2 0.2 0.3 0.4c5.5 6.7 11.5 12.8 18.1 18.4q0.1 0.2 0.3 0.3 5.7 4.9 11.9 9.3 0.2 0.1 0.4 0.2l-29.3 31.8-8.8 9.6-17.7 19.1-6 6.5z"
                />
                <path
                  id="&lt;Path&gt;"
                  className="s9"
                  d="m14.9 570c21.2-22.9 56.8-24.4 79.7-3.2 22.9 21.1 24.4 56.8 3.3 79.7-13.8 14.9-33.7 20.7-52.2 17.1l32.6-35.3-10.2-32.7-33.4-7.5-32.6 35.3c-5.1-18.2-0.9-38.5 12.8-53.4z"
                />
                <path
                  id="&lt;Path&gt;"
                  className="s10"
                  d="m54.2 664.6q-4.3-0.2-8.5-1l32.6-35.3 2.3 7.6z"
                />
                <path
                  id="&lt;Path&gt;"
                  className="s11"
                  d="m14.9 570c21.2-22.9 56.8-24.4 79.7-3.2 10 9.1 15.9 21 17.6 33.5-2.8-9.4-8-18.2-15.7-25.3-22.9-21.2-58.6-19.7-79.7 3.2-11.7 12.6-16.4 29.1-14.5 45l-0.2 0.2c-5.1-18.2-0.9-38.5 12.8-53.4z"
                />
                <path
                  id="&lt;Path&gt;"
                  className="s12"
                  d="m76 657.3c0 0 29.6-13.4 32.8-46.6"
                />
                <path
                  id="&lt;Path&gt;"
                  className="s13"
                  d="m687.8 366.7c-1.4 8.5-8.6 14.7-17.2 14.7-1.3 0-2.6-0.2-3.8-0.4l-0.6-0.1c-18.9-4.2-37.7 6.5-44 24.8q-5.6 16-13 31.3c-8.4 17.3-2.7 38.2 13.6 48.7 3.7 2.4 6.7 6 7.9 10.3 1.5 5.2 0.5 10.6-2.6 14.9q-2.7 3.7-5.5 7.3c-0.1 0.3-0.3 0.5-0.5 0.7q-7.4 9.8-15.6 19-0.6 0.7-1.3 1.4-6.3 7.1-13 13.8-7.5 7.5-15.3 14.4-0.4 0.3-0.7 0.6c-6.3 5.6-12.9 10.9-19.5 16q-0.4 0.2-0.7 0.4c-1.9 1.5-3.9 3-5.9 4.4-2 1.5-4.3 2.6-6.7 3.1-7.3 1.5-14.5-1.7-18.4-7.7l-0.3-0.6c-10.4-16.2-31.4-22-48.7-13.5-10.2 4.9-20.6 9.2-31.3 12.9-18.2 6.3-28.9 25.2-24.8 44.1 1 4.5 0.4 9.4-2 13.3-2.7 4.5-7 7.5-12.1 8.3-18.2 2.9-36.8 4.4-55.3 4.4-18.3 0-36.7-1.4-54.7-4.3-4.6-0.8-8.8-3.1-11.6-6.8-3.2-4.1-4.3-9.3-3.2-14.3l0.2-0.6c4.1-18.9-6.6-37.8-24.9-44.1-10.6-3.7-21.1-8-31.3-12.9-17.3-8.5-38.2-2.7-48.6 13.5l-0.1 0.1c-2.8 4.4-7.3 7.6-12.5 8.3-4.5 0.7-9-0.4-12.7-3.1q-3.1-2.2-6.1-4.5-10.8-8-20.9-17-7.8-7-15.2-14.4-6.8-6.7-13.1-13.8c-5.9-6.6-11.6-13.4-16.9-20.4q-2.9-3.7-5.6-7.5c-2.8-3.8-4.1-8.5-3.5-13 0.7-5.2 3.6-9.6 7.9-12.4l0.5-0.4c16.3-10.4 22.1-31.3 13.6-48.6-4.9-10.2-9.2-20.7-13-31.3-6.2-18.3-25.1-29-44-24.8l-0.6 0.1c-1.2 0.2-2.5 0.4-3.8 0.4-8.5 0-15.8-6.2-17.2-14.7-2.9-18.1-4.4-36.7-4.4-55.2 0-18.5 1.5-37.1 4.4-55.3 1.4-8.5 8.7-14.6 17.2-14.6 1.3 0 2.6 0.1 3.8 0.4l0.7 0.1c18.6 4.1 37.6-6.3 43.9-24.4 1.2-3.6 2.6-7.3 4-10.8h39.7c-15.7 34.1-24 72.4-22.7 112.7 1.5 48.3 16.8 93.2 42.2 130.9q7.1 10.7 15.3 20.5c9.1 11 19.1 21.3 29.9 30.6q9.6 8.2 20 15.5c39.8 27.9 87.9 44.5 139.6 45.2 54.7 0.8 105.5-16 147.1-45.1 0.2-0.1 0.5-0.3 0.7-0.5q10-7 19.3-15 0.3-0.3 0.6-0.5c10.6-9.2 20.4-19.2 29.4-30.1q0.2-0.3 0.5-0.6 7.8-9.6 14.8-19.9 0.2-0.3 0.4-0.7c26.4-39.7 41.8-87.3 41.8-138.4 0-37.4-8.2-72.8-22.9-104.6h39.8q2.1 5.3 4 10.8c6.3 18.1 25.2 28.5 43.9 24.4l0.6-0.1c1.2-0.3 2.5-0.4 3.8-0.4 8.6 0 15.8 6.1 17.2 14.6 3 18.2 4.5 36.8 4.5 55.3 0 18.5-1.5 37.1-4.5 55.2z"
                />
                <path
                  id="&lt;Path&gt;"
                  className="s14"
                  d="m601.3 307.1c-0.6-35.7-8.7-69.6-22.8-100.2h4.6c11.8 29 18.3 60.7 18.3 93.9 0 2.1-0.1 4.2-0.1 6.3z"
                />
                <path
                  id="&lt;Path&gt;"
                  className="s15"
                  d="m609.2 437c-1.8 3.6-2.9 7.5-3.4 11.3-1.1-7.3 0-15 3.4-22q7.4-15.3 13-31.3c6.3-18.3 25.1-29 44-24.9l0.6 0.2c1.2 0.2 2.5 0.4 3.8 0.4 8.6 0 15.8-6.2 17.2-14.7 2.7-16.4 4.1-33.1 4.4-49.9 0 1.8 0.1 3.6 0.1 5.4 0 18.5-1.5 37.1-4.5 55.2-1.4 8.5-8.6 14.7-17.2 14.7-1.3 0-2.6-0.2-3.8-0.4l-0.6-0.1c-18.9-4.2-37.7 6.5-44 24.8q-5.6 16-13 31.3z"
                />
                <path
                  id="&lt;Path&gt;"
                  className="s16"
                  d="m444.7 572.4c10.7-3.7 21.1-8 31.3-12.9 17.3-8.5 38.3-2.7 48.7 13.5l0.3 0.6c3.9 6 11.1 9.2 18.4 7.7 2.4-0.5 4.7-1.6 6.7-3.1 2-1.4 4-2.9 5.9-4.4q0.3-0.2 0.7-0.5c6.6-5 13.2-10.3 19.5-15.9q0.3-0.3 0.7-0.6 7.8-7 15.3-14.4 6.7-6.7 13-13.8 0.7-0.7 1.3-1.4 8.2-9.3 15.6-19c0.2-0.3 0.4-0.5 0.5-0.7q2.8-3.6 5.5-7.3c1.1-1.5 1.8-3.2 2.3-4.9 0.1 0.2 0.2 0.5 0.3 0.7 1.5 5.2 0.5 10.6-2.6 14.9q-2.7 3.7-5.5 7.3c-0.1 0.3-0.3 0.5-0.5 0.7q-7.4 9.7-15.6 19-0.6 0.7-1.3 1.4-6.3 7.1-13 13.8-7.5 7.5-15.3 14.4-0.4 0.3-0.7 0.6c-6.3 5.6-12.9 10.9-19.5 16q-0.4 0.2-0.7 0.4c-1.9 1.5-3.9 3-5.9 4.4-2 1.5-4.3 2.6-6.7 3.1-7.3 1.5-14.5-1.7-18.4-7.7l-0.3-0.6c-10.4-16.2-31.4-22-48.7-13.5-10.2 4.9-20.6 9.2-31.3 12.9-13.8 4.8-23.3 16.8-25.3 30.6-2.5-17.9 8-35.3 25.3-41.3z"
                />
                <path
                  id="&lt;Path&gt;"
                  className="s17"
                  d="m13.2 356c1.4 8.5 8.7 14.7 17.2 14.7 1.3 0 2.6-0.2 3.8-0.4l0.6-0.2c18.9-4.1 37.8 6.6 44 24.8 3.8 10.7 8.1 21.2 13 31.3 3.5 7.1 4.5 14.8 3.5 22.1-0.6-3.8-1.7-7.7-3.5-11.3-4.9-10.2-9.2-20.7-13-31.3-6.2-18.3-25.1-29-44-24.8l-0.6 0.1c-1.2 0.2-2.5 0.4-3.8 0.4-8.5 0-15.8-6.2-17.2-14.7-2.9-18.1-4.4-36.7-4.4-55.2 0-1.8 0-3.6 0.1-5.4 0.2 16.8 1.6 33.5 4.3 49.9z"
                />
                <path
                  id="&lt;Path&gt;"
                  className="s18"
                  d="m118 206.9h4.5c-13.7 29.7-21.7 62.6-22.7 97.3-0.5-34.5 6-67.3 18.2-97.3z"
                />
                <path
                  id="&lt;Path&gt;"
                  className="s19"
                  d="m70.6 495.3c0.6 1.9 1.5 3.7 2.7 5.4q2.7 3.7 5.6 7.5c5.3 7 11 13.8 16.9 20.4q6.3 7.1 13.1 13.8 7.4 7.4 15.2 14.4 10.1 9 20.9 17 3 2.3 6.1 4.5c3.7 2.7 8.2 3.8 12.7 3.1 5.2-0.7 9.7-3.9 12.5-8.3l0.1-0.1c10.4-16.2 31.3-22 48.6-13.6 10.2 5 20.7 9.3 31.3 13 17.4 6 27.9 23.4 25.3 41.3-2-13.8-11.4-25.8-25.3-30.6-10.6-3.7-21.1-8-31.3-12.9-17.3-8.5-38.2-2.7-48.6 13.5l-0.1 0.1c-2.8 4.4-7.3 7.6-12.5 8.3-4.5 0.7-9-0.4-12.7-3.1q-3.1-2.2-6.1-4.5-10.8-8-20.9-17-7.8-7-15.2-14.4-6.8-6.7-13.1-13.8c-5.9-6.6-11.6-13.4-16.9-20.4q-2.9-3.7-5.6-7.5c-2.8-3.8-4.1-8.5-3.5-13 0.2-1.1 0.5-2.1 0.8-3.1z"
                />
                <path
                  id="&lt;Path&gt;"
                  className="s20"
                  d="m281.2 627.2c0.1-0.5 0.1-1 0.2-1.5 0.6 2 1.5 4 2.8 5.7 2.8 3.7 7 6 11.6 6.8 18 2.8 36.4 4.3 54.7 4.3 18.5 0 37.1-1.5 55.3-4.4 5.1-0.9 9.4-3.8 12.1-8.3 0.8-1.3 1.3-2.7 1.7-4.1 0.1 0.5 0.2 1 0.3 1.5 1 4.5 0.4 9.4-2 13.3-2.7 4.5-7 7.5-12.1 8.3-18.2 2.9-36.8 4.4-55.3 4.4-18.3 0-36.7-1.4-54.7-4.3-4.6-0.8-8.8-3.1-11.6-6.8-3.2-4.1-4.3-9.3-3.2-14.3z"
                />
                <path
                  id="&lt;Path&gt;"
                  className="s21"
                  d="m600.2 563.8c-6.5 6-15.7 7.2-23.3 3.7-2.5-1.1-4.9-2.8-6.8-4.9l-9-9.7-47.2-51.2q0.3-0.3 0.6-0.5c10.6-9.2 20.4-19.2 29.4-30.1l47.5 51.6 10.1 10.9q2.4 2.6 3.7 5.7c3.7 8.1 2 18.1-5 24.5z"
                />
                <path
                  id="&lt;Path&gt;"
                  className="s22"
                  d="m600.2 563.8c-5.3 4.9-12.4 6.5-19 5.1 3.6-0.8 7.1-2.5 10-5.1 6.9-6.4 8.6-16.4 4.9-24.5q-1.3-3.1-3.7-5.7l-10.1-10.9-42.8-46.5c1.4-1.6 2.9-3.3 4.4-5.1l47.5 51.6 10.1 10.9q2.4 2.6 3.7 5.7c3.7 8.1 2 18.1-5 24.5z"
                />
                <path
                  id="&lt;Path&gt;"
                  className="s23"
                  d="m139.9 552.9l-8.9 9.7c-2 2.1-4.4 3.8-6.9 4.9-7.5 3.5-16.8 2.3-23.3-3.7-7-6.4-8.7-16.4-5-24.5 0.9-2 2.2-4 3.8-5.7l10-10.9 47.7-51.7c9.1 11 19.1 21.3 29.9 30.6z"
                />
                <path
                  id="&lt;Path&gt;"
                  className="s24"
                  d="m95.8 539.3q1.4-3.1 3.8-5.7l10-10.9 47.6-51.6c1.4 1.8 2.9 3.5 4.4 5.1l-42.9 46.5-10 10.9q-2.4 2.6-3.8 5.7c-3.7 8.1-2 18.1 5 24.5 2.9 2.6 6.3 4.3 9.9 5.1-6.6 1.4-13.7-0.2-19-5.1-7-6.4-8.7-16.4-5-24.5z"
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
      <div>
        <span>مؤسسة بدر لخدمات الغاز</span>
        <span>Badr Gas Services Corporation</span>
      </div>
    </Container>
  );
};

export default Loader;
