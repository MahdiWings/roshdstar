// import VideoPlayer from "../components/VideoPlayer";
import { FaCheckCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import arrow from "../images/arrow2.png";
import step1 from "../images/step1.jpg";
import { BsPlayFill } from "react-icons/bs";
import { BsPauseFill } from "react-icons/bs";

const Step3 = () => {
  document.title = "مرحله سوم - رونمایی";
  const navigate = useNavigate();
  const [video2, setVideo2] = useState("");

  useEffect(() => {
    axios
      .get("https://api.startemali.ir/api/pages/2")
      .then((res) => {
        setVideo2(res.data.video);
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
      <div className=" w-[98vw] h-screen overflow-hidden">
        <div className="bg-[#010101] bg-cover w-screen h-screen bg-no-repeat fixed flex justify-center items-center"></div>
        <div className="absolute top-0 left-0 flex-col  flex w-full h-full p-5 items-center">
          <div className="w-full h-auto  my-5 rounded-lg outline outline-8 outline-[#ffffff0e] bg-white md:w-[67%] ">
            <div className="p-6">
              <div className="flex gap-8 flex-col md:flex-row-reverse">
                {/* Text  */}
                <div className=" md:w-1/2">
                  <p className="text-3xl p-3 text-center font-bold text-[#770606]">
                    تنها 1 کلمه که زندگی منو تغییر داد…
                  </p>
                  <p>یادم میاد که لم داده بودم و فکر می کردم:</p>
                  <span className="block py-2"></span>
                  <p className="italic">
                    چه اتفاقی برام افتاد؟ من در بالاترین نقطه زندگی بودم و حالا
                    دقیقا” در بدترین نقطه قرار دارم…
                  </p>
                </div>
                {/* Text  */}

                {/* video player */}
                <div className="w-full h-full relative md:w-[50%] md:mr-3 outline outline-black outline-8 ">
                  {video2 && (
                    <div>
                      <video
                        poster={step1}
                        id="videop"
                        ref={videoRef}
                        className="w-full"
                        controls={false}
                        playsInline={true}
                        onClick={handlePlayPause}
                      >
                        <source src={video2} type="video/mp4" />
                      </video>
                      <div>
                        <button
                          onClick={handlePlayPause}
                          className="absolute bottom-1.5 right-[43%] text-3xl text-gray-200 rounded-full p-1 hover:text-white hover:bg-[#070707a6] transition-all"
                        >
                          {isPlaying ? <BsPauseFill /> : <BsPlayFill />}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                {/* End video player */}
              </div>

              {/* Start Main Text */}
              <div className="mt-8 leading-8">
                <strong>
                  یه شب ساعت 9 ، زل زده بودم به وایت بردمو فهمیدم…
                </strong>
                <span className="block py-2"></span>
                <p>
                  یه جا توی مسیر، اجازه دادم طمع کنترلمو بگیره. دیگه با 200% رشد
                  سالیانه خوشحال نمی شدم. دیگه با میلیونها پول در سال خوشحال نمی
                  شدم…
                </p>
                <span className="block py-4"></span>
                {/* Icon and UL Li */}
                <ul className="pr-5 space-y-3">
                  <li className="flex items-center">
                    {" "}
                    <FaCheckCircle className="ml-2 text-2xl text-black" /> فقط
                    من بیشتر می خواستم.{" "}
                  </li>
                  <li className="flex items-center">
                    {" "}
                    <FaCheckCircle className="ml-2 text-lg md:text-2xl text-black" />
                    سریعتر می خواستمش.{" "}
                  </li>
                  <li className="flex items-center">
                    {" "}
                    <FaCheckCircle className="ml-2 text-2xl text-black" /> می
                    خواستم رکورد بزنم.{" "}
                  </li>
                </ul>
                {/* End Icon and UL Li */}
                <span className="block py-3"></span>

                <p>
                  و فقط به این دلایل، تصمیم گرفتم کارهایی که انجام میدادم رو
                  تغییر بدم. رازی که سالها طول کشید کشف کنم، من تصمیم گرفتم که
                  کاملا روشم رو تغییر بدم . تا امروز نفهمیدم که چرا؟
                </p>

                <h3 className="text-center text-2xl md:text-3xl text-[#770606] font-bold mt-8">
                  ببینید، چیزی که من کشف کردم
                </h3>
                <h3 className="text-center text-2xl md:text-3xl text-[#770606] font-bold mt-3">
                  تو اون 3 سال <span className="underline">یک سیستم بود</span>…
                </h3>
                <span className="block py-2"></span>
                <p>
                  به هر حال من یک کلمه داشتم:{" "}
                  <strong className="underline">سیستم</strong>
                </p>
                <span className="block py-3"></span>

                <p>
                  من واقعا با یک سیستم بالا اومده بودم که ساعت وار کار می کرد.
                  فرقی نداشت چند بار تکرارش می کردم، اون کار می کرد.
                </p>
                <span className="block py-3"></span>

                <p>به هر حال یک جای مسیر فراموشش کردم…</p>

                <span className="block py-0"></span>
                <p>از مسیرم منحرف شده بودم و ناگهان زندگیم از هم پاشید...</p>
                <span className="block py-3"></span>
                <h3 className="text-center text-2xl md:text-3xl text-[#770606] font-bold mt-4">
                  اینجا چه اتفاقی افتاد وقتی من
                </h3>
                <h3 className="text-center text-2xl md:text-3xl text-[#770606] font-bold mt-3">
                  برگشتم به…<span className="underline">سیستم</span> …
                </h3>
                <span className="block py-2"></span>
                <p>فقط در 16 ماه…</p>
                <span className="block py-3"></span>
                <p>
                  من هر یک ریال از بدهیم رو پرداخت کردم. دوباره تو حساب بانکیم
                  پول داشتم و برگشتم به مسیری که{" "}
                  <span className="underline">
                    کسب وکارم رو به یک کسب وکار با فروش میلیاردی
                  </span>{" "}
                  تبدیل کنم.…
                </p>
                <span className="block py-3"></span>
                <p>
                  همه به خاطر فقط <span className="underline">سیستم</span> بود
                  که شروع به دنبال کردنش کردم…
                </p>
                <span className="block py-3"></span>
                <p>این دقیقا زمانی بود که تصمیم گرفتم به همه بگم.</p>
                <span className="block py-3"></span>
                <p>
                  من می خواستم سیستمی که زندگیم رو تغییر داد رو به همه آموزش
                  بدم.{" "}
                  <span className="underline">
                    من می خواستم به هرکسی تو دنیا نشون بدم
                  </span>
                  ، چطور اونها هم، می تونن این سیستم رو توزندگیشون اجرا کنن…
                </p>
                <h3 className="text-center text-2xl md:text-3xl leading-[40px] text-red-800 font-bold mt-3">
                  بنابراین، این کتاب رو نوشتم و تا الان بیشتر از{" "}
                  <span className="underline">صدها نسخه به رایگان بخشیدم</span>…
                </h3>
                <p>درسته!</p>
                <span className="block py-3"></span>
                <p>
                  من هر چیزی که یاد گرفته بودم در یک کتاب ساده گذاشتم و امروز،
                  <strong>
                    می خوام یک نسخه رایگان از اونو برای تو ارسال کنم
                  </strong>
                  ، و من اعتقاد دارم که این کتاب قدرت تبدیل هر آرزویی رو به
                  واقعیت تو خودش داره (از نظر مالی).
                </p>
                <span className="block py-3"></span>
                <p>
                  <strong className="underline">
                    این 100% مرحله به مرحله است
                  </strong>
                  ، سرراسته و امتحانشو پس داده…
                </p>
                <span className="block py-3"></span>
                <p>
                  اگر نسخه تون رو می خواهید، فقط به صفحه بعد برید و آدرستون رو
                  به من بدید!
                </p>
              </div>
              {/* Button */}
              <div className="flex  justify-center">
                <button
                  onClick={() => navigate("/step4")}
                  className="bg-[#E14938] rounded-e-[40px] shadow-sm shadow-black mt-10 mb-4 lg:px-10 px-4 py-4 md:py-5 relative z-10"
                >
                  <p className="text-white font-bold text-md md:text-3xl">
                    بله! کتاب دیجیتالمو بهم بده!{" "}
                  </p>
                  <p className="text-yellow-300 font-semibold text-[10px] md:text-xl">
                    اینجارو کلیک کن تا به صفحه بعد بری
                    <span className="font-serif">«</span>
                  </p>
                  <img
                    src={arrow}
                    className="w-11 absolute -right-10 -top-1.5 md:-top-2 md:-right-14 md:w-[64px]"
                  />
                </button>
              </div>
              <Link
                className="underline text-blue-800 text-base text-center block pt-2"
                to={"/tashakor-digital"}
              >
                نه متشکرم اکبر شیرزادی، من فعلا فقط گزارش رایگانم رو می خوام...
              </Link>
              {/* End Button */}
            </div>
          </div>
          <Link
            to={"https://mahdiwings.github.io/wingsweb/"}
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

export default Step3;
