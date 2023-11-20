// import VideoPlayer from "../components/VideoPlayer";
// import { FaCheckCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import cartformol from "../images/cartformol.jpg";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import CountdownTimer from "../components/CountdownTimer";
import { useMyContext } from "../components/MyContext";
import { BsPlayFill } from "react-icons/bs";
import { BsPauseFill } from "react-icons/bs";
import step6 from "../images/step6.jpg";
import yellowbar from "../images/yellowbar.gif";

const Step6AfterPay = () => {
  document.title = "50% تخفیف ویژه...";
  // const { name, email, password } = useMyContext();
  const name = localStorage.getItem("name");

  const [firstProduct, setFirstProduct] = useState({});
  const navigate = useNavigate();
  const ProgerssBarImage = {
    backgroundImage: `url(${yellowbar})`,
  };
  const [video5, setVideo5] = useState("");

  useEffect(() => {
    axios
      .get("https://startmali.runflare.run/api/pages/6")
      .then((res) => {
        setVideo5(res.data.video);
      })
      .catch((err) => {
        console.error("error handling", err);
      });
  }, []);

  const fetchProducts = async () => {
    const apiKey = "k8LknC4kyMbDQ9H6I0uVmTXJgL81Mh";
    try {
      const response = await axios.get(
        "https://startmali.runflare.run/api/products",
        {
          headers: {
            authorization: `${apiKey}`,
            "Content-Type": "application/json",
          },
        }
      );
      setFirstProduct(response.data[4]);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const jwtToken = localStorage.getItem("token");
    if (!jwtToken) {
      navigate("/step4");
    }
    fetchProducts();
    window.scrollTo(0, 0);
  }, []);

  const handleProductOrder = async () => {
    const userName = localStorage.getItem("name");
    const userEmail = localStorage.getItem("email");
    const userPassword = localStorage.getItem("password");
    try {
      const response = await axios.post(
        "https://startmali.runflare.run/api/payment",
        {
          fullName: userName,
          email: userEmail,
          password: userPassword,
          title: firstProduct.title,
          amount: firstProduct.price,
          productID: [firstProduct._id],
        }
      );

      // console.log("Success:", response.data);

      // دریافت لینک درگاه پرداخت از بک‌اند
      const payment = response.data;
      window.location.href = payment.link;
    } catch (error) {
      console.error(error);
    }
  };

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
        <div className="bg-cover w-screen h-screen bg-no-repeat fixed flex justify-center items-center bg-[#292929]"></div>
        <div className="absolute top-0 left-0 flex-col  flex w-full h-full items-center">
          <div className="bg-[#21557A] py-6 w-full text-center mb-5">
            <p className="text-white text-xl px-2 font-semibold">
              <span className="text-yellow-300">{name}</span> عزیز شما دانشپذیر
              رشد استار شدید.
            </p>
          </div>
          <div className="w-full h-auto  my-1 rounded-lg outline outline-8 outline-[#ffffff0e] bg-white lg:w-[1170px] ">
            <div className="p-0">
              {/* Up video */}
              <div className="w-[98%] text-left my-4 mx-auto bg-gray-300 p-1 rounded-md">
                <div style={ProgerssBarImage} className="w-[100%] h-5">
                  <div className="w-[10%] text-gray-100 bg-gray-100">`</div>
                </div>
              </div>
              <div className="my-8 mx-16 text-center md:mx-auto md:flex justify-center ">
                <p className="text-[26px] md:text-3xl font-bold">
                  <span className="text-[#FF0000]">صبر کنید!!</span> 50% تخفیف
                  بیشتر بگیرید
                </p>
              </div>
              {/* End Up video */}
              <div className="flex gap-8 flex-col md:flex-col">
                <div className="w-full relative h-full md:w-[94%] mx-auto m-4 ">
                  {video5 && (
                    <div>
                      <video
                        poster={step6}
                        id="videop"
                        ref={videoRef}
                        className="w-full"
                        controls={false}
                        playsInline={true}
                        onClick={handlePlayPause}
                      >
                        <source src={video5} type="video/mp4" />
                      </video>

                      <div>
                        <button
                          onClick={handlePlayPause}
                          className="absolute bottom-2 right-[45%] lg:bottom-5 lg:text-4xl lg:right-[48%] text-2xl text-gray-200 rounded-full p-1 hover:text-white hover:bg-[#070707a6] transition-all"
                        >
                          {isPlaying ? <BsPauseFill /> : <BsPlayFill />}
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* {video2} */}
                {/* End video player */}
                <div>
                  <div className="bg-[#FCC916] text-center py-5 w-full">
                    <p className="text-2xl md:text-3xl font-semibold text-white">
                      دسترسی سریع به فرمول 20 میلیون تومانی
                    </p>
                  </div>
                  <p className="text-center py-5 px-9 font-extrabold leading-9 lg:leading-10 text-lg md:text-2xl">
                    <span className="text-[#FF0000]">
                      پیشنهاد ویژه فقط برای یکبار!
                    </span>{" "}
                    نیازی به همه هدایای مازاد ندارید؟ همین امروز سفارش دهید و به
                    صورت کامل فرمول 20 میلیون تومانی را بگیرید. (بدون هدایا){" "}
                    <span className="text-[#19DB29]">
                      فقط با 97 هزار تومان!
                    </span>
                  </p>
                  <p className="text-center text-[#19DB29] text-xl md:text-2xl font-bold pb-5">
                    %50 تخفیف از قیمت همیشگی
                  </p>
                  <div className="mx-auto flex  justify-center">
                    {/* Ifarm CountDown */}
                    <CountdownTimer src="https://www.startemali.ir/timer/" />
                    {/* Ifarm CountDown */}
                  </div>
                  <div className="-mt-14 p-3 md:gap-8 flex flex-col md:flex-row-reverse">
                    <div className="w-full md:w-[55%] h-full border-gray-600 border-dashed border-[3px] bg-[#FFFCCC]">
                      <p className="text-xl font-extrabold text-center p-4">
                        <span className="text-[#FF0000]">بله!</span> من نقشه راه
                        مرحله به مرحله برای تبدیل شدن به یک الماس فروش را می
                        خواهم
                      </p>
                      <p className="text-[15px] text-black font-semibold px-4 text-center mx-auto">
                        همین حالا سفارش دهید و ۹۷.۵ ٪ برای خود پس انداز کنید .و
                        دسترسی سریع به نقشه راه پولساز مهارت فروش به دست آورید
                        و‌یاد بگیرید که چگونه با تکنیک های مهارت فروش پول بیشتری
                        به دست آورید.
                      </p>
                      <p className="font-black text-lg md:text-2xl text-center py-5 text-black">
                        197,000 هزار تومان بود... حالا فقط
                      </p>
                      <p className="text-center text-2xl font-semibold pt-2 text-[#FF0000]">
                        97,000 تومان{" "}
                        <span className="text-base">(فقط امروز)</span>
                      </p>
                      <div className="flex flex-col items-center">
                        {/* fORM SECTION */}
                        <button
                          onClick={handleProductOrder}
                          className="bg-[#EB7909] hover:bg-[#e4b006] text-xl my-4 text-white py-4 shadow-md shadow-[#41414163] px-2 rounded"
                          // onClick={handleNextStep}
                        >
                          بله! لطفا سفارش منو ارتقا بده{" "}
                        </button>
                      </div>
                    </div>
                    <div className="w-full mt-3  md:w-[40%]">
                      <img src={cartformol} alt="" />
                    </div>
                  </div>
                  <Link to="/greeting/landing">
                    <p className="text-center mb-8  underline text-blue-700">
                      نه متشکرم من نیازی به کمک برای بادگیری این مهارت ندارم
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step6AfterPay;
