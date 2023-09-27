import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaCheckCircle } from "react-icons/fa";
import Modal from "../components/Modal";

const Step1 = () => {
  document.title = "رایگان رونمایی کتاب";

  const [product, setProduct] = useState({});

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
      setProduct(response.data[0]);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="border-t-8 border-cyan-600">
      <div className="flex flex-col text-right justify-center mx-auto items-center lg:w-[1100px] lg:items-start sm:flex-row">
        <div className="pt-2 pb-6 px-6 w-full lg:w-[80%]">
          <h2 className="font-bold text-red-700 text-xl">
            <span className="underline">رایگان</span> رونمایی کتاب
          </h2>
          <p className="text-gray-700">
            هیچ کارت بانکی نیاز نیست. دانلود رایگان
          </p>
          <p className="text-2xl lg:text-3xl mt-3 font-semibold py-4">
            8 راز روزانه ای که تبدیل میکنه
          </p>
          <p className="font-semibold text-2xl lg:text-3xl  text-red-700">
            آرزو هارو به واقعیت
          </p>

          <p className="font-medium text-[17px] py-2">
            این کتاب رایگانو دانلود کنید بلافاصله و هر آرزویی را به واقعیت تبدیل
            کنید
          </p>
          {/* UL List Tag Text */}
          <div className="mr-2 lg:mr-5 pl-12  my-4">
            <div className="flex items-center my-2">
              <FaCheckCircle className="text-[110.1px] lg:text-[57.2px] text-[#8ddd8b] mx-3" />
              <p className="leading-8 text-[18px]">
                کشف کنید{" "}
                <span className="text-[#0a2441] underline font-bold">
                  سم شماره #1
                </span>{" "}
                چه چیزی بیشترین تأثیر گذاری را در موفقیت مالی شما دارد.
              </p>
            </div>

            <div className="flex items-center  my-2">
              <FaCheckCircle className="text-[142.3px] lg:text-[79px] text-[#8ddd8b] mx-3" />
              <p className="leading-8 text-[18px]">
                <span className="underline font-bold text-[#0a2441]">
                  {" "}
                  ترفند و ارتباط مخفی
                </span>{" "}
                که می‌تونه قدرت خارق‌العاده بده ، را یاد بگیرید- اون 1 تغییر
                ساده را یاد بگیرید تا ایجادش کنید!
              </p>
            </div>

            <div className="flex items-center  my-2">
              <FaCheckCircle className="text-[137.5px] lg:text-[74px] text-[#8ddd8b] mx-3" />
              <p className="leading-8 text-[18px]">
                <span className="underline font-bold text-[#0a2441]">
                  قوانین طلایی
                </span>
                – یاد بگیرید چطور مهارت های پولساز را شناسایی کنید – تا هر کاری
                ۱۰ برابر سریعتر انجام بشه…
              </p>
            </div>

            <br />

            {/* End UL List Tag Text */}
          </div>
          <img
            src="https://www.arezooyemali.ir/root/css/lw/freebook/arrow.png"
            className="hidden lg:block lg:-mt-12 lg:mr-[70px]"
            alt="arrow"
          />
        </div>

        {/* Image Book */}
        <div className="pb-3 w-[100%] md:w-[30%] -m-20 lg:m-12">
          <div className="w-[370px] lg:scale-[1.80] lg:mt-20 lg:w-[350px]">
            {product && <img src={product.image} alt={product.title} />}
          </div>
        </div>
      </div>
      {/* Button Next Page */}
      <div className="flex justify-center mt-9 lg:-mt-14">
        <Modal />
      </div>
      {/* Button Next Page */}
    </div>
  );
};

export default Step1;
