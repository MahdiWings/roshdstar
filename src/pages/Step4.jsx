import VideoPlayer from "../components/VideoPlayer";
import RegistrationForm from "../components/RegistrationForm";
import axios from "axios";
import { useEffect, useState } from "react";

const Step4 = () => {
  document.title = "ثبت نام - مرحله چهارم";

  const [video3, setVideo3] = useState("");

  useEffect(() => {
    axios
      .get("https://roshdstar.onrender.com/api/pages/3")
      .then((res) => {
        setVideo3(res.data.video);
      })
      .catch((err) => {
        console.error("error handling", err);
      });
  }, []);
  return (
    <>
      <div className=" w-[98vw] h-screen overflow-hidden">
        <div className="bg-cover w-screen h-screen bg-no-repeat fixed flex justify-center items-center bg-[#010101]"></div>
        <div className="absolute top-0 left-0 flex-col  flex w-full h-full items-center">
          <div className="w-full h-auto md:w-[100%]">
            <div className="">
              <div className="flex gap-8 flex-col  md:flex-row-reverse m-3 lg:mx-16">
                {/* video player */}
                <div className="w-full h-full md:w-[86%] outline outline-black outline-8 ">
                  {video3 && (
                    <video
                      controls
                      controlsList="nodownload"
                      disablePictureInPicture
                      id="videoP"
                      className="w-full"
                    >
                      <source src={video3} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
                {/* End video player */}

                {/* Register Form */}
                <RegistrationForm />
                {/* End Register Form  */}
              </div>

              {/* Start Main Text */}
              <div className="mt-8 px-5 lg:px-52 py-10  w-full bg-white leading-8">
                <p>
                  خب بچه ها من سعی کردم کسب وکارم رو 13 سال پیش راه اندازی بکنم
                  و تو این مسیر خیلی دردسرکشیدم و خیلی بالا پایین داشتم و مهم
                  نبود که چقدر تلاش میکنم و مهم نبود چی رو دارم امتحان میکنم
                  اصلا” کار نمیکرد…
                </p>
                <span className="block py-2"></span>
                <p>
                  بعد یک سیستم رو پیدا کردم که توی این کتاب نوشتمش اسمش جعبه
                  سیاه پوله و میخوام یک نسخه دیجیتالی از اون رو بهتون بدم تنها
                  کارتون اینکه اطلاعاتتون رو بهم بدید و میخوام بهتون بگم که توی
                  این کتاب چیه .
                </p>
                <span className="block py-3"></span>

                <p>
                  وقتی که اولین کارم رو استارت زدم هیچ سیستمی در کار نبود هیچ
                  راهی نبود که بشه رفت و شروع به ساخت کسب و کار کرد
                </p>
                <span className="block py-3"></span>
                <p>
                  هیچ قدمی بر ای دنبال کردن نداشت بیشتر از یک دهه داره از اون
                  میگذره و من درگیر بودم چون یک مسیر مشخصی نداشتم ولی یک مسیر رو
                  برای شما تو اینحا گفتم دقیقا” توی همین کتاب، من تو بیشتر از 30
                  میلیارد فروش محصول و خدمات مشارکت داشتم همشم بخاطر سیستمی که
                  تو این کتاب آوردم.
                </p>
                <span className="block py-3"></span>

                <p>
                  چیزیکه تو این کتاب هست توسط صدها دانش پذیرای من بارها تست شده
                  میخوام این رو داشته باشین و میخوام یک نسخه دیجیتالیش رو بهتون
                  بدم تنها کاری که لازمه انجام بدید اینه که یک هزینه کوچیک رو
                  بپردازین.
                </p>
                <span className="block py-3"></span>
                <p>
                  وقتی این کتاب رو مینوشتم یک هدف داشتم هدف من این بود که چیزی
                  بسازم تا شما براساس اون اقدام کنید
                </p>
                <span className="block py-3"></span>
                <p>
                  پس اینجا به شما این یاد میدم میخوام به شما این حقیقت رو
                  یادآوری کنم که شما هم میتونید یک بخشی کوچک از یک بازار بزرگ رو
                  تصاحب کنید و تبدیل به یک کسب و کار پولسازش کنید دوباره میگم
                  این فرصت برای شماست یک نسخه از این کتاب بگیرید میخوام بهتون
                  بگم من اکبر شیرزادی میخوام با این کتاب درگیر بشید
                </p>
                <span className="block py-3"></span>

                <h3 className="text-center text-2xl md:text-3xl text-[#770606] font-bold mt-8">
                  جعبه سیاه پول خودتون رو استارت بزنید و
                </h3>
                <h3 className="text-center text-2xl md:text-3xl text-[#770606] font-bold mt-3">
                  کنترل آینده عالی خودتون رو بدست بگیرید
                </h3>
                <span className="block py-3"></span>
                <p>
                  از سیستمی استفاده کنید که من و صدها دانشپذیر و خیلی از افراد
                  در سرتاسر دنیا کمک کرده تا کسب وکارشون رو بسازند کی میدونه
                  شاید شما هم پیشرفت عظیمی کردید من اکبر شیرزادی شما رو دعوت به
                  خوندن این کتاب میکنم یک نسخه دیجیتالی از این کتاب بگیرید
                </p>
                <span className="block py-3"></span>
                <p>
                  تنها کافیه یک هزینه ناچیز بدید لینک هم پایین هم بالای این
                  ویدیو هستش روش کلیک کنید
                </p>
                <span className="block py-3"></span>
                <p>
                  یک نسخه این کتاب رو براتون میفرستم در ضمن یک هدیه عالی براتون
                  در نظر گرفتم برای اونا هم لازم نیست حتی صبرکنید تا به خونتون
                  برسه چون یک دسترسی آنلاین رایگان رو بمحض درخواست این کتاب
                  بهتون میدم و این کار فقط 30 ثانیه بیشتر طول نمیکشه پس روی لینک
                  کلیک کنید و به اون صفحه برید یک پول کم برای دسترسی میدید و یک
                  نسخه دیجیتال از این کتاب جعبه سیاه پول رو میگیرید.
                </p>
                <span className="block py-5"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step4;
