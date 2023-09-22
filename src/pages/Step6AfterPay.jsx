import VideoPlayer from "../components/VideoPlayer";
// import { FaCheckCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import cartformol from "../images/cartformol.jpg";
import axios from "axios";
import { useEffect, useState } from "react";
import CountdownTimer from "../components/CountdownTimer";
import { useMyContext } from "../components/MyContext";

const Step6AfterPay = () => {
  document.title = "50% تخفیف ویژه...";
  const { name, email, password } = useMyContext();
  const [firstProduct, setFirstProduct] = useState({});
  const navigate = useNavigate();

  const [video5, setVideo5] = useState("");

  useEffect(() => {
    axios
      .get("https://roshdstar.onrender.com/api/pages/6")
      .then((res) => {
        setVideo5(res.data.video);
      })
      .catch((err) => {
        console.error("error handling", err);
      });
  }, []);

  const fetchProducts = async () => {
    const apiKey = 'k8LknC4kyMbDQ9H6I0uVmTXJgL81Mh'
    try {
      const response = await axios.get(
        "https://roshdstar.onrender.com/api/products", {
          headers: {
            'authorization': `${apiKey}`,
            'Content-Type': 'application/json'
          }
        })
      setFirstProduct(response.data[3]);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const jwtToken = localStorage.getItem('token');
    if (!jwtToken) {
      navigate('/step4')
    }
    fetchProducts()
  }, []);

  const handleProductOrder = async () => {
    const userEmail = localStorage.getItem('email')
    const userPassword = localStorage.getItem('password')
    try {
      const response = await axios.post("http://roshdstar.onrender.com/api/payment", {
        email: userEmail,
        password: userPassword,
        title: firstProduct.title,
        amount: 97000,
      });

      console.log("Success:", response.data);

      // دریافت لینک درگاه پرداخت از بک‌اند
      const payment = response.data;
      window.location.href = payment.link;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className=" w-[98vw] h-screen overflow-hidden">
        <div className="bg-cover w-screen h-screen bg-no-repeat fixed flex justify-center items-center bg-[#020202]"></div>
        <div className="absolute top-0 left-0 flex-col  flex w-full h-full items-center">
          <div className="bg-[#21557A] py-6 w-full text-center mb-5">
            <p className="text-white text-xl font-semibold">
              {name} عزیز شما یک رشد استارتر شدید.
            </p>
          </div>
          <div className="w-full h-auto  my-1 rounded-lg outline outline-8 outline-[#ffffff0e] bg-white md:w-[85%] ">
            <div className="p-0">
              {/* Up video */}
              <div className="w-[95%] text-left my-5 mx-auto bg-gray-300 p-1 rounded">
                <div className="w-[100%] bg-gray-100">
                  <div className="w-[70%] bg-green-500 text-black">
                    Completed 70%
                  </div>
                </div>
              </div>
              <div className="my-1 mx-auto md:flex justify-center ">
                <p className="text-2xl font-bold">
                  <span className="text-red-500">صبر کنید!!</span> 50% تخفیف
                  بیشتر بگیرید
                </p>
              </div>
              {/* End Up video */}
              <div className="flex gap-8 flex-col md:flex-col">
                <div className="w-full h-full md:w-[94%] mx-auto m-4 outline outline-black outline-8 ">
                {video5 && <VideoPlayer videoSrc={video5} />}

                </div>
                {/* {video2} */}
                {/* End video player */}
                <div>
                  <div className="bg-[#FCC916] text-center py-5 w-full">
                    <p className="text-lg md:text-2xl font-bold text-white">
                      دسترسی سریع به فرمول 10 میلیون تومانی
                    </p>
                  </div>
                  <p className="text-center py-5 px-3 font-extrabold text-lg md:text-2xl">
                    <span className="text-red-600">
                      پیشنهاد ویژه فقط برای یکبار!
                    </span>{" "}
                    نیازی به همه هدایای مازاد ندارید؟ همین امروز سفارش دهید و به
                    صورت کامل فرمول 10 میلیون تومانی را بگیرید. (بدون هدایا){" "}
                    <span className="text-green-500">
                      فقط با 97 هزار تومان!
                    </span>
                  </p>
                  <p className="text-center text-green-500 text-2xl font-bold pb-5">
                    %50 تخفیف از قیمت همیشگی
                  </p>
                  <div className="mx-auto flex  justify-center my-4z">
                    <CountdownTimer />
                  </div>
                  <div className="my-0 p-3 md:gap-8 flex flex-col md:flex-row-reverse">
                    <div className="w-full md:w-[55%] h-full border-gray-600 border-dashed border-[3px] bg-[#FFFCCC]">
                      <p className="text-xl font-bold text-center p-4">
                        <span className="text-red-600">بله!</span> من نقشه راه
                        مرحله به مرحله را برای تبدیل علایقم به یک کسب و کار
                        آنلاین سود آور می خواهم
                      </p>
                      <p className="text-[15px] font-semibold px-4 text-center mx-auto">
                        همین حالا سفارش دهید و 97.5% برای خود پس انداز کنید. و
                        دسترسی سریع به نقشه راه پولساز اطلاعاتی بدست آورید و یاد
                        بگیرید که چگونه با کمک کردن به بقیه مردم در حوزه ای که
                        علاقه دارید پول بسیار زیادی به دست آورید.
                      </p>
                      <p className="font-black text-lg md:text-2xl text-center py-5 text-black">
                        197,000 هزار تومان بود... حالا فقط
                      </p>
                      <p className="text-center text-2xl font-semibold pt-2 text-red-500">
                        97,000 تومان (فقط امروز)
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
                      نه متشکرم. من نیازی به کمک در ساختن کسب و کار آنلاینم
                      ندارم
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
