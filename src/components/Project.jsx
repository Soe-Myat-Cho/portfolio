import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import west from "../assets/images/quizz.png";
import elegance from "../assets/images/elegance.png";
import taylor from "../assets/images/Taylor.png";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Project = () => {
  const projects = [
    {
      img: taylor,
      name: "Taylor Swift Playlist (fully functional) ",
      github_link: "https://github.com/Soe-Myat-Cho/Taylor-s-Play-List",
      live_link: "https://taylorswift-playlist.vercel.app/",
    },

    {
      img: elegance,
      name: "Ecommerce Platform (fully functional) ",
      github_link: "https://github.com/Soe-Myat-Cho/React-Laravel-project",
      live_link: "https://vercel-test-nine-kohl.vercel.app/",
    },
    {
      img: west,
      name: "Quizzify (fully functional) ",
      github_link: "https://github.com/Soe-Myat-Cho/Quizzify",
      live_link: "https://quizzify-iota.vercel.app/",
    },
  ];
  return (
    <section id="projects" className="py-20 items-center text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My Works</p>
      </div>
      <br />
      <div className="flex justify-center max-w-6xl gap-6 mx-auto items-center relative">
        <div className="lg:w-11/12 w-full h-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            className=""
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i} className="pb-12">
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <a href={project_info.live_link} target="_blank">
                    <img
                      src={project_info.img}
                      alt=""
                      className="rounded-lg  "
                    />
                  </a>
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Project;
