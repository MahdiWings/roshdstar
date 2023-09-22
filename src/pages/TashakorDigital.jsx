import React, { useEffect, useState } from "react";
import transpattern from "../images/trans_pattern1.png";
import conBg from "../images/con-bg.jpg";
import { FaCheck, FaCheckCircle } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// این کامپوننت برای اون صفحه جدیدی بود که باید میساختم و در step2 که یک آندرلاین داره و روش بزنیم این صفحه نمایش پیدا کنه
const TashakorDigital = () => {
  const navigate = useNavigate();
  const transpatternImage = {
    background: `url(${transpattern})`,
  };
  const ConBgImage = {
    background: `url(${conBg})`,
  };

  const [imageSrc, setImageSrc] = useState("");
  const [imageTitle, setImageTitle] = useState("");
  const [imageSrc2, setImageSrc2] = useState("");
  const [imageTitle2, setImageTitle2] = useState("");
  const [videoSrc, setVideoSrc] = useState("");
  const [videoSrc2, setVideoSrc2] = useState("");
  const [downloadLink, setDownloadLink] = useState("");
  const apiKey = "k8LknC4kyMbDQ9H6I0uVmTXJgL81Mh";

  useEffect(() => {
    // عکس و تایتل کتاب اول
    axios
      .get("https://roshdstar.onrender.com/api/products/email/free")
      .then((res) => {
        setImageSrc(res.data[0].image);
        // console.log(res.data);
      })
      .catch((err) => {
        console.error("error handling", err);
      });

    axios
      .get("https://roshdstar.onrender.com/api/products/email/free")
      .then((res) => {
        setImageTitle(res.data[0].title);
        // console.log(res.data);
      })
      .catch((err) => {
        console.error("error handling", err);
      });

    // عکس و تایتل کتاب دوم

    axios
      .get("https://roshdstar.onrender.com/api/products", {
        headers: {
          authorization: `${apiKey}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setImageSrc2(res.data[1].image);
        // console.log(res.data);
      })
      .catch((err) => {
        console.error("error handling", err);
      });

    axios
      .get("https://roshdstar.onrender.com/api/products", {
        headers: {
          authorization: `${apiKey}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setImageTitle2(res.data[1].title);
        // console.log(res.data);
      })
      .catch((err) => {
        console.error("error handling", err);
      });

    axios
      .get("https://roshdstar.onrender.com/api/pages/4")
      .then((res) => {
        setVideoSrc(res.data.video);
        // console.log(res.data);
      })
      .catch((err) => {
        console.error("error handling", err);
      });

    axios
      .get("https://roshdstar.onrender.com/api/pages/3")
      .then((res) => {
        setVideoSrc2(res.data.video);
        // console.log(res.data);
      })
      .catch((err) => {
        console.error("error handling", err);
      });
  }, []);

  const handleDownloadClick = async () => {
    try {
      const response = await axios.get(
        "https://roshdstar.onrender.com/api/products/1"
      );
      setDownloadLink(response.data.url);
      // console.log(response.data.url);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="bg-gray-100 ">
      <div className="bg-[#3E91A7]">
        <div
          className="w-screen md:w-[98.5vw] h-[14vh] bg-cover bg-center"
          style={transpatternImage}
        >
          <div className="flex items-center flex-col pt-3.5 font-bold text-white text-2xl">
            <h2 className="text-yellow-200">تبریک!!</h2>
            <p> کتاب رایگان منو در زیر دانلود کنید</p>
          </div>
        </div>
      </div>
      <div className="w-[100%] flex flex-col mx-auto bg-white mt-4 md:w-[60%]">
        <div className="w-full h-full p-2 mx-auto outline outline-gray-100 outline-8">
          {videoSrc && (
            <video autoPlay className="w-full">
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
        {/* first Box Section */}
        <div className="text-center border rounded-lg border-black mx-3 my-8">
          <div className="bg-[#3E91A7] rounded-t-[7px] py-4 text-2xl font-bold text-white">
            <h2>کتابم را رایگان دانلود کنید !</h2>
          </div>
          <div className="p-1 pb-9 rounded-lg" style={ConBgImage}>
            <div>
              <div className="flex flex-col-reverse text-right justify-center mx-auto items-center lg:w-[100%] lg:items-start sm:flex-row">
                <div className="p-2 w-full lg:w-[90%]">
                  <h2 className="font-bold text-black-700 mb-1 text-[28px]">
                    بخونید این مینی کتاب رو ۱۰۰ درصد رایگان
                  </h2>
                  <span className="bg-yellow-500 px-4 py-0.5 text-2xl font-bold text-red-600">
                    آفر به مدت محدود
                  </span>
                  <p className="font-semibold text-xl pt-3">
                    بعد از آموزش بیشتر از ۳ میلیون آدم در اطراف دنیا...
                  </p>
                  <p className="font-medium text-lg pt-3">
                    اینا ۵ راز برای به حقیقت رسوندن آرزوهای مالیتون هستن
                  </p>
                  {/* UL List Tag Text */}
                  <div className="my-4">
                    <div className="flex items-center my-2">
                      <FaCheckCircle className="text-[50.1px] lg:text-[32.2px] text-[#0d8f73] mx-3" />
                      <p className="text-[15px] text-gray-900 font-semibold">
                        ۵ راز منو که بهتون اون پرش شروع به سمت آینده مالی که
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
                        ۵ رازی که میتونید اجراشو در زندگیتون امروز شروع کنید تا
                        ۱۰۰ درصد کنترل آینده مالیتون رو بگیرید
                      </p>
                    </div>
                  </div>
                </div>

                {/* Image Book */}
                <div className="p-2 w-80 md:w-[250px] lg:scale-[2.8] lg:mt-28 lg:m-10">
                  <img
                    // width={300}
                    src={imageSrc}
                    alt={imageTitle}
                  />
                  {/* {imageUrl} */}
                </div>
              </div>
              <div className="bg-[#3E91A7] w-[99%] md:w-[90%] p-3 mx-auto shadow-lg shadow-gray-500 rounded-lg text-xl font-bold text-white">
                <div style={transpatternImage} className="rounded-lg">
                  <div className="p-5">
                    <p>دانلود مینی کتاب رایگان من !</p>
                    <div className="py-3 md:py-6 border-4 border-yellow-300 border-dashed block mx-auto mt-5 w-60 text-3xl bg-[#195161] text-yellow-400">
                      100% رایگان
                    </div>
                  </div>
                  <p>آفر به مدت محدود</p>
                  <a href={downloadLink} download>
                    <button
                      onClick={handleDownloadClick}
                      className="bg-gradient-to-b from-[#FFF800] to-[#FFBC00] w-[85%] my-4 border-b-4 border-orange-500 py-4 px-6 rounded-xl"
                      // onClick={handleNextStep}
                      type="submit"
                    >
                      <p className="text-blue-950 text-2xl md:text-3xl">
                        دانلود رایگان
                      </p>{" "}
                      <p className="text-sm md:text-lg font-medium text-red-600">
                        اینجا کلیک کنید برای ذخیره
                      </p>{" "}
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center border rounded-lg border-orange-500 mx-3 my-8">
          <div className="bg-[#f86d1d] rounded-t-[7px] py-4 text-2xl font-semibold px-2 leading-10 text-white">
            <p>صبر کن – این پیام ویژه از اکبر شیرزادی را ببینید</p>
          </div>
          <div className="p-1 pb-9 rounded-lg" style={ConBgImage}>
            <div>
              <div className="flex flex-col-reverse text-right justify-center mx-auto items-center lg:w-[100%] lg:items-start sm:flex-row">
                {/* Video */}
                <div className="w-[96%] h-full md:w-[80%] lg:mr-3 mt-2 mb-8 outline md:outline-none outline-black outline-4 ">
                  {videoSrc && (
                    <video controls className="w-full">
                      <source src={videoSrc2} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
                {/* Video */}
                {/* Image Book */}
                <div className="p-2 w-80 md:w-[350px] lg:scale-[1.4] lg:mr-5 lg:mt-12">
                  <img
                    // width={300}
                    src={imageSrc2}
                    alt={imageTitle2}
                  />
                  {/* {imageUrl} */}
                </div>
              </div>
              <div className="bg-[#faffb5] w-[99%] md:w-[85%] border-dashed border-[#f36100] border-4 p-3 shadow-lg mx-auto shadow-gray-500 rounded-lg text-xl font-bold text-white text-right">
                <span className="flex items-center pt-3 gap-4 text-gray-900 font-semibold text-lg">
                  <FaCheck className="text-green-600 text-[24px]" />
                  وارد بازار چند 10 میلیاردی شو فقط با کامپیوترت
                </span>
                <span className="flex items-center pt-3 gap-4 text-gray-900 font-semibold text-lg">
                  <FaCheck className="text-green-600 text-[53px] md:text-[32px]" />
                  یاد بگیر چجوری بیزنستو بر اساس بازاریابی اطلاعات آنلاین استارت
                  بزنی قدم های دقیق برای دنبال کردن
                </span>
                <span className="flex items-center pt-3 gap-4 text-gray-900 font-semibold text-lg">
                  <FaCheck className="text-green-600 text-[45px] md:text-[27px]" />
                  «معرفی برترین های 1401» رو 100% رایگان بگیر (فقط اطلاعاتت رو
                  بده) – فرصت محدود!
                </span>
              </div>
              <button
                onClick={() => navigate("/step4")}
                className="bg-gradient-to-b from-[#FFF800] to-[#FFBC00] md:w-[400px] mt-10 border-b-4 border-orange-500 py-4 px-6 rounded-full"
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
