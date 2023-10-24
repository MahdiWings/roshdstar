import axios from "axios";
import React, { useState } from "react";

const Information = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChangePassword = async (e) => {
    e.preventDefault()
    try {
      const token = localStorage.getItem('token')
      // اعتبارسنجی رمز عبور جدید و تکرار آن
      if (newPassword !== confirmPassword) {
        alert("رمز عبور جدید و تکرار آن باید یکسان باشند.");
        return;
      }

      // ارسال درخواست به سرور برای تغییر رمز عبور
      const response = axios
      .patch(`https://api.startemali.ir/api/user/update/64f9d77746542d2d998654e3`, {
        password: newPassword,
      }, {
        headers: {
          authorization: `Bearer ${token}`
        }
      })
      // بررسی پاسخ سرور
      if (response) {
        alert("رمز عبور با موفقیت تغییر یافت.");
      } else {
        alert("مشکلی در تغییر رمز عبور رخ داده است.");
      }
    } catch (error) {
      console.log(error)
      console.error("خطا در تغییر رمز عبور:", error);
      alert("مشکلی در تغییر رمز عبور رخ داده است.");
    }
  };
  return (
    <div>
      <div className="mx-auto lg:mx-0 lg:flex lg:flex-col w-[80vw] h-screen">
        <div className="flex justify-around flex-wrap w-[100%] mt-10 gap-8 mx-auto">
          {/* Photos */}
          <div>
            <h2 className="font-bold text-xl">تغییر رمز عبور</h2>
            <div className="w-[120px] h-0.5 mt-1 bg-black"></div>
            <div className="my-10 bg-slate-50 shadow-xl h-auto w-[100%] lg:w-[90%] p-8 rounded-xl">
              <div className="flex justify-between gap-6 pb-5 md:gap-x-4 md:gap-y-8 items-center  ">
                {/* Second Product */}
                <div className="mx-2 my-2 w-[50vw] ">
                  <div className="cursor-pointer py-4 border bg-[#1E40AF] mt-3 text-white font-bold border-gray-400 p-2 rounded-lg">
                    تغییر رمز عبور پنل{" "}
                  </div>
                  <form
                    onSubmit={handleChangePassword}
                    className="mt-2 bg-[#ddeaff] p-2 rounded-lg"
                  >
                    <div className="flex items-center mb-5 justify-between lg:pl-8 mt-2">
                      <label
                        htmlFor="newPassword"
                        className="lg:text-base w-[20%] font-semibold pl-2"
                      >
                        رمز جدید{" "}
                      </label>
                      <input
                        type="password"
                        name="newPassword"
                        id="newPassword"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                        placeholder="رمز مورد نظر خود را وارد کنید"
                        className="border w-[100%] placeholder:text-sm py-3 placeholder:text-right border-gray-200 text-center  p-2 rounded-lg"
                      />
                    </div>
                    <div className="flex items-center justify-between lg:pl-8 mt-2">
                      <label
                        htmlFor="confirmPassword"
                        className="lg:text-base w-[20%] font-semibold pl-2"
                      >
                        تکرار رمز{" "}
                      </label>
                      <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        placeholder="رمز را دوباره وارد کنید"
                        className="border w-[100%] placeholder:text-sm py-3 placeholder:text-right border-gray-200 text-center  p-2 rounded-lg"
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-green-500 px-6 py-3 rounded-lg text-center mt-6 text-white"
                    >
                      تغییر رمز
                    </button>
                  </form>
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

export default Information;
