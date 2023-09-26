import React, { useEffect, useState } from "react";
import { useMyContext } from "../components/MyContext";
import cang from "../images/cang.png";
import VideoPlayer from "../components/VideoPlayer";
import axios from "axios";
const Congratulations = () => {
  const { name } = useMyContext();
  document.title = "تبریک - عملیات با موفقیت انجام شد";
  const [video7, setVideo7] = useState("");

  useEffect(() => {
    localStorage.clear();
    axios
      .get("https://roshdstar.onrender.com/api/pages/7")
      .then((res) => {
        setVideo7(res.data.video);
      })
      .catch((err) => {
        console.error("error handling", err);
      });
  }, []);

  return (
    <div className="bg-[#010101] w-full h-full">
      <div>
        <div className="bg-[#21557A] py-6 text-center">
          <p className="text-white text-xl font-semibold">
            {name} عزیز شما یک رشد استارتر شدید.
          </p>
        </div>
        <div className="my-12">
          <img className="mx-auto" src={cang} alt="تبریک" />
        </div>
        <div className="w-[96%] h-full md:w-[80%] mx-auto -mt-10 outline outline-white outline-4 ">
          {video7 && (
            <video
              controls
              controlsList="nodownload"
              disablePictureInPicture
              id="videoP"
              className="w-full"
            >
              <source src={video7} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
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
