import axios from "axios";
import { useEffect, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { IoMdLock } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function Modal() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [imageBook, setImageBook] = useState("");
  const [titleBook, setTitleBook] = useState("");

  useEffect(() => {
    const Book1UrlImage =
      "https://roshdstar.onrender.com/api/products/email/free";

    axios
      .get(Book1UrlImage)
      .then((res) => {
        setImageBook(res.data[0].image);
      })
      .catch((err) => {
        console.error("error handling", err);
      });

    const TitleBookUrlImage =
      "https://roshdstar.onrender.com/api/products/email/free";

    axios
      .get(TitleBookUrlImage)
      .then((res) => {
        setTitleBook(res.data[0].title);
      })
      .catch((err) => {
        console.error("error handling", err);
      });
  }, []);

  const fetchProducts = async () => {
    const apiKey = "k8LknC4kyMbDQ9H6I0uVmTXJgL81Mh";
    try {
      const response = await axios.get(
        "http://roshdstar.onrender.com/api/products",
        {
          headers: {
            authorization: `${apiKey}`,
            "Content-Type": "application/json",
          },
        }
      );
      setProduct(response.data[0]);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProducts();
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
    console.log(product);
    try {
      const response = await axios.post(
        "http://roshdstar.onrender.com/api/products/email",
        {
          email,
          _id: product._id,
          apiKey: "k8LknC4kyMbDQ9H6I0uVmTXJgL81Mh",
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

  const handleBackdropClick = () => {
    // تابع برای بستن مدال زمانی که روی backdrop کلیک می‌شود
    setShowModal(false);
  };

  return (
    <>
      <button
        className="text-white hover:bg-red-600 transition-all hover:transition-all font-bold px-7 py-5 rounded-xl m-10 lg:px-9 lg:py-5 bg-red-500 lg:text-3xl lg:mb-6 lg:-m-10"
        type="button"
        onClick={() => setShowModal(true)}
      >
        بله ! <span className="underline">دسترسی رایگان</span> بلافاصله{" "}
        <span className="font-serif">«</span>
      </button>
      {/* Modal */}
      {showModal ? (
        <>
          <div
            onClick={handleBackdropClick}
            className="justify-center cursor-pointer transition-opacity bg-[#141414e1] duration-300 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative cursor-default w-auto my-6 mx-10 max-w-4xl"
            >
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col  w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-between p-2 border-b border-solid border-slate-200 rounded-t">
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-red-600 font-black float-right text-3xl leading-none outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span>
                      <AiFillCloseCircle />
                    </span>
                  </button>
                  <div className="w-[100%] text-left  bg-gray-300 px-10 py-2 rounded">
                    <div className="w-[100%] bg-green-400">
                      <div className="w-[48%] bg-gray-100 text-black">
                        <p className="-ml-14">Completed 50%</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/*body*/}
                <div className="relative py-2 flex flex-col md:flex-row overflow-hidden px-5 flex-auto">
                  <div className="w-80 md:w-[300px] md:scale-[1.50] md:pt-16 md:pb-14 mx-auto">
                  {product && <img src={product.image} alt={product.title} />}
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
                      placeholder="ایمیل خود را وارد کنید"
                      className=" w-full lg:w-[480px] placeholder:text-gray-500 bg-yellow-100 shadow-inner p-5 py-3 rounded-md"
                    />
                    <div>
                      <button
                        className="bg-red-600 mt-5 text-white active:bg-red-500 font-semibold w-full md:mr-[9px] md:w-[96%] text-[26px] px-6 py-4 md:py-5 rounded-md shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                        type="button"
                        onClick={handleOnClick}
                      >
                        <span className="underline">رایگان</span> دانلود آنی{" "}
                      </button>
                      <p className="text-left justify-end flex text-[10px] md:text-xs pt-9">
                        <span className="text-yellow-500 text-sm">
                          <IoMdLock />
                        </span>{" "}
                        ما به حریم خصوصی شما احترام می گذاریم
                      </p>
                    </div>
                  </div>
                </div>
                {/*footer*/}
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
