import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdLock } from "react-icons/io";
import { useMyContext } from "./MyContext";
import arrowflash from "../images/arrow-flash-small.gif";

const RegistrationForm = () => {
  // این useContext اومده برای اینکه بتونم اسم و ایمیل و شماره تلفن مخاطب رو در صفحه های مختلف استفاده کنم اگر نیاز داشتم و از کامپوننت MyContext اومده
  const { name, setName, email, setEmail, phoneNumber, setPhoneNumber } = useMyContext(); 
  const [code, setCode] = useState('');
  const [iscodeValid, setIsCodeValid] = useState(false);
  // step برای مراحل فرم هست
  // step1 برای وارد شدن اطلاعات کاربر
  // step2 برای وارد کردن کد تایید
  // step3 فاکتور خرید
  const [step, setStep] = useState(1);
  //  Step 2 UseState
  const [selectedSecondProduct, setSelectedSecondProduct] = useState(false);
  const [firstProduct, setFirstProduct] = useState({}); // محصول اول 7 تومنی
  const [secondProduct, setSecondProduct] = useState({}); // محصول دوم 67 تومنی

  const [token, setToken] = useState(""); // متغیر برای ذخیره توکن
  // Step 3
  const [amount, setAmount] = useState(0);

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
      setFirstProduct(response.data[1]);
      setAmount(response.data[1].price)
      // console.log(response.data[1]);
      setSecondProduct(response.data[2]);
      // console.log(response.data[2]);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSecondProductChange = () => {
    setSelectedSecondProduct(!selectedSecondProduct);
  };
