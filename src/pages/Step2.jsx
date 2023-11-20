import { useEffect, useRef, useState } from "react";
// import VideoPlayer from "../components/VideoPlayer";
import { FaCheckCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import step1 from "../images/step1.jpg";
import arrow from "../images/arrow2.png";
import { BsPlayFill } from "react-icons/bs";
import { BsPauseFill } from "react-icons/bs";

const Step2 = () => {
  document.title = "مرحله دوم - رونمایی";
  const navigate = useNavigate();
  const [video1, setVideo1] = useState("");

  useEffect(() => {
    axios
      .get("https://startmali.runflare.run/api/pages/1")
      .then((res) => {
        setVideo1(res.data.video);
      })
      .catch((err) => {
        console.error("error handling", err);
      });
    window.scrollTo(0, 0);
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

  // VideoPlayer

  return (
    <>
      <div className=" w-[98vw]  h-screen overflow-hidden">
        <div className="bg-cover bg-[#010101]  w-screen h-screen bg-no-repeat fixed flex justify-center items-center"></div>
        <div className="absolute top-0 left-0 flex-col  flex w-full h-full p-5 items-center  ">
          <p className="text-white text-center text-2xl">
            <span className="text-yellow-400">تبریک!</span> کتاب رایگان به ایمیل
            شما ارسال شد…
          </p>

          <div className="w-full h-auto  my-5 rounded-lg outline outline-8 outline-[#ffffff0e] bg-white md:w-[67%] ">
            <div className="p-6">
              <div className="flex gap-8 flex-col md:flex-row">
                {/* video player */}

                <div className="w-full h-full relative md:w-[50%] md:mr-3 outline outline-black outline-8 ">
                  {video1 && (
                    <div>
                      <video
                        poster={step1}
                        id="videop"
                        ref={videoRef}
                        className="w-full"
                        playsInline={true}
                        onClick={handlePlayPause}
                      >
                        <source src={video1} type="video/mp4" />
                      </video>

                      <div>
                        <button
                          onClick={handlePlayPause}
                          className="absolute bottom-1.5 right-[45%] text-3xl text-gray-200 rounded-full p-1 hover:text-white hover:bg-[#070707a6] transition-all"
                        >
                          {isPlaying ? <BsPauseFill /> : <BsPlayFill />}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                {/* End video player */}

                {/* Text  */}
                <div className="hidden md:block md:w-1/2">
                  <p className="text-3xl text-center font-semibold text-[#770606]">
                    #1 درس یاد گرفتم، وقتی درچند صد میلیون بدهی فرو رفتم و در
                    بستر مرگ بودم…
                  </p>
                </div>
                {/* Text  */}
              </div>
              <div className="mt-5 leading-7">
                <p>کاملا دراماتیکه درسته؟</p>
                <span className="block py-2"></span>
                <p>
                  <strong>خوب 100% واقعیت داره.</strong> زندگی روشی جالب برای
                  یاد دادن درس ها و تجربه ها به ما داره، من رو که از عرش به فرش
                  رسوند.
                </p>
                <span className="block py-2"></span>

                <p>
                  به هر حال، هر روز صبح که از خواب بیدار می شدم برای چیزایی که
                  یاد گرفتم شکرگزار بودم.
                </p>
                <span className="block py-2"></span>

                <p>
                  ببینید، من از 13 سال پیش برای به واقعیت تبدیل کردن آرزوهام
                  شروع به جنگیدن کردم .
                </p>

                <span className="block py-3"></span>
                <ul className="pr-5 space-y-3">
                  <strong className="flex items-center">
                    {" "}
                    <FaCheckCircle className="ml-2 text-2xl text-black" /> فقط
                    300 هزار تومان در حساب بانکیم داشتم
                  </strong>
                  <li className="flex items-center">
                    {" "}
                    <FaCheckCircle className="ml-2 text-lg md:text-2xl text-black" />
                    از نظر تجربه صفر بودم
                  </li>
                  <strong className="flex items-center">
                    {" "}
                    <FaCheckCircle className="ml-2 text-2xl text-black" />{" "}
                    سردرگم بودم و مجبور بودم خودم انجامش بدم
                  </strong>
                </ul>
                <span className="block py-3"></span>

                <p>اون موقع، من دیگه چیزی برای از دست دادن نداشتم.</p>

                <h3 className="text-center text-3xl text-[#770606] font-semibold mt-8">
                  18 ماه گذشت ، یه چیز فوق العاده کشف کردم…
                </h3>
                <p>حس می کردم چیزی کشف کردم که مثل یه رازه…</p>
                <span className="block py-3"></span>

                <p>
                  من با چند فرمول ساده خودمو بالا کشیدم که به نظر می رسید هر چه
                  تکرارش می کنم باز هم کار می کنه. تکرار و تکرار. تکرار و تکرار
                  3سال بعد، من کسب و کارم رو از 20 میلیون به 2.5 میلیارد در سال
                  رسوندم…
                </p>
                <span className="block py-3"></span>

                <p>زندگی عالی بود، درسته؟</p>
                <span className="block py-3"></span>
                <p>
                  خوب میتونست همینطور باشه اگر به اون راز می چسبیدم،{" "}
                  <span className="underline">اما این کار رو نکردم</span>…
                </p>
                <span className="block py-3"></span>
                <p>بنابراین چه اتفاقی افتاد؟</p>
                <h3 className="text-center text-3xl text-[#770606] font-semibold mt-8">
                  سال 1394، همه چیز به سمت نابودی پیش رفت…
                </h3>
                <p>تقریبا با یک چشم به هم زدن…</p>
                <span className="block py-3"></span>
                <p>
                  من خودمو تو <span className="underline">کلی بدهی دیدم</span>,
                  پر از استرس, مریض و{" "}
                  <span className="font-semibold">تو بستر مرگ</span>…
                </p>
                <span className="block py-3"></span>
                <p>
                  اون موقع بود که{" "}
                  <span className="underline font-semibold">
                    یکی از بزرگترین درس ها رو درک کردم
                  </span>{" "}
                  که تا اون موقع از زندگی ام یاد نگرفته بودم…
                </p>
              </div>
              {/* Button */}
              <div className="flex  justify-center">
                <button
                  onClick={() => navigate("/step3")}
                  className="bg-[#E14938] shadow-sm shadow-black rounded-e-[40px] mt-10 mb-4 px-6 py-4 md:py-5 relative z-10"
                >
                  <p className="text-white font-bold text-md md:text-3xl">
                    #1 درسی که یادگرفتم{" "}
                  </p>
                  <p className="text-yellow-300 text-[10px] md:text-xl">
                    (اینجارا کلیک کن تا به صفحه بعد بروید)
                  </p>
                  <img
                    src={arrow}
                    className="w-11 absolute -right-10 -top-1.5 md:-top-2 md:-right-14 md:w-[63px]"
                  />
                </button>
              </div>
              {/* End Button */}
            </div>
          </div>
          <Link
            to={"https://wings-web.onrender.com/"}
            target="_blank"
            className="pb-8 text-white pt-2"
          >
            توسعه و طراحی سایت با{" "}
            <span className="text-yellow-400">وینگز وب</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Step2;
