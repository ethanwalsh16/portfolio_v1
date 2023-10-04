import "./index.css";
import pfp from "./assets/profilephoto.jpg";
import resume from "./Ethan_Walsh_Resume.pdf";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Pagination,
  Navigation,
  EffectCoverflow,
  Keyboard,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

function App() {
  /* Need to add
    - Changing of navbar to hamburger menu when small screen
    - Email integration (contact form)
  */

  return (
    <div className="w-full h-full bg-slate-200 pb-16">
      <div className="header w-full h-24 bg-[#37474f] flex justify-between pl-12 pr-16">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#D1D1D1"
          className="w-24 h-24 -mr-[72rem]"
        >
          <path
            d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z"
            clip-rule="evenodd"
          />
        </svg>
        <div className="pt-8 space-x-4">
          <a className="text-xl font-base text-[#D1D1D1] cursor-pointer">
            Experience
          </a>
          <a className="text-xl font-base text-[#D1D1D1] cursor-pointer">
            Projects
          </a>
          <a className="text-xl font-base text-[#D1D1D1] cursor-pointer">
            Resume
          </a>
        </div>
      </div>
      <div className="grid grid-cols-2 pb-12">
        <div className="pt-20">
          <h1
            className="text-7xl text-right font-medium text-slate-800"
            id="personal"
          >
            Ethan Walsh
          </h1>
          <p className="text-right text-base text-slate-800 pt-2" id="personal">
            Software Engineering Student @ McMaster University.
          </p>
          <p
            className="text-right text-base  text-slate-800 pt-2"
            id="personal"
          >
            Currently coding in:
          </p>
          <div className="flex space-x-4 pt-4 justify-end">
            <svg viewBox="0 0 128 128" className="tooltip w-12" id="codeCard5">
              <title>Python</title>
              <path
                fill="rgb(30 41 59)"
                d="M49.33 62h29.159C86.606 62 93 55.132 93 46.981V19.183c0-7.912-6.632-13.856-14.555-15.176-5.014-.835-10.195-1.215-15.187-1.191-4.99.023-9.612.448-13.805 1.191C37.098 6.188 35 10.758 35 19.183V30h29v4H23.776c-8.484 0-15.914 5.108-18.237 14.811-2.681 11.12-2.8 17.919 0 29.53C7.614 86.983 12.569 93 21.054 93H31V79.952C31 70.315 39.428 62 49.33 62zm-1.838-39.11c-3.026 0-5.478-2.479-5.478-5.545 0-3.079 2.451-5.581 5.478-5.581 3.015 0 5.479 2.502 5.479 5.581-.001 3.066-2.465 5.545-5.479 5.545zm74.789 25.921C120.183 40.363 116.178 34 107.682 34H97v12.981C97 57.031 88.206 65 78.489 65H49.33C41.342 65 35 72.326 35 80.326v27.8c0 7.91 6.745 12.564 14.462 14.834 9.242 2.717 17.994 3.208 29.051 0C85.862 120.831 93 116.549 93 108.126V97H64v-4h43.682c8.484 0 11.647-5.776 14.599-14.66 3.047-9.145 2.916-17.799 0-29.529zm-41.955 55.606c3.027 0 5.479 2.479 5.479 5.547 0 3.076-2.451 5.579-5.479 5.579-3.015 0-5.478-2.502-5.478-5.579 0-3.068 2.463-5.547 5.478-5.547z"
              ></path>
            </svg>
            <svg viewBox="0 0 128 128" className="w-12" id="codeCard4">
              <title>Java</title>
              <path
                fill="rgb(30 41 59)"
                d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zm-2.988-13.665s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"
              ></path>
              <path
                fill="rgb(30 41 59)"
                d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"
              ></path>
              <path
                fill="rgb(30 41 59)"
                d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zm40.697 22.747c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z"
              ></path>
              <path
                fill="rgb(30 41 59)"
                d="M76.491 1.587S89.459 14.563 64.188 34.51c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815C58.041 28.42 81.722 22.195 76.491 1.587z"
              ></path>
              <path
                fill="rgb(30 41 59)"
                d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"
              ></path>
            </svg>
            <svg viewBox="0 0 128 128" className="w-12" id="codeCard3">
              <title>JavaScript</title>
              <path
                fill="rgb(30 41 59)"
                d="M2 1v125h125V1H2zm66.119 106.513c-1.845 3.749-5.367 6.212-9.448 7.401-6.271 1.44-12.269.619-16.731-2.059-2.986-1.832-5.318-4.652-6.901-7.901l9.52-5.83c.083.035.333.487.667 1.071 1.214 2.034 2.261 3.474 4.319 4.485 2.022.69 6.461 1.131 8.175-2.427 1.047-1.81.714-7.628.714-14.065C58.433 78.073 58.48 68 58.48 58h11.709c0 11 .06 21.418 0 32.152.025 6.58.596 12.446-2.07 17.361zm48.574-3.308c-4.07 13.922-26.762 14.374-35.83 5.176-1.916-2.165-3.117-3.296-4.26-5.795 4.819-2.772 4.819-2.772 9.508-5.485 2.547 3.915 4.902 6.068 9.139 6.949 5.748.702 11.531-1.273 10.234-7.378-1.333-4.986-11.77-6.199-18.873-11.531-7.211-4.843-8.901-16.611-2.975-23.335 1.975-2.487 5.343-4.343 8.877-5.235l3.688-.477c7.081-.143 11.507 1.727 14.756 5.355.904.916 1.642 1.904 3.022 4.045-3.772 2.404-3.76 2.381-9.163 5.879-1.154-2.486-3.069-4.046-5.093-4.724-3.142-.952-7.104.083-7.926 3.403-.285 1.023-.226 1.975.227 3.665 1.273 2.903 5.545 4.165 9.377 5.926 11.031 4.474 14.756 9.271 15.672 14.981.882 4.916-.213 8.105-.38 8.581z"
              ></path>
            </svg>
            <svg viewBox="0 0 128 128" className="w-12" id="codeCard2">
              <title>React</title>
              <g fill="rgb(30 41 59)">
                <circle cx="64" cy="64" r="11.4"></circle>
                <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
              </g>
            </svg>
            <svg viewBox="0 0 128 128" className="w-12" id="codeCard1">
              <title>TailwindCSS</title>
              <path
                d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"
                fill="rgb(30 41 59)"
              ></path>
            </svg>
          </div>
        </div>
        <div className="pt-24 pl-8">
          <img
            className="rounded-full w-60"
            src={pfp}
            alt="Profile Picture"
            id="photo"
          />
        </div>
      </div>
      <div
        id="skills-hero"
        className="bg-[#37474f] mt-8 h-[42rem] w-[90%] ml-[5%] rounded-md"
      >
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          keyboard={{
            enabled: true,
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          spaceBetween={0}
          loop={true}
          pagination={true}
          navigation={true}
          modules={[Pagination, Navigation, EffectCoverflow, Keyboard]}
          className={"w-[90%] ml-[5%] h-full"}
        >
          <SwiperSlide>
            <div className="w-[60%] h-[90%] fixed top-[5%] left-[20%] bg-zinc-900 bg-opacity-60 rounded-xl">
              <h3 className="text-xl font-base text-slate-300 text-right mt-2 mr-3 opacity-20 italic absolute bottom-0 right-0 ml-2">
                skill1.card
              </h3>
              <svg
                className="w-[55rem] h-[55rem] -ml-16 -mt-28"
                opacity="0.12"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M31.885 16c-8.124 0-7.617 3.523-7.617 3.523l.01 3.65h7.752v1.095H21.197S16 23.678 16 31.876c0 8.196 4.537 7.906 4.537 7.906h2.708v-3.804s-.146-4.537 4.465-4.537h7.688s4.32.07 4.32-4.175v-7.019S40.374 16 31.885 16zm-4.275 2.454c.771 0 1.395.624 1.395 1.395s-.624 1.395-1.395 1.395a1.393 1.393 0 0 1-1.395-1.395c0-.771.624-1.395 1.395-1.395z"
                  fill="url(#a)"
                />
                <path
                  d="M32.115 47.833c8.124 0 7.617-3.523 7.617-3.523l-.01-3.65H31.97v-1.095h10.832S48 40.155 48 31.958c0-8.197-4.537-7.906-4.537-7.906h-2.708v3.803s.146 4.537-4.465 4.537h-7.688s-4.32-.07-4.32 4.175v7.019s-.656 4.247 7.833 4.247zm4.275-2.454a1.393 1.393 0 0 1-1.395-1.395c0-.77.624-1.394 1.395-1.394s1.395.623 1.395 1.394c0 .772-.624 1.395-1.395 1.395z"
                  fill="url(#b)"
                />
                <defs>
                  <linearGradient
                    id="a"
                    x1="19.075"
                    y1="18.782"
                    x2="34.898"
                    y2="34.658"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#387EB8" />
                    <stop offset="1" stop-color="#366994" />
                  </linearGradient>
                  <linearGradient
                    id="b"
                    x1="28.809"
                    y1="28.882"
                    x2="45.803"
                    y2="45.163"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FFE052" />
                    <stop offset="1" stop-color="#FFC331" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute bottom-0 left-0 right-0 top-0 px-4 py-2">
                <h3 className="text-4xl font-medium text-slate-300 text-center mt-4">
                  PYTHON
                </h3>
                <p className="text-base text-slate-300 text-left ml-[18%] mt-4 mr-[18%]">
                  - Worked with Python in FastAPI to handle API management and
                  route testing, along with connecting API to MongoDB.<br></br>
                  <br></br>- Created small games (e.g. Pong, Flappy Bird) using
                  the PyGame GUI library<br></br>
                  <br></br>- Also familiar with Pydantic for data typing, with
                  APIs.<br></br>
                  <br></br>- Developed code for controlling a robot arm among
                  other small projects as part of the coding component in 1P13,
                  a first year engineering principles course @ McMaster
                  University.<br></br>
                  <br></br>- TA'd a class teaching the fundamentals of Python at
                  my local high school, creating solutions and demonstrating
                  games to students.
                </p>
                <p className="text-base text-slate-300 text-center mt-8">
                  <b>PROJECTS USED:</b>
                </p>
                <p className="text-base text-slate-300 text-center mt-4">
                  - Colour Your Spotify<br></br>
                  <br></br>- Full-Stack Floorplan Application @ Fermi Solutions
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[60%] h-[90%] fixed top-[5%] left-[20%] bg-zinc-900 bg-opacity-60 rounded-xl">
              <h3 className="text-xl font-base text-slate-300 text-right mt-2 mr-3 opacity-20 italic absolute bottom-0 right-0 ml-2">
                skill2.card
              </h3>
              <svg
                className="w-[100%] h-[100%] mx-auto mt-24"
                opacity="0.12"
                viewBox="-118.513 4.399 540.906 540.906"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M102.681 291.324s-14.178 8.245 10.09 11.035c29.4 3.354 44.426 2.873 76.825-3.259 0 0 8.518 5.341 20.414 9.967-72.63 31.128-164.376-1.803-107.329-17.743M93.806 250.704s-15.902 11.771 8.384 14.283c31.406 3.24 56.208 3.505 99.125-4.759 0 0 5.937 6.018 15.271 9.309-87.815 25.678-185.624 2.025-122.78-18.833"
                  fill="#5382a1"
                />
                <path
                  d="M168.625 181.799c17.896 20.604-4.701 39.146-4.701 39.146s45.439-23.458 24.571-52.833c-19.491-27.395-34.438-41.005 46.479-87.934.001-.001-127.013 31.721-66.349 101.621"
                  fill="#e76f00"
                />
                <path
                  d="M264.684 321.369s10.492 8.646-11.555 15.333c-41.923 12.7-174.488 16.535-211.314.507-13.238-5.76 11.587-13.752 19.396-15.429 8.144-1.766 12.798-1.437 12.798-1.437-14.722-10.371-95.157 20.363-40.857 29.166 148.084 24.015 269.944-10.814 231.532-28.14M109.499 208.617s-67.431 16.016-23.879 21.832c18.389 2.462 55.047 1.905 89.192-.956 27.906-2.354 55.928-7.358 55.928-7.358s-9.84 4.214-16.959 9.074c-68.475 18.01-200.756 9.631-162.674-8.79 32.206-15.568 58.392-13.802 58.392-13.802M230.462 276.231c69.608-36.171 37.425-70.932 14.96-66.248-5.506 1.146-7.961 2.139-7.961 2.139s2.045-3.202 5.947-4.588c44.441-15.624 78.619 46.081-14.346 70.521 0 0 1.079-.962 1.4-1.824"
                  fill="#5382a1"
                />
                <path
                  d="M188.495 4.399s38.55 38.562-36.563 97.862c-60.233 47.567-13.735 74.689-.025 105.678-35.158-31.723-60.96-59.647-43.65-85.637 25.406-38.151 95.792-56.648 80.238-117.903"
                  fill="#e76f00"
                />
                <path
                  d="M116.339 374.246c66.815 4.277 169.417-2.373 171.846-33.987 0 0-4.67 11.984-55.219 21.503-57.027 10.731-127.364 9.479-169.081 2.601.002-.002 8.541 7.067 52.454 9.883"
                  fill="#5382a1"
                />
              </svg>
              <div className="absolute bottom-0 left-0 right-0 top-0 px-4 py-2 mt-20">
                <h3 className="text-4xl font-medium text-slate-300 text-center mt-4">
                  JAVA
                </h3>
                <p className="text-base text-slate-300 text-left ml-[18%] mt-4 mr-[18%]">
                  - Worked with principles of Object Oriented Programming in
                  Java, taking two courses in high school on the language.
                  <br></br>
                  <br></br>- Participated in the 2021 Canadian Computing
                  Competition<br></br>
                  <br></br>- Now increasing understanding by learning Java @
                  McMaster in a second year software engineering course (2OP3).
                </p>
                <p className="text-base text-slate-300 text-center mt-8">
                  <b>PROJECTS USED:</b>
                </p>
                <p className="text-base text-slate-300 text-center mt-4">
                  - Sorry! (Board Game)<br></br>
                  <br></br>- 2048 (Mobile App Clone)
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[60%] h-[90%] fixed top-[5%] left-[20%] bg-zinc-900 bg-opacity-60 rounded-xl align-middle">
              <h3 className="text-xl font-base text-slate-300 text-right mt-2 mr-3 opacity-20 italic absolute bottom-0 right-0 ml-2">
                skill3.card
              </h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-[60%] h-[60%] mt-[50%] mx-auto -translate-y-[65%]"
                viewBox="0 0 1052 1052"
                opacity="0.12"
              >
                <path fill="#f0db4f" d="M0 0h1052v1052H0z" />
                <path
                  d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z"
                  fill="#323330"
                />
              </svg>
              <div className="absolute bottom-0 left-0 right-0 top-0 px-4 py-2">
                <h3 className="text-4xl font-medium text-slate-300 text-center mt-4">
                  JAVASCRIPT
                </h3>
                <p className="text-base text-slate-300 text-left ml-[18%] mt-4 mr-[18%]">
                  - Worked with JavaScript and TypeScript to learn web
                  development.<br></br>
                  <br></br>- Created several small projects (Calculator, simple
                  web pages etc, before moving on to a full-stack floorplan
                  configuration app using TypeScript<br></br>
                  <br></br>- Learned auxiliary JavaScript libraries such as
                  Leaflet (for mapping requirements).<br></br>
                </p>
                <p className="text-base text-slate-300 text-center mt-8">
                  <b>PROJECTS USED:</b>
                </p>
                <p className="text-base text-slate-300 text-center mt-4">
                  <br></br>- Full-Stack Floorplan Application @ Fermi Solutions
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[60%] h-[90%] fixed top-[5%] left-[20%] bg-zinc-900 bg-opacity-60 rounded-xl">
              <h3 className="text-xl font-base text-slate-300 text-right mt-2 mr-3 opacity-20 italic absolute bottom-0 right-0 ml-2">
                skill4.card
              </h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                className="w-[80%] h-[80%] ml-[10%] mt-[10%]"
                opacity="0.12"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 256 228"
              >
                <path
                  fill="#00D8FF"
                  d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"
                ></path>
              </svg>
              <div className="absolute bottom-0 left-0 right-0 top-0 px-4 py-2">
                <h3 className="text-4xl font-medium text-slate-300 text-center mt-4">
                  REACT
                </h3>
                <p className="text-base text-slate-300 text-left ml-[18%] mt-4 mr-[18%]">
                  - Learned React as part of learning web development, primarily
                  using React with TypeScript up to this point.<br></br>
                  <br></br>- Started with small projects, before moving skills
                  over to full-stack floorplan application.<br></br>
                  <br></br>- Familiar with integration with FastAPI / Axios for
                  APIs, Leaflet, and combination with TailwindCSS.<br></br>
                </p>
                <p className="text-base text-slate-300 text-center mt-8">
                  <b>PROJECTS USED:</b>
                </p>
                <p className="text-base text-slate-300 text-center mt-4">
                  - Full-stack floorplan application @ Fermi Solutions<br></br>
                  <br></br>- Personal Portfolio
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[60%] h-[90%] fixed top-[5%] left-[20%] bg-zinc-900 bg-opacity-60 rounded-xl">
              <h3 className="text-xl font-base text-slate-300 text-right mt-2 mr-3 opacity-20 italic absolute bottom-0 right-0 ml-2">
                skill5.card
              </h3>
              <svg
                fill="#000000"
                className="width-[50rem] height-[50rem] -mt-[5rem]"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                opacity="0.2"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z"
                />
              </svg>
              <div className="absolute bottom-0 left-0 right-0 top-0 px-4 py-2">
                <h3 className="text-4xl font-medium text-slate-300 text-center mt-4">
                  TAILWINDCSS
                </h3>
                <p className="text-base text-slate-300 text-left ml-[18%] mt-4 mr-[18%]">
                  - Learned Tailwind as part of learning web development,
                  primarily using with React up to this point.<br></br>
                  <br></br>- Created responsive user interfaces following design
                  principles.<br></br>
                  <br></br>- Currently performing further research on web design
                  to implement the newest design trends.<br></br>
                </p>
                <p className="text-base text-slate-300 text-center mt-8">
                  <b>PROJECTS USED:</b>
                </p>
                <p className="text-base text-slate-300 text-center mt-4">
                  - Full-stack floorplan application @ Fermi Solutions<br></br>
                  <br></br>- Personal Portfolio
                </p>
              </div>
            </div>
          </SwiperSlide>
          ...
        </Swiper>
      </div>
      <div
        id="experience"
        className="bg-[#37474f] pt-4 pb-8 mt-8 w-[90%] ml-[5%] rounded-md"
      >
        <h3 className="text-3xl font-medium text-slate-300 content-center ml-3 mt-2">
          Experience
        </h3>
        <div className="space-y-6">
          <div className="grid grid-cols-4 pt-6">
            <div className="col-span-1">
              <p className="text-lg font-medium text-slate-300 text-right mr-4 ml-8">
                Software Engineering Intern
              </p>
              <p className="text-base text-slate-300 text-right mr-4 ml-8">
                Fermi Solutions
              </p>
              <p className="text-base text-slate-300 text-right mr-4 ml-8">
                May-Aug 2023
              </p>
            </div>
            <div className="col-span-3 space-y-2">
              <p className="text-base font-light text-slate-300 text-left ml-4 mr-8">
                - Developed a full stack application to manage floorplan
                configuration and temporary storage in{" "}
                <b>large-scale energy facilities</b>.
              </p>
              <p className="text-base font-light text-slate-300 text-left ml-4 mr-8">
                - Coded using <b>React</b>, TailwindCSS, and Leaflet on the
                front end, as well as <b>FastAPI</b> (Python & Pydantic),
                MongoDB, and Firebase Auth on the back.
              </p>
              <p className="text-base font-light text-slate-300 text-left ml-4 mr-8">
                - Created intranet site for the company (~40 employees at time
                of creation) using Microsoft SharePoint software.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-4 pt-6">
            <div className="col-span-1">
              <p className="text-lg font-medium text-slate-300 text-right mr-4 ml-8">
                Program Developer
              </p>
              <p className="text-base text-slate-300 text-right mr-4 ml-8">
                Nuclear Innovation Institute
              </p>
              <p className="text-base text-slate-300 text-right mr-4 ml-8">
                Jan-Jun 2022
              </p>
            </div>
            <div className="col-span-3 space-y-2">
              <p className="text-base font-light text-slate-300 text-left ml-4 mr-8">
                - Pioneered a <b>learn-to-code platform for grade 9</b>{" "}
                students.
              </p>
              <p className="text-base font-light text-slate-300 text-left ml-4 mr-8">
                - Wrote lessons, challenges, and solutions to instruct students
                on the basics of the Python programming language.
              </p>
              <p className="text-base font-light text-slate-300 text-left ml-4 mr-8">
                - Intended for potential use by the Bluewater District School
                Board, population <b>16,500</b>.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-4 pt-6">
            <div className="col-span-1">
              <p className="text-lg font-medium text-slate-300 text-right mr-4 ml-8">
                Computer Science TA
              </p>
              <p className="text-base text-slate-300 text-right mr-4 ml-8">
                Saugeen District Senior School
              </p>
              <p className="text-base text-slate-300 text-right mr-4 ml-8">
                Sep 2021 - Jan 2022
              </p>
            </div>
            <div className="col-span-3 space-y-2">
              <p className="text-base font-light text-slate-300 text-left ml-4 mr-8">
                - Presented games and modular program shells to a class of grade
                10 and 11 students.
              </p>
              <p className="text-base font-light text-slate-300 text-left ml-4 mr-8">
                - Coded solutions to class problems and assisted students with
                assignments.
              </p>
              <p className="text-base font-light text-slate-300 text-left ml-4 mr-8">
                - Also created intranet site for the company (~40 employees at
                time of creation) using Microsoft SharePoint software.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="projects"
        className="bg-[#37474f] pt-4 pb-8 mt-8 w-[90%] ml-[5%] rounded-md"
      >
        <h3 className="text-3xl font-medium text-slate-300 content-center ml-3 mt-2">
          Projects
        </h3>
        <div className="space-y-6">
          <div className="grid grid-cols-4 pt-6">
            <div className="col-span-1">
              <p className="text-lg font-medium text-slate-300 text-right mr-4 ml-8">
                Personal Portfolio
              </p>
              <p className="text-base text-slate-300 text-right mr-4 ml-8">
                Sep 2023
              </p>
            </div>
            <div className="col-span-3 space-y-2">
              <p className="text-base font-light text-slate-300 text-left ml-4 mr-8">
                - Created a personal portfolio website using React (TypeScript)
                and TailwindCSS
              </p>
              <p className="text-base font-light text-slate-300 text-left ml-4 mr-8">
                - Demonstrated web development skills, and further developed
                knowledge of design principles and recent tech developments in
                the industry.
              </p>
              <p className="text-base font-light text-slate-300 text-left ml-4 mr-8">
                - Researched new design options and increased CSS skills.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-4 pt-6">
            <div className="col-span-1">
              <p className="text-lg font-medium text-slate-300 text-right mr-4 ml-8">
                Colour Your Spotify
              </p>
              <p className="text-base text-slate-300 text-right mr-4 ml-8">
                DeltaHacks
              </p>
              <p className="text-base text-slate-300 text-right mr-4 ml-8">
                Jan 2023
              </p>
            </div>
            <div className="col-span-3 space-y-2">
              <p className="text-base font-light text-slate-300 text-left ml-4 mr-8">
                - Python application that returns a Spotify playlist based on
                the dominant colour of a user-submitted image.
              </p>
              <p className="text-base font-light text-slate-300 text-left ml-4 mr-8">
                - Uses Spotify API, Python, and ColorThief library.
              </p>
              <p className="text-base font-light text-slate-300 text-left ml-4 mr-8">
                - Developed on a team of 3 students within 24 hours at
                DeltaHacks 9, a Hackathon at McMaster University.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-4 pt-6">
            <div className="col-span-1">
              <p className="text-lg font-medium text-slate-300 text-right mr-4 ml-8">
                Trash To Transit
              </p>
              <p className="text-base text-slate-300 text-right mr-4 ml-8">
                McMaster University
              </p>
              <p className="text-base text-slate-300 text-right mr-4 ml-8">
                Jan 2023
              </p>
            </div>
            <div className="col-span-3 space-y-2">
              <p className="text-base font-light text-slate-300 text-left ml-4 mr-8">
                - Led a team of 4 engineering students to a third-place finish
                in a first-year design competition
              </p>
              <p className="text-base font-light text-slate-300 text-left ml-4 mr-8">
                - Proposed a waste management solution for a rural town that
                would convert current waste into stored electrical power for
                small-scale public transit
              </p>
              <p className="text-base font-light text-slate-300 text-left ml-4 mr-8">
                - Improved public speaking skills through presenting ideas to a
                variety of industry professionals and McMaster professors
              </p>
            </div>
          </div>
          <div className="grid grid-cols-4 pt-6">
            <div className="col-span-1">
              <p className="text-lg font-medium text-slate-300 text-right mr-4 ml-8">
                Sorry! (Board Game)
              </p>
              <p className="text-base text-slate-300 text-right mr-4 ml-8">
                Saugeen District Senior School
              </p>
              <p className="text-base text-slate-300 text-right mr-4 ml-8">
                Nov 2020
              </p>
            </div>
            <div className="col-span-3 space-y-2">
              <p className="text-base font-light text-slate-300 text-left ml-4 mr-8">
                - Using object oriented principles, created a version of the
                popular board game Sorry! in Java, using javax.swing for
                graphics.
              </p>
              <p className="text-base font-light text-slate-300 text-left ml-4 mr-8">
                - Created in collaboration with another student for a final
                project to demonstrate knowledge of concepts such as
                encapsulation and abstraction.
              </p>
              <p className="text-base font-light text-slate-300 text-left ml-4 mr-8">
                - Received the Computer Science award for the graduating class
                of 2021.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-4 pt-6">
            <div className="col-span-1">
              <p className="text-lg font-medium text-slate-300 text-right mr-4 ml-8">
                2048
              </p>
              <p className="text-base text-slate-300 text-right mr-4 ml-8">
                Saugeen District Senior School
              </p>
              <p className="text-base text-slate-300 text-right mr-4 ml-8">
                Jan 2020
              </p>
            </div>
            <div className="col-span-3 space-y-2">
              <p className="text-base font-light text-slate-300 text-left ml-4 mr-8">
                - Developed replica of the popular mobile game 2048 in the Java
                language using a 2D-array.
              </p>
              <p className="text-base font-light text-slate-300 text-left ml-4 mr-8">
                - Used as a final project for a high-school Java programming
                course (ICS3U)
              </p>
              <p className="text-base font-light text-slate-300 text-left ml-4 mr-8">
                - Created using manipulation of a 2D array (matrix) and Java's
                javax.swing GUI.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="resume"
        className="bg-[#37474f] pt-4 pb-8 mt-8 w-[90%] ml-[5%] rounded-md h-[80rem]"
      >
        <h3 className="text-3xl font-medium text-slate-300 content-center ml-3 mt-2">
          Resume
        </h3>
        <iframe className="w-[65%] h-[95%] pt-4" src={resume}></iframe>
      </div>
    </div>
  );
}

export default App;
