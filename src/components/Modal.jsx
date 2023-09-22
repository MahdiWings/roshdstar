import axios from "axios";
import { useEffect, useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

export default function Modal() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [imageBook, setImageBook] = useState("");
  const [titleBook, setTitleBook] = useState("");

  useEffect(() => {
    const Book1UrlImage = "https://roshdstar.onrender.com/api/products/email/free";

    axios
      .get(Book1UrlImage)
      .then((res) => {
        setImageBook(res.data[0].image);
      })
      .catch((err) => {
        console.error("error handling", err);
      });

    const TitleBookUrlImage = "https://roshdstar.onrender.com/api/products/email/free";

    axios
      .get(TitleBookUrlImage)
      .then((res) => {
        setTitleBook(res.data[0].title);
      })
      .catch((err) => {
        console.error("error handling", err);
      });
  }, []);

  const validateEmail = (email) => {
    // Email Pattern
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return emailPattern.test(email);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleOnClick = async (event) => {
    event.preventDefault();
    // ارسال ایمیل به بک‌اند

    if (!email) {
      alert("لطفاً جیمیل خود را وارد کنید");
      return; // از ادامه عملیات جلوگیری می‌شود
    }

    if (!validateEmail(email)) {
      setError("فرمت ایمیل صحیح نیست");
      alert(error);
      return;
    }
    // ارسال ایمیل به بک‌اند
    // پاک کردن پیغام خطا
    setError("");

    try {
      const response = await axios.post(
        "https://roshdstar.onrender.com/api/products/email/free",
        {
          email,
        }
      );
      console.log(response.data);
      // موفقیت: ایمیل با موفقیت ارسال شده است
      navigate("/step2");
    } catch (error) {
      console.log(error.response.data);
      alert("عملیات ناموفق، دوباره امتحان کنید", error);
    }
    setShowModal(false);
  };

  return (
    <>
      <button
        className="text-white hover:bg-red-500 transition-all hover:transition-all font-bold px-7 py-5 rounded-xl m-10 lg:px-12 lg:py-6 bg-red-600 lg:text-2xl lg:mb-6 lg:-m-10"
        type="button"
        onClick={() => setShowModal(true)}
      >
        بله ! دسترسی رایگان بلافاصله
      </button>
      {/* Modal */}
      {showModal ? (
        <>
          <div className="justify-center transition-opacity duration-300 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-10 max-w-4xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col  w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-between p-2 border-b border-solid border-slate-200 rounded-t">
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-red-600 font-black float-right text-3xl leading-none  outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span>
                      <RxCrossCircled />
                    </span>
                  </button>
                  <div className="w-[100%] text-left  bg-gray-300 p-2 rounded">
                    <div className="w-[100%] bg-gray-100">
                      <div className="w-[50%] bg-green-500 text-black">
                        Completed 50%
                      </div>
                    </div>
                  </div>
                </div>
                {/*body*/}
                <div className="relative py-2 flex flex-col md:flex-row px-5 flex-auto">
                  <div className="p-2 w-80 md:w-[400px] md:scale-125 md:pt-9 md:pb-10 mx-auto">
                    <img src={imageBook} alt={titleBook} />
                    {/* {imageBook} */}
                  </div>
                  <div>
                    <p className="mb-4 text-center text-sm md:text-lg md:mt-10 md:mb-5 font-bold">
                      برای دسترسی سریع ، ایمیل خود را وارد کنید!
                    </p>
                    <input
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                      placeholder="ایمیل شما"
                      className=" w-full lg:w-[400px] bg-gray-200 p-5 py-4 rounded-xl"
                    />
                    <div>
                      <button
                        className="bg-red-700 mt-5 text-white active:bg-red-500 font-bold w-full md:w-full text-xl px-6 py-4 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                        type="button"
                        onClick={handleOnClick}
                      >
                        رایگان دانلود آنی{" "}
                      </button>
                      <p className="text-center text-[12px] md:text-sm my-4">
                        🔒 ما به حریم خصوصی شما احترام می گذاریم
                      </p>
                    </div>
                  </div>
                </div>
                {/*footer*/}
              </div>
            </div>
          </div>
          <div className="opacity-60 fixed inset-0 z-40 bg-black">x</div>
        </>
      ) : null}
    </>
  );
}
