// import VideoPlayer from "../components/VideoPlayer";
// import { FaCheckCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import waitIcon from "../images/waiticon.png";
import cartformol from "../images/cartformol.jpg";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useMyContext } from "../components/MyContext";
import { BsPlayFill } from "react-icons/bs";
import { BsPauseFill } from "react-icons/bs";
import step5 from "../images/step5.jpg";
import bluebar from "../images/bluebar.gif";

const Step5AfterPay = () => {
  const { email, password } = useMyContext();
  const name = localStorage.getItem("name");

  const [showContent, setShowContent] = useState(false);
  const [firstProduct, setFirstProduct] = useState({});
  document.title = "سفارش شما هنوز کامل نشده است...";

  const ProgerssBarImage = {
    backgroundImage: `url(${bluebar})`,
  };
  const [video4, setVideo4] = useState("");

  useEffect(() => {
    axios
      .get("https://startmali.runflare.run/api/pages/5")
      .then((res) => {
        setVideo4(res.data.video);
      })
      .catch((err) => {
        console.error("error handling", err);
      });
  }, []);
  const navigate = useNavigate();

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
      setFirstProduct(response.data[3]);
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

  const totalPrice = firstProduct.price;

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
          amount: totalPrice,
          productID: [firstProduct._id],
        }
      );
      // console.log("Success:", response.data);

      // دریافت لینک درگاه پرداخت از بک‌اند
      const payment = response.data;
      window.location.href = payment.link;
    } catch (error) {
      console.error(error.response.data);
    }
  };

  const [scrollState, setScrollState] = useState("auto");

  useEffect(() => {
    const timer2 = setTimeout(() => {
      if (scrollState === "auto") {
        // انجام اسکرول به پایین پس از 3 ثانیه
        const scrollDistance = 80; // مقدار اسکرول به پایین مورد نظر (مثال: 100 پیکسل)
        window.scrollBy({
          top: scrollDistance,
          behavior: "smooth",
        });
      }
    }, 132000); // 135000 دقیقه به میلی‌ثانیه

    // هنگام عدم نیاز به تایمر، تایمر را حذف کنید
    return () => {
      clearTimeout(timer2);
    };
  }, []);

  const handleScroll = () => {
    setScrollState("manual");
  };

  useEffect(() => {
    // تایمر برای تأخیر 2.3 دقیقه
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 130000); // 132000 دقیقه به میلی‌ثانیه

    // هنگام عدم نیاز به تایمر، تایمر را حذف کنید
    return () => {
      clearTimeout(timer);
    };
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

  // const navigate = useNavigate();
  return (
    <>
      <div
        onScroll={handleScroll}
        className=" w-[98vw] h-screen overflow-hidden"
      >
        <div className="bg-cover bg-[#0e0e0e] w-screen h-screen bg-no-repeat fixed flex justify-center items-center"></div>

        <div className="absolute top-0 left-0 flex-col  flex w-full h-full p-0 items-center">
          <div className="bg-[#21557A] py-5 w-full text-center mb-5">
            <p className="text-white px-2 text-xl font-semibold">
              <span className="text-yellow-300">{name}</span> عزیز کتاب خریداری
              شده به <span className="text-yellow-300">جیمیل</span> شما ارسال
              شد.
            </p>
          </div>
          <div className="w-[95%] h-auto  my-1 rounded-sm bg-white lg:w-[1170px] ">
            <div className="p-0">
              {/* Up video */}
              <div className="w-[98%] text-left my-3 mx-auto bg-gray-300 p-1 rounded-md">
                <div style={ProgerssBarImage} className="w-[100%] h-5">
                  <div className="w-[35%] text-gray-100 bg-gray-100">`</div>
                </div>
              </div>
              <div className="mt-5 mx-3 md:flex items-center ">
                <img
                  src={waitIcon}
                  className="my-3 w-20 md:w-auto"
                  alt="Wait Icon"
                />
                <div className="flex flex-col mx-2 md:mx-5">
                  <p className="font-black text-[22px]">
                    سفارش شما هنوز تکمیل نشده است...
                  </p>
                  <p className="text-[17px] mt-3 font-semibold md:pt-3 md:text-lg">
                    این صفحه را نبندید - لطفا این ویدیو کوتاه را ببینید
                  </p>
                </div>
              </div>
              {/* End Up video */}
              <div className="flex gap-8 flex-col md:flex-col">
                <div className="w-[95%] relative h-full md:w-[94%] mx-auto m-5 mb-4 ">
                  {video4 && (
                    <div>
                      <video
                        poster={step5}
                        id="videop"
                        ref={videoRef}
                        className="w-full"
                        controls={false}
                        playsInline={true}
                        onClick={handlePlayPause}
                      >
                        <source src={video4} type="video/mp4" />
                      </video>

                      <div>
                        <button
                          onClick={handlePlayPause}
                          className="absolute bottom-2 right-[45%] lg:bottom-4 lg:text-4xl lg:right-[48%] text-2xl text-gray-200 rounded-full p-1 hover:text-white hover:bg-[#070707a6] transition-all"
                        >
                          {isPlaying ? <BsPauseFill /> : <BsPlayFill />}
                        </button>
                      </div>
                    </div>
                  )}

                  {/* {video2} */}
                  {/* End video player */}
                </div>
                {showContent && (
                  <div>
                    <div className="bg-[#0A98E0] text-center py-5 -mt-4 w-full">
                      <p className="text-3xl md:text-2xl px-6 leading-10 font-bold text-white">
                        دسترسی سریع به فرمول 20 میلیون تومانی
                      </p>
                    </div>
                    <p className="text-center py-5 px-3 font-extrabold text-2xl md:text-2xl">
                      <span className="text-red-600">پیشنهاد ویژه</span> فقط
                      برای یکبار همین امروز سفارش دهید و ما 95% تخفیف از قیمت
                      همیشگی خواهیم داد!
                    </p>
                    <div className="my-0 p-3 md:gap-8 flex flex-col md:flex-row-reverse">
                      <div className="w-full md:w-[50%] h-full border-gray-600 border-dashed border-[3px] bg-[#FFFCCC]">
                        <p className="text-xl font-extrabold text-center p-4">
                          <span className="text-red-600">بله!</span> من می خواهم
                          یاد بگیرم که چگونه می توانم ماهیانه 20 میلیون تومان
                          بسازم
                        </p>
                        <p className="text-[16px] font-semibold px-4 text-center mx-auto">
                          همین الان سفارش دهید و 95% برای خود پس انداز کنید و
                          دسترسی سریع به فرمول ۲۰ میلیون تومانی به دست آورید و
                          فرمول مرحله به مرحله و‌ مالی یاد بگیرید که هزاران نفر
                          با آن توانسته اند به صورت پاره وقت کار کنند و به درآمد
                          برسند .
                        </p>
                        <p className="text-center text-[23px] font-semibold pt-5 md:pt-7 text-[#E38020]">
                          197,000 تومان (فقط برای امروز)
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
                    <Link to="/step6afterpay">
                      <p className="text-center mb-8 px-0.5 -mt-10 underline text-blue-700">
                        نه متشکرم من نیازی به کمک برای بادگیری این مهارت ندارم{" "}
                      </p>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step5AfterPay;
