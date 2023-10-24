import React, { useEffect, useRef, useState } from "react";
import transpattern from "../images/trans_pattern1.png";
import conBg from "../images/con-bg.jpg";
import { FaCheck, FaCheckCircle } from "react-icons/fa";
import axios from "axios";
import digital from "../images/digital.jpg";
import step4 from "../images/step4.jpg";
import { useNavigate } from "react-router-dom";
import { BsPlayFill } from "react-icons/bs";
import { BsPauseFill } from "react-icons/bs";
// این کامپوننت برای اون صفحه جدیدی بود که باید میساختم و در step2 که یک آندرلاین داره و روش بزنیم این صفحه نمایش پیدا کنه
const TashakorDigital = () => {
  document.title = "8 راز برای به حقیقت رسوندن آرزوهای مالیتون";
  const navigate = useNavigate();
  const transpatternImage = {
    background: `url(${transpattern})`,
  };
  const BacktranspatternImage = {
    background: `url(${transpattern}) repeat center top #ececec`,
  };
  const ConBgImage = {
    background: `url(${conBg})`,
  };

  const [imageSrc, setImageSrc] = useState("");
  const [imageSrc2, setImageSrc2] = useState("");
  const [videoSrc, setVideoSrc] = useState("");
  const [videoSrc2, setVideoSrc2] = useState("");
  const [downloadLink, setDownloadLink] = useState("");
  const apiKey = "k8LknC4kyMbDQ9H6I0uVmTXJgL81Mh";

  useEffect(() => {
    // عکس و تایتل کتاب اول
    axios
      .get("https://api.startemali.ir/api/products", {
        headers: {
          authorization: `${apiKey}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setImageSrc(res.data[0]);
        setDownloadLink(res.data[0].url);

        // console.log(res.data);
      })
      .catch((err) => {
        console.error("error handling", err);
      });

    // عکس و تایتل کتاب دوم

    axios
      .get("https://api.startemali.ir/api/products", {
        headers: {
          authorization: `${apiKey}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setImageSrc2(res.data[1]);
        // console.log(res.data);
      })
      .catch((err) => {
        console.error("error handling", err);
      });

    axios
      .get("https://api.startemali.ir/api/pages/4")
      .then((res) => {
        setVideoSrc(res.data.video);
        // console.log(res.data);
      })
      .catch((err) => {
        console.error("error handling", err);
      });

    axios
      .get("https://api.startemali.ir/api/pages/3")
      .then((res) => {
        setVideoSrc2(res.data.video);
        // console.log(res.data);
      })
      .catch((err) => {
        console.error("error handling", err);
      });
    window.scrollTo(0, 0);
  }, []);

  // VideoPlayer
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPlaying2, setIsPlaying2] = useState(false);
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
  const handlePlayPause2 = () => {
    const video2 = document.getElementById("videop2");
    if (!isPlaying2) {
      video2.play();
    } else {
      video2.pause();
    }
    setIsPlaying2(!isPlaying2);
  };

  return (
    <div style={BacktranspatternImage}>
      <div className="bg-[#3E91A7]">
        <div
          className="w-screen md:w-[98.5vw] h-[14vh] bg-cover bg-center"
          style={transpatternImage}
        >
          <div className="flex items-center flex-col pt-3.5 font-bold text-white text-xl lg:text-2xl">
            <h2 className="text-yellow-200">تبریک!!</h2>
            <p> مینی کتاب رایگان منو در زیر دانلود کنید!</p>
          </div>
        </div>
      </div>
      <div className="w-[95%] flex flex-col mx-auto bg-white mt-4 md:w-[60%]">
        <div className="w-full h-full relative p-2 mx-auto outline outline-gray-100 outline-8">
          {videoSrc && (
            <div>
              <video
                poster={digital}
                id="videop"
                ref={videoRef}
                className="w-full"
                controls={false}
                onClick={handlePlayPause}
              >
                <source src={videoSrc} type="video/mp4" />
              </video>
              <div>
                <button
                  onClick={handlePlayPause}
                  className="absolute lg:bottom-[30px] bottom-[15px] right-[46%] lg:right-[48%] text-2xl lg:text-3xl text-gray-200 rounded-full p-1 hover:text-white hover:bg-[#070707a6] transition-all"
                >
                  {isPlaying ? <BsPauseFill /> : <BsPlayFill />}
                </button>
              </div>
            </div>
          )}
        </div>
        {/* first Box Section */}
        <div className="text-center border rounded-lg border-black mx-5 my-8">
          <div className="bg-[#3E91A7] rounded-t-[7px] py-4 text-2xl font-bold text-white">
            <h2>8 راز برای به حقیقت رسوندن آرزوهای مالیتون!</h2>
          </div>
          <div className="p-1 pb-9 rounded-lg" style={ConBgImage}>
            <div>
              <div className="flex flex-col-reverse text-right justify-center mx-auto items-center lg:w-[100%] lg:items-start sm:flex-row">
                <div className="p-2 w-full lg:w-[90%]">
                  <h2 className="font-bold text-black-700 mb-1 text-[28px]">
                    بخونید این مینی کتاب رو ۱۰۰ درصد{" "}
                    <span className="underline">رایگان</span>
                  </h2>
                  <span className="bg-yellow-400 px-4 py-0.5 text-2xl font-bold text-red-600">
                    آفر به مدت محدود
                  </span>
                  <p className="font-medium text-lg pt-3">
                    اینا 8 راز برای به حقیقت رسوندن آرزوهای مالیتون هستن
                  </p>
                  {/* UL List Tag Text */}
                  <div className="my-4">
                    <div className="flex items-center my-2">
                      <FaCheckCircle className="text-[50.1px] lg:text-[32.2px] text-[#0d8f73] mx-3" />
                      <p className="text-[15px] text-gray-900 font-semibold">
                        8 راز منو که بهتون اون پرش شروع به سمت آینده مالی که
                        منتظرش بودید میده رو کشف کنید
                      </p>
                    </div>

                    <div className="flex items-center  my-2">
                      <FaCheckCircle className="text-[45.3px] lg:text-[29px] text-[#0d8f73] mx-3" />
                      <p className="text-[15px] text-gray-900 font-semibold">
                        هنر پنهان تبدیل کردن ذره های کوچک اطلاعات به عوامل
                        قدرتمند تغییر در زندگیتون
                      </p>
                    </div>

                    <div className="flex items-center  my-2">
                      <FaCheckCircle className="text-[52.5px] lg:text-[34px] text-[#0d8f73] mx-3" />
                      <p className="text-[15px] text-gray-900 font-semibold">
                        8 رازی که میتونید اجراشو در زندگیتون امروز شروع کنید تا
                        ۱۰۰ درصد کنترل آینده مالیتون رو بگیرید
                      </p>
                    </div>
                  </div>
                </div>

                {/* Image Book */}
                <div className="p-2 -my-9 w-80 md:w-[300px] lg:scale-[1.6] lg:my-8 lg:mx-8">
                  {imageSrc && (
                    <img src={imageSrc.image} alt={imageSrc.title} />
                  )}
                </div>
              </div>
              <div className="bg-[#3E91A7] w-[99%] md:w-[90%] p-3 mx-auto shadow-lg shadow-gray-500 rounded-lg text-xl font-bold text-white">
                <div style={transpatternImage} className="rounded-lg">
                  <div className="p-5">
                    <div className="flex items-center gap-1.5 lg:gap-4">
                      <img
                        src="https://www.arezooyemali.ir/root/css/lw/downloadminibook/option1.png"
                        alt="pdf"
                      />
                      <p className="pb-4 text-[16px] lg:text-[24px] font-semibold">
                        دانلود مینی کتاب رایگان من !
                      </p>
                    </div>
                    <div className="py-3 md:py-6 border-4 border-yellow-300 border-dashed block mx-auto mt-5 w-48  lg:w-60 text-3xl bg-[#195161] text-yellow-400">
                      100% رایگان
                    </div>
                  </div>
                  <p>آفر به مدت محدود</p>
                  {downloadLink && (
                    <a
                      className="bg-gradient-to-b from-[#FFF800] to-[#FFBC00] block w-[85%] mx-auto my-4 border-b-4 border-orange-500 py-4 px-6 rounded-xl"
                      href={downloadLink}
                      download
                    >
                      <p className="text-blue-950 text-2xl md:text-3xl">
                        دانلود رایگان
                      </p>{" "}
                      <span className="text-sm md:text-lg font-semibold text-red-700">
                        اینجا کلیک کنید برای ذخیره
                      </span>{" "}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center border rounded-lg border-orange-500 mx-5 my-8">
          <div className="bg-gradient-to-b from-[#F27833] to-[#DA570C] rounded-t-[7px] py-2  font-semibold px-2 leading-10 text-white">
            <p className="text-[26px]">
              صبر کن – این پیام ویژه از اکبر شیرزادی را ببینید
            </p>
            <p className="text-[21px] text-yellow-300">
              معرفی برترین کتاب های 1402 شو بگیرید– رایگان
            </p>
          </div>
          <div className="p-1 pb-9 rounded-lg" style={ConBgImage}>
            <div>
              <div className="flex flex-col-reverse text-right justify-center mx-auto items-center lg:w-[100%] lg:items-start sm:flex-row">
                {/* Video */}
                <div className="w-[96%] relative h-full md:w-[80%] lg:mr-3 mt-2 mb-8 ">
                  {videoSrc2 && (
                    <div>
                      <video
                        poster={step4}
                        id="videop2"
                        ref={videoRef}
                        className="w-full"
                        controls={false}
                        onClick={handlePlayPause2}
                      >
                        <source src={videoSrc2} type="video/mp4" />
                      </video>
                      <div>
                        <button
                          onClick={handlePlayPause2}
                          className="absolute bottom-[10px] lg:bottom-[10px] right-[44%] lg:right-[44%] text-2xl lg:text-3xl text-gray-300 rounded-full p-1 hover:text-white hover:bg-[#070707a6] transition-all"
                        >
                          {isPlaying2 ? <BsPauseFill /> : <BsPlayFill />}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                {/* Video */}
                {/* Image Book */}
                <div className="p-2 w-80 md:w-[350px] lg:scale-[1.4] lg:mr-5 lg:mt-10">
                  {imageSrc2 && (
                    <img src={imageSrc2.image} alt={imageSrc2.title} />
                  )}

                  {/* {imageUrl} */}
                </div>
              </div>
              <div className="bg-[#FFFFCC] w-[99%] md:w-[85%] border-dashed border-[#f36100] border-4 p-3 shadow-lg mx-auto shadow-gray-500 rounded-lg text-xl font-bold text-white text-right">
                <span className="flex items-center pt-3 gap-4 text-gray-900 font-semibold text-lg">
                  <FaCheck className="text-green-600 text-[24px]" />
                  وارد بازار چند 10 میلیاردی شو فقط با مهارتت
                </span>
                <span className="flex items-center pt-3 gap-4 text-gray-900 font-semibold text-lg">
                  <FaCheck className="text-green-600 text-[53px] md:text-[32px]" />
                  یاد بگیر چجوری بیزنستو بر اساس بازاریابی آنلاین و سنتی قدم به
                  قدم استارت بزنی
                </span>
                <span className="flex items-center pt-3 gap-4 text-gray-900 font-semibold text-lg">
                  <FaCheck className="text-green-600 text-[45px] md:text-[27px]" />
                  بعد از خواندن این کتاب میتونی به این مهارت خاص مسلط بشی
                </span>
              </div>
              <button
                onClick={() => navigate("/step4")}
                className="bg-gradient-to-b from-[#FFF800] to-[#FFBC00] shadow-md shadow-[#2e2e2e] md:w-[400px] mt-10 border-b-4 border-orange-500 py-4 px-6 rounded-full"
                // onClick={handleNextStep}
                type="submit"
              >
                <p className="text-blue-950 text-xl md:text-2xl font-bold">
                  این کتاب دیجیتال رو الان بگیر{" "}
                </p>
                <p className="text-lg font-medium text-red-600">مدت محدود</p>{" "}
              </button>
            </div>
          </div>
        </div>
        {/* End Section */}
      </div>
    </div>
  );
};

export default TashakorDigital;