// مجموع خرید 
  const calculateTotalPrice = () => {
    let total = amount;
    if (selectedSecondProduct) {
      total += secondProduct.price;
    }
    return total;
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // برای اینه که آیا چیزی توی فرم اول ایمیل و شماره تلفن وجود داره یا نه

  const validateInput = () => {
    if (!email || !phoneNumber) {
      alert("لطفا اطلاعات خود را وارد کنید");
      return false;
    }
    // Add more validation here if needed
    return true;
  };

  // ارسال کد
  const smsOtpcode = async (e) => {
    e.preventDefault()
    if (!validateInput()) {
      return;
    }

    try {
      const response = await axios.post(
        "https://roshdstar.onrender.com/api/user/verifycode",
        {
          password: phoneNumber,
        }
      );
      console.log("Success", response);
      setStep(2);
    } catch (error) {
      console.error(error);
      alert("An error occurred while sending the code.");
    }
  };
// برای ثبت نام
  const handleSubmitcode = async (newcode) => {
    const verifyCode = Number(newcode)
    const responseUrl = "https://roshdstar.onrender.com/api/user/signup";
    const formData = {
      email: email,
      password: phoneNumber,
      code: verifyCode,
    };
    try {
      const response = await axios.post(responseUrl, formData);
      console.log(response)
      const token = response.data.token;
      setToken(token);
      localStorage.setItem("token", token);
      localStorage.setItem('email', email)
      localStorage.setItem('password', phoneNumber)

      setIsCodeValid(true);
      setStep(3);
    } catch (error) {
      console.log(error.response.data);
      setIsCodeValid(false);
    }
  };

  useEffect(() => {
    // اگر توکن معتبری وجود داشته باشد، کاربر ثبت‌نام کرده است
    const jwtToken = localStorage.getItem('token');
    if (jwtToken) {
      setStep(3)
    }
  }, []);

  const handlecodeChange = (event) => {
    const newcode = event.target.value;
    setCode(newcode);

    if (newcode.length === 4) {
      handleSubmitcode(newcode);
    }
  };
  

  const handleProductOrder = async (event) => {
    event.preventDefault();
    const totalPrice = calculateTotalPrice()
    const userEmail = localStorage.getItem('email')
    const userPassword = localStorage.getItem('password')
    try {
      console.log(email)
      const response = await axios.post(
        "https://roshdstar.onrender.com/api/payment",
        {
          email: userEmail,
          password: userPassword,
          title: firstProduct.title,
          amount: totalPrice,
        }
      );
      console.log(response.data);

      // دریافت لینک درگاه پرداخت از بک‌اند
      const payment = response.data;
      window.location.href = payment.link;
    } catch (error) {
      console.log(error);
    }
  };

  

  return (
    <div className="md:w-[40%] ">
      <div className="w-[100%] lg:w-[100%] rounded-lg bg-[#004D81] flex justify-center items-center">
        <div className="flex px-3 justify-center flex-col">
          <div className="py-4 pb-1 mb-1">
            <p className="text-white font-semibold text-center text-base lg:text-base">
              برای <span className="text-yellow-300">دانلود مستقیم</span> فقط
              فرم زیر را پر کنید
            </p>
          </div>
          <div className="flex w-full bg-[#2969B0] mb-4 rounded-xl">
            {/* Second Step */}
            <div
              className={`relative w-1/2 text-sm p-2 ${
                step === 1 ? "text-yellow-300" : "text-white bg-[#004D81]"
              }`}
            >
              <p className="text-xs">مشاهده فاکتور</p>
              <span className="text-3xl absolute top-3 left-2 md:left-3 ">
                2
              </span>
              <p className="text-[10px] md:text-xs">نهایی کردن خرید</p>
            </div>
            {/* End Second Step */}

            {/* First Step */}
            <div
              className={`relative w-1/2 text-sm p-2 z-30 ${
                step === 1 ? "text-white bg-[#004D81]" : "text-yellow-300"
              }`}
            >
              <p className="text-xs md:text-sm">ثبت نام</p>
              <span className="text-3xl absolute top-3 left-2 md:left-2 ">
                1
              </span>
              <p className="text-[10px] md:text-xs">دسترسی به پنل کاربری</p>
            </div>
            {/* End First Step */}
          </div>
          {step === 1 && (
            <form onSubmit={smsOtpcode} className="flex flex-col items-center">
              <input
                type="text"
                placeholder="*نام"
                className="block mx-2 w-full placeholder:text-gray-600 mb-2 p-2 border rounded"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="*ایمیل"
                className="block mx-2 w-full placeholder:text-gray-600 mb-2 p-2 border rounded"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="tel"
                placeholder="*شماره تلفن"
                className="block mx-2 w-full placeholder:text-gray-600 mb-2 p-2 border rounded"
                required
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />

              <button
                className="bg-yellow-500 text-3xl w-full my-4 text-white py-3 px-6 rounded-full"
                // onClick={smsOtpcode}
                type="submit"
              >
                برو به مرحله 2{" "}
              </button>
              <p className="text-xs flex text-center mb-3 text-gray-200">
                <span className="">
                  <IoMdLock />
                </span>
                ما به امنیت اطلاعات شما احترام می گذاریم و اطلاعات شما 100% نزد
                ما محفوظ خواهند ماند.
              </p>
            </form>
          )}

          {step === 2 && (
            <div>
              <div className="flex flex-col justify-center items-center w-full">
                <p className="text-white mt-5 ">
                  رمز یکبار مصرف خود را وارد کنید
                </p>
                <input
                  type="text"
                  placeholder="----"
                  className="block tracking-[15px] w-[85%] mb-5 my-6 text-center placeholder:text-gray-700 p-2 border rounded"
                  value={code}
                  maxLength="4"
                  onChange={handlecodeChange}
                />
                {code.length === 4 ? (
                  iscodeValid ? (
                    <p className="px-5 py-2 w-[85%] rounded text-white text-center bg-green-600">
                      رمز با موفقیت ثبت شد
                    </p>
                  ) : (
                    <p className="px-5 py-2 w-[85%] rounded text-white text-center bg-red-500">
                      رمز نا معتبر است
                    </p>
                  )
                ) : null}
              </div>
              <p className="text-white text-sm pt-5 mb-5 border-t-2 text-center mt-4">
                توجه: <span className="text-yellow-300">رمز یکبار مصرف</span>{" "}
                برای شماره تلفن شما از طریق پیامک ارسال شد.
              </p>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div>
              <form>
                <div className="text-white flex justify-between mx-3 text-sm">
                  <p>قیمت(تومان)</p>
                  <p>سفارش</p>
                </div>
                <div className="w-full h-[1.5px] mt-1 bg-white"></div>
                <div className="my-1 text-white text-sm leading-8">
                  <p>{firstProduct.title}</p>
                  <p>{firstProduct.price} تومان</p>
                </div>
                <div className="w-full h-[1px] bg-white"></div>

                {/* Render second product only if selected */}
                {selectedSecondProduct && (
                  <>
                    <div className="my-1 text-white text-sm leading-8">
                      <p>{secondProduct.title}</p>
                      <p>{secondProduct.price} تومان</p>
                    </div>
                    <div className="w-full h-[1px] bg-white"></div>
                  </>
                )}
                <div className="w-full rounded-sm bg-white mt-6 mb-3 border-[3px] p-3 border-black  border-dashed h-auto">
                  <div className="flex justify-around text-white bg-black py-2 px-2">
                    <p className="text-sm font-bold">
                      بله من این را می خواهم داشته باشم
                    </p>
                    <input
                      checked={selectedSecondProduct}
                      onChange={handleSecondProductChange}
                      type="checkbox"
                    />
                    <img
                      src={arrowflash}
                      className="align-middle"
                      alt="right arrow"
                    />
                  </div>
                  <p className="text-[13px] mt-2">
                    <span className="text-red-700 font-bold">
                      پیشنهادی فقط برای یکبار - فقط 67 هزار تومان:
                    </span>{" "}
                    بیش از 2 میلیون تومان ارزش بهترین آموزش - دست تو دست! دسترسی
                    سریع به 24 ساعت آموزش ضبط شده مرحله به مرحله. کسب و کار بالا
                    آمده خودتو در بهترین روش تحویل بگیر، برای اولین بار. دانش
                    پذیران برای این آموزش 2 میلیون تومان پرداخت می کنند. فقط
                    امروز برای شما 67 هزار تومان
                  </p>
                </div>
                <div className="text-center my-3">
                  <button
                    className="bg-[#32d409] flex flex-row justify-center items-center  w-[100%]  text-white h-[55px] rounded-full "
                    onClick={handleProductOrder}
                  >
                    <p className="text-2xl font-bold">ثبت سفارش</p>
                    <span className="text-4xl">
                      <IoMdArrowRoundBack />
                    </span>
                  </button>
                </div>
                <p className="text-xs flex text-center mb-3 text-gray-200">
                  <span className="">
                    <IoMdLock />
                  </span>
                  ما به امنیت اطلاعات شما احترام می گذاریم و اطلاعات شما 100%
                  نزد ما محفوظ خواهند ماند.
                </p>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
