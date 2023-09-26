import VideoPlayer from "../components/VideoPlayer";
// import { FaCheckCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import waitIcon from "../images/waiticon.png";
import cartformol from "../images/cartformol.jpg";
import axios from "axios";
import { useEffect, useState } from "react";
import { useMyContext } from "../components/MyContext";

const Step5AfterPay = () => {
  const { email, password } = useMyContext();

  const [showContent, setShowContent] = useState(false);
  const [firstProduct, setFirstProduct] = useState({});
  document.title = "سفارش شما هنوز کامل نشده است...";

  const ProgerssBarImage = {
    backgroundImage: `url('https://www.gardeshpool.com/root/images/jplayer.blue.monday.seeking.gif')`,
  };
  const [video4, setVideo4] = useState("");

  useEffect(() => {
    axios
      .get("https://roshdstar.onrender.com/api/pages/5")
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
        "https://roshdstar.onrender.com/api/products",
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
  }, []);

  const totalPrice = firstProduct.price;

  const handleProductOrder = async () => {
    const userEmail = localStorage.getItem("email");
    const userPassword = localStorage.getItem("password");
    try {
      const response = await axios.post(
        "https://roshdstar.onrender.com/api/payment",
        {
          email: userEmail,
          password: userPassword,
          title: firstProduct.title,
          amount: totalPrice,
          productID: [firstProduct._id],
        }
      );
      console.log("Success:", response.data);

      // دریافت لینک درگاه پرداخت از بک‌اند
      const payment = response.data;
      window.location.href = payment.link;
    } catch (error) {
      console.error(error.response.data);
    }
  };

  useEffect(() => {
    // تایمر برای تأخیر 10 دقیقه
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 60000); // 10 دقیقه به میلی‌ثانیه

    // هنگام عدم نیاز به تایمر، تایمر را حذف کنید
    return () => {
      clearTimeout(timer);
    };
  }, []);

  // const navigate = useNavigate();
  return (
    <>
      <div className=" w-[98vw] h-screen overflow-hidden">
        <div className="bg-cover bg-[#292929] w-screen h-screen bg-no-repeat fixed flex justify-center items-center"></div>

        <div className="absolute top-0 left-0 flex-col  flex w-full h-full p-5 items-center">
          <p className="text-white pt-2 pb-5 text-xl">
            توجه : کتاب های خریداری شده به{" "}
            <span className="text-yellow-300">جیمیل</span> شما ارسال شد...
          </p>
          <div className="w-full h-auto  my-1 rounded-lg outline outline-8 outline-[#ffffff0e] bg-white md:w-[85%] ">
            <div className="p-0">
              {/* Up video */}
              <div className="w-[98%] text-left my-1 mx-auto bg-gray-300 p-1 rounded-md">
                <div style={ProgerssBarImage} className="w-[100%]">
                  <div className="w-[75%] bg-gray-100 text-black">
                  </div>
                </div>
              </div>
              <div className="my-1 mx-6 md:flex items-center ">
                <img src={waitIcon} className="my-3" alt="Wait Icon" />
                <div className="flex flex-col mr-3 ">
                  <p className="font-bold text-xl">
                    سفارش شما هنوز تکمیل نشده است...
                  </p>
                  <p className="text-sm md:pt-3 md:text-lg">
                    این صفحه را نبندید - لطفا این ویدیو کوتاه را ببینید
                  </p>
                </div>
              </div>
              {/* End Up video */}
              <div className="flex gap-8 flex-col md:flex-col">
                <div className="w-full h-full md:w-[94%] mx-auto m-5 mb-10 outline outline-black outline-8 ">
                  {video4 && <VideoPlayer videoSrc={video4} />}

                  {/* {video2} */}
                  {/* End video player */}
                </div>
                {showContent && (
                  <div>
                    <div className="bg-[#0A98E0] text-center py-5 w-full">
                      <p className="text-lg md:text-2xl font-bold text-white">
                        دسترسی سریع به فرمول 10 میلیون تومانی
                      </p>
                    </div>
                    <p className="text-center py-5 font-extrabold text-lg md:text-2xl">
                      <span className="text-red-600">پیشنهاد ویژه</span> فقط
                      برای یکبار همین امروز سفارش دهید و ما 95% تخفیف از قیمت
                      همیشگی خواهیم داد!
                    </p>
                    <div className="my-0 p-3 md:gap-8 flex flex-col md:flex-row-reverse">
                      <div className="w-full md:w-[50%] h-full border-gray-600 border-dashed border-[3px] bg-[#FFFCCC]">
                        <p className="text-xl font-extrabold text-center p-4">
                          <span className="text-red-600">بله!</span> من می خواهم
                          یاد بگیرم که چگونه می توانم ماهیانه 10 میلیون تومان
                          بسازم
                        </p>
                        <p className="text-[15px] font-semibold px-4 text-center mx-auto">
                          همین الان سفارش دهید و 95% برای خود پس انداز کنید و
                          دسترسی سریع به فرمول 10 میلیون تومانی به دست آورید و
                          فرمول مرحله به مرحله و کاملی را یاد بگیرید که هزاران
                          نفر با آن توانسته اند به صورت پاره وقت کار کنند و اما
                          به صورت تمام وقت از آن درآمد داشته باشند-فقط در خانه
                        </p>
                        <p className="text-center text-2xl font-semibold pt-2 text-[#E38020]">
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
                      <p className="text-center mb-8 -mt-10 underline text-blue-700">
                        نه متشکرم. من نیازی به کمک در ساختن کسب و کار آنلاینم
                        ندارم
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
