import React, { useEffect, useRef, useState } from "react";
import { useMyContext } from "../components/MyContext";
import cang from "../images/cang.png";
// import VideoPlayer from "../components/VideoPlayer";
import axios from "axios";
import { BsPlayFill } from "react-icons/bs";
import { BsPauseFill } from "react-icons/bs";
import step8 from "../images/step8.jpg";

const Congratulations = () => {
  // const { name } = useMyContext();
  const name = localStorage.getItem("name");

  document.title = "تبریک - عملیات با موفقیت انجام شد";
  const [video7, setVideo7] = useState("");

  useEffect(() => {
    localStorage.clear();
    axios
      .get("https://api.startemali.ir/api/pages/7")
      .then((res) => {
        setVideo7(res.data.video);
      })
      .catch((err) => {
        console.error("error handling", err);
      });
  }, []);

  // VideoPlayer
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    const video = document.getElementById("videop");
    if (!isPlaying) {
      video.play();
    } else {
      video.pause();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-[#010101] w-full h-full">
      <div>
        <div className="bg-[#21557A] py-6 text-center">
          <p className="text-white text-xl font-semibold">
            شما دانشپذیر رشد استار شدید.
          </p>
        </div>
        <div className="my-12">
          <img className="mx-auto" src={cang} alt="تبریک" />
        </div>
        <div className="w-[96%] relative h-full md:w-[80%] mx-auto -mt-10 outline outline-white outline-4 ">
          {video7 && (
            <div>
              <video
                poster={step8}
                id="videop"
                ref={videoRef}
                className="w-full"
                controls={false}
                onClick={handlePlayPause}
              >
                <source src={video7} type="video/mp4" />
              </video>
              <div>
                <button
                  onClick={handlePlayPause}
                  className="absolute bottom-2 right-[45%] lg:bottom-4 lg:text-4xl lg:right-[48%] text-2xl text-gray-300 rounded-full p-1 hover:text-white hover:bg-[#070707a6] transition-all"
                >
                  {isPlaying ? <BsPauseFill /> : <BsPlayFill />}
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="text-center pt-6 px-4 md:px-16 pb-16 ">
          <p className="text-red-600 leading-[60px] text-3xl font-bold">
            با تشکر از خرید شما
          </p>
          <p className="text-white text-xl leading-[45px]">
            محصولات خریداری شده به ایمیل شما ارسال شده است، میتوانید با مراجعه
            به ایمیلی که در قسمت ثبت نام وارد کرده بودید به محصولات خریداری خود
            دسترسی داشته باشید، در نبود فایل spam ایمیل خود را بررسی کنید
          </p>
        </div>
      </div>
    </div>
  );
};

export default Congratulations;
