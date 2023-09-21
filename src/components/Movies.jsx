import axios from "axios";
import React, { useState } from "react";

const Movies = () => {
  const [isOpenMovie1, setIsOpenMovie1] = useState(false);
  const [isOpenMovie2, setIsOpenMovie2] = useState(false);
  const [isOpenMovie3, setIsOpenMovie3] = useState(false);
  const [isOpenMovie4, setIsOpenMovie4] = useState(false);
  const [isOpenMovie5, setIsOpenMovie5] = useState(false);
  const [isOpenMovie6, setIsOpenMovie6] = useState(false);
  const [isOpenMovie7, setIsOpenMovie7] = useState(false);
  const [isOpenMovie8, setIsOpenMovie8] = useState(false);
  const toggleDropDownMovie1 = () => {
    setIsOpenMovie1(!isOpenMovie1);
  };
  const toggleDropDownMovie2 = () => {
    setIsOpenMovie2(!isOpenMovie2);
  };
  const toggleDropDownMovie3 = () => {
    setIsOpenMovie3(!isOpenMovie3);
  };
  const toggleDropDownMovie4 = () => {
    setIsOpenMovie4(!isOpenMovie4);
  };
  const toggleDropDownMovie5 = () => {
    setIsOpenMovie5(!isOpenMovie5);
  };
  const toggleDropDownMovie6 = () => {
    setIsOpenMovie6(!isOpenMovie6);
  };
  const toggleDropDownMovie7 = () => {
    setIsOpenMovie7(!isOpenMovie7);
  };
  const toggleDropDownMovie8 = () => {
    setIsOpenMovie8(!isOpenMovie8);
  };

  const [MovieUrl1, setMovieUrl1] = useState("");
  const [MovieUrl2, setMovieUrl2] = useState("");
  const [MovieUrl3, setMovieUrl3] = useState("");
  const [MovieUrl4, setMovieUrl4] = useState("");
  const [MovieUrl5, setMovieUrl5] = useState("");
  const [MovieUrl6, setMovieUrl6] = useState("");
  const [MovieUrl7, setMovieUrl7] = useState("");
  const [MovieUrl8, setMovieUrl8] = useState("");

  const handleMovieUrl1Change = (e) => {
    setMovieUrl1(e.target.value);
  };

  const handleMovieUrl2Change = (e) => {
    setMovieUrl2(e.target.value);
  };

  const handleUrl3Change = (e) => {
    setMovieUrl3(e.target.value);
  };
  const handleUrl4Change = (e) => {
    setMovieUrl4(e.target.value);
  };
  const handleUrl5Change = (e) => {
    setMovieUrl5(e.target.value);
  };
  const handleUrl6Change = (e) => {
    setMovieUrl6(e.target.value);
  };
  const handleUrl7Change = (e) => {
    setMovieUrl7(e.target.value);
  };
  const handleUrl8Change = (e) => {
    setMovieUrl8(e.target.value);
  };

  const handleUpdateUrl1 = async () => {
    try {
      // ارسال درخواست به بک‌اند برای آپدیت URL اول
      const response = await axios.patch(
        "https://roshdstar.onrender.com/api/pages/1",
        {
          video: MovieUrl1,
        }
      );

      // دریافت پیام یا وضعیت از پاسخ بک‌اند
      alert(" محصول با موفقیت به روزرسانی شد");
    } catch (error) {
      alert("خطا در آپدیت URL1:", error);
    }
  };

  const handleUpdateUrl2 = async () => {
    try {
      // ارسال درخواست به بک‌اند برای آپدیت URL دوم
      const response = await axios.patch(
        "https://roshdstar.onrender.com/api/pages/2",
        {
          video: MovieUrl2,
        }
      );

      // دریافت پیام یا وضعیت از پاسخ بک‌اند
      alert(" محصول با موفقیت به روزرسانی شد");
    } catch (error) {
      alert("خطا در آپدیت URL2:", error);
    }
  };

  const handleUpdateUrl3 = async () => {
    try {
      // ارسال درخواست به بک‌اند برای آپدیت URL سوم
      const response = await axios.patch(
        "https://roshdstar.onrender.com/api/pages/3",
        {
          video: MovieUrl3,
        }
      );

      // دریافت پیام یا وضعیت از پاسخ بک‌اند
      alert(" محصول با موفقیت به روزرسانی شد");
    } catch (error) {
      alert("خطا در آپدیت URL3:", error);
    }
  };
  const handleUpdateUrl4 = async () => {
    try {
      // ارسال درخواست به بک‌اند برای آپدیت URL سوم
      const response = await axios.patch(
        "https://roshdstar.onrender.com/api/pages/4",
        {
          video: MovieUrl4,
        }
      );

      // دریافت پیام یا وضعیت از پاسخ بک‌اند
      alert(" محصول با موفقیت به روزرسانی شد");
    } catch (error) {
      alert("خطا در آپدیت URL4:", error);
    }
  };
  const handleUpdateUrl5 = async () => {
    try {
      // ارسال درخواست به بک‌اند برای آپدیت URL سوم
      const response = await axios.patch(
        "https://roshdstar.onrender.com/api/pages/5",
        {
          video: MovieUrl5,
        }
      );

      // دریافت پیام یا وضعیت از پاسخ بک‌اند
      alert(" محصول با موفقیت به روزرسانی شد");
    } catch (error) {
      alert("خطا در آپدیت URL5:", error);
    }
  };
  const handleUpdateUrl6 = async () => {
    try {
      // ارسال درخواست به بک‌اند برای آپدیت URL سوم
      const response = await axios.patch(
        "https://roshdstar.onrender.com/api/pages/6",
        {
          video: MovieUrl6,
        }
      );

      // دریافت پیام یا وضعیت از پاسخ بک‌اند
      alert(" محصول با موفقیت به روزرسانی شد");
    } catch (error) {
      alert("خطا در آپدیت URL6:", error);
    }
  };
  const handleUpdateUrl7 = async () => {
    try {
      // ارسال درخواست به بک‌اند برای آپدیت URL سوم
      const response = await axios.patch(
        "https://roshdstar.onrender.com/api/pages/7",
        {
          video: MovieUrl7,
        }
      );

      // دریافت پیام یا وضعیت از پاسخ بک‌اند
      alert(" محصول با موفقیت به روزرسانی شد");
    } catch (error) {
      alert("خطا در آپدیت URL7:", error);
    }
  };
  const handleUpdateUrl8 = async () => {
    try {
      // ارسال درخواست به بک‌اند برای آپدیت URL سوم
      const response = await axios.patch(
        "https://roshdstar.onrender.com/api/pages/8",
        {
          video: MovieUrl8,
        }
      );

      // دریافت پیام یا وضعیت از پاسخ بک‌اند
      alert(" محصول با موفقیت به روزرسانی شد");
    } catch (error) {
      alert("خطا در آپدیت URL8:", error);
    }
  };
  return (
    <div>
      <div className="mx-auto lg:mx-0 lg:flex lg:flex-col w-[80vw] h-screen">
        <div className="flex justify-around flex-wrap w-[80%] mt-10 gap-8 mx-auto">
          {/* Photos */}
          <div>
            <h2 className="font-bold text-xl">فیلم صفحه ها</h2>
            <div className="w-[120px] h-0.5 mt-1 bg-black"></div>
            <div className="my-10 bg-slate-50 shadow-xl h-auto w-[100%] lg:w-[90%] p-8 rounded-xl">
              <div className="flex flex-wrap justify-between gap-6 pb-5 md:gap-x-4 md:gap-y-8 items-center  ">
                {/* Second Product */}
                <div className="mx-2 my-2 w-full ">
                  <label className="font-semibold">فیلم اول :</label>
                  <div
                    onClick={toggleDropDownMovie1}
                    className="cursor-pointer py-4 border bg-[#1E40AF] mt-3 text-white font-bold border-gray-400 p-2 rounded-lg"
                  >
                    برای تغییرات اینجا کلیک کنید{" "}
                  </div>
                  {isOpenMovie1 && (
                    <div className="mt-2 bg-[#ddeaff] p-2 rounded-lg">
                      <div className="flex items-center justify-between lg:pl-8 mt-2">
                        <label className="lg:text-base font-semibold pl-2">
                          فیلم صفحات:
                        </label>
                        <input
                          type="text"
                          placeholder="Url مورد نظر را وارد کنید"
                          value={MovieUrl1}
                          onChange={handleMovieUrl1Change}
                          className="border w-[85%] placeholder:text-sm  placeholder:text-right border-gray-200 text-left  p-2 rounded-lg"
                        />
                      </div>
                      <button
                        onClick={handleUpdateUrl1}
                        className="bg-green-500 px-6 py-2 rounded-lg text-center mt-3 text-white"
                      >
                        ذخیره
                      </button>
                    </div>
                  )}
                </div>
                <div className="mx-2 my-2 w-full ">
                  <label className="font-semibold">فیلم دوم :</label>
                  <div
                    onClick={toggleDropDownMovie2}
                    className="cursor-pointer py-4 border bg-[#1E40AF] mt-3 text-white font-bold border-gray-400 p-2 rounded-lg"
                  >
                    برای تغییرات اینجا کلیک کنید{" "}
                  </div>
                  {isOpenMovie2 && (
                    <div className="mt-2 bg-[#ddeaff] p-2 rounded-lg">
                      <div className="flex items-center justify-between lg:pl-8 mt-2">
                        <label className="lg:text-base font-semibold pl-2">
                          فیلم صفحات:
                        </label>
                        <input
                          type="text"
                          placeholder="Url مورد نظر را وارد کنید"
                          value={MovieUrl2}
                          onChange={handleMovieUrl2Change}
                          className="border w-[85%] placeholder:text-sm  placeholder:text-right border-gray-200 text-left  p-2 rounded-lg"
                        />
                      </div>
                      <button
                        onClick={handleUpdateUrl2}
                        className="bg-green-500 px-6 py-2 rounded-lg text-center mt-3 text-white"
                      >
                        ذخیره
                      </button>
                    </div>
                  )}
                </div>

                <div className="mx-2 my-2 w-full ">
                  <label className="font-semibold">فیلم سوم :</label>
                  <div
                    onClick={toggleDropDownMovie3}
                    className="cursor-pointer py-4 border bg-[#1E40AF] mt-3 text-white font-bold border-gray-400 p-2 rounded-lg"
                  >
                    برای تغییرات اینجا کلیک کنید{" "}
                  </div>
                  {isOpenMovie3 && (
                    <div className="mt-2 bg-[#ddeaff] p-2 rounded-lg">
                      <div className="flex items-center justify-between lg:pl-8 mt-2">
                        <label className="lg:text-base font-semibold pl-2">
                          فیلم صفحات:
                        </label>
                        <input
                          type="text"
                          placeholder="Url مورد نظر را وارد کنید"
                          value={MovieUrl3}
                          onChange={handleUrl3Change}
                          className="border w-[85%] placeholder:text-sm  placeholder:text-right border-gray-200 text-left  p-2 rounded-lg"
                        />
                      </div>
                      <button
                        onClick={handleUpdateUrl3}
                        className="bg-green-500 px-6 py-2 rounded-lg text-center mt-3 text-white"
                      >
                        ذخیره
                      </button>
                    </div>
                  )}
                </div>

                <div className="mx-2 my-2 w-full ">
                  <label className="font-semibold">فیلم چهارم :</label>
                  <div
                    onClick={toggleDropDownMovie4}
                    className="cursor-pointer py-4 border bg-[#1E40AF] mt-3 text-white font-bold border-gray-400 p-2 rounded-lg"
                  >
                    برای تغییرات اینجا کلیک کنید{" "}
                  </div>
                  {isOpenMovie4 && (
                    <div className="mt-2 bg-[#ddeaff] p-2 rounded-lg">
                      <div className="flex items-center justify-between lg:pl-8 mt-2">
                        <label className="lg:text-base font-semibold pl-2">
                          فیلم صفحات:
                        </label>
                        <input
                          type="text"
                          placeholder="Url مورد نظر را وارد کنید"
                          value={MovieUrl4}
                          onChange={handleUrl4Change}
                          className="border w-[85%] placeholder:text-sm  placeholder:text-right border-gray-200 text-left  p-2 rounded-lg"
                        />
                      </div>
                      <button
                        onClick={handleUpdateUrl4}
                        className="bg-green-500 px-6 py-2 rounded-lg text-center mt-3 text-white"
                      >
                        ذخیره
                      </button>
                    </div>
                  )}
                </div>

                <div className="mx-2 my-2 w-full ">
                  <label className="font-semibold">فیلم پنجم :</label>
                  <div
                    onClick={toggleDropDownMovie5}
                    className="cursor-pointer py-4 border bg-[#1E40AF] mt-3 text-white font-bold border-gray-400 p-2 rounded-lg"
                  >
                    برای تغییرات اینجا کلیک کنید{" "}
                  </div>
                  {isOpenMovie5 && (
                    <div className="mt-2 bg-[#ddeaff] p-2 rounded-lg">
                      <div className="flex items-center justify-between lg:pl-8 mt-2">
                        <label className="lg:text-base font-semibold pl-2">
                          فیلم صفحات:
                        </label>
                        <input
                          type="text"
                          placeholder="Url مورد نظر را وارد کنید"
                          value={MovieUrl5}
                          onChange={handleUrl5Change}
                          className="border w-[85%] placeholder:text-sm  placeholder:text-right border-gray-200 text-left  p-2 rounded-lg"
                        />
                      </div>
                      <button
                        onClick={handleUpdateUrl5}
                        className="bg-green-500 px-6 py-2 rounded-lg text-center mt-3 text-white"
                      >
                        ذخیره
                      </button>
                    </div>
                  )}
                </div>

                <div className="mx-2 my-2 w-full ">
                  <label className="font-semibold">فیلم ششم :</label>
                  <div
                    onClick={toggleDropDownMovie6}
                    className="cursor-pointer py-4 border bg-[#1E40AF] mt-3 text-white font-bold border-gray-400 p-2 rounded-lg"
                  >
                    برای تغییرات اینجا کلیک کنید{" "}
                  </div>
                  {isOpenMovie6 && (
                    <div className="mt-2 bg-[#ddeaff] p-2 rounded-lg">
                      <div className="flex items-center justify-between lg:pl-8 mt-2">
                        <label className="lg:text-base font-semibold pl-2">
                          فیلم صفحات:
                        </label>
                        <input
                          type="text"
                          placeholder="Url مورد نظر را وارد کنید"
                          value={MovieUrl6}
                          onChange={handleUrl6Change}
                          className="border w-[85%] placeholder:text-sm  placeholder:text-right border-gray-200 text-left  p-2 rounded-lg"
                        />
                      </div>
                      <button
                        onClick={handleUpdateUrl6}
                        className="bg-green-500 px-6 py-2 rounded-lg text-center mt-3 text-white"
                      >
                        ذخیره
                      </button>
                    </div>
                  )}
                </div>

                <div className="mx-2 my-2 w-full ">
                  <label className="font-semibold">فیلم هفتم :</label>
                  <div
                    onClick={toggleDropDownMovie7}
                    className="cursor-pointer py-4 border bg-[#1E40AF] mt-3 text-white font-bold border-gray-400 p-2 rounded-lg"
                  >
                    برای تغییرات اینجا کلیک کنید{" "}
                  </div>
                  {isOpenMovie7 && (
                    <div className="mt-2 bg-[#ddeaff] p-2 rounded-lg">
                      <div className="flex items-center justify-between lg:pl-8 mt-2">
                        <label className="lg:text-base font-semibold pl-2">
                          فیلم صفحات:
                        </label>
                        <input
                          type="text"
                          placeholder="Url مورد نظر را وارد کنید"
                          value={MovieUrl7}
                          onChange={handleUrl7Change}
                          className="border w-[85%] placeholder:text-sm  placeholder:text-right border-gray-200 text-left  p-2 rounded-lg"
                        />
                      </div>
                      <button
                        onClick={handleUpdateUrl7}
                        className="bg-green-500 px-6 py-2 rounded-lg text-center mt-3 text-white"
                      >
                        ذخیره
                      </button>
                    </div>
                  )}
                </div>

                <div className="mx-2 my-2 w-full ">
                  <label className="font-semibold">فیلم هشتم :</label>
                  <div
                    onClick={toggleDropDownMovie8}
                    className="cursor-pointer py-4 border bg-[#1E40AF] mt-3 text-white font-bold border-gray-400 p-2 rounded-lg"
                  >
                    برای تغییرات اینجا کلیک کنید{" "}
                  </div>
                  {isOpenMovie8 && (
                    <div className="mt-2 bg-[#ddeaff] p-2 rounded-lg">
                      <div className="flex items-center justify-between lg:pl-8 mt-2">
                        <label className="lg:text-base font-semibold pl-2">
                          فیلم صفحات:
                        </label>
                        <input
                          type="text"
                          placeholder="Url مورد نظر را وارد کنید"
                          value={MovieUrl8}
                          onChange={handleUrl8Change}
                          className="border w-[85%] placeholder:text-sm  placeholder:text-right border-gray-200 text-left  p-2 rounded-lg"
                        />
                      </div>
                      <button
                        onClick={handleUpdateUrl8}
                        className="bg-green-500 px-6 py-2 rounded-lg text-center mt-3 text-white"
                      >
                        ذخیره
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Photo Pages */}
    </div>
  );
};

export default Movies;
