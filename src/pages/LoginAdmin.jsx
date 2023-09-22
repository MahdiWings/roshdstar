import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginAdmin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleAdminLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://roshdstar.onrender.com/api/user/admin/login",
        {
          email: email,
          password: password,
        }
      );
      console.log(response);
      const { token } = response.data;

      // ذخیره توکن در localStorage یا در مکان مناسب دیگر
      localStorage.setItem("token", token);
      window.location.href = 'https://mahdiwings.github.io/roshdstar/#/admin-panel';
      console.log("Admin Login successful");
      console.log("Token:", token);
    } catch (err) {
      console.log(err.response.data)
      alert(err.response.data);
    }
  };

  return (
    <div>
      <div className="bg-[#0f0431] p-5  w-full h-screen">
        <div className="w-[99%] mx-auto mt-32 rounded-xl md:w-[35%] bg-white h-auto">
          <div className="px-5 py-10 flex flex-col justify-center items-center gap-10 ">
            <h2 className="bg-yellow-500 px-6 py-3 font-black text-[20px] md:text-xl rounded ">
              ورود به پنل مدیریت رشد استار
            </h2>
            <form
              onSubmit={handleAdminLogin}
              className="flex gap-5 flex-col justify-center items-center"
            >
              <div className="flex items-center gap-2">
                <label>نام کاربری</label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="نام کاربری خود را وارد کنید"
                  className="bg-gray-200 w-full md:w-60 placeholder:text-sm placeholder:text-right rounded-lg text-lg text-left px-2 py-2"
                />
              </div>
              <div className="flex items-center gap-5">
                <label>رمز عبور</label>
                <input
                  type="password"
                  placeholder="رمز خود را وارد کنید"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-200 w-full md:w-60 placeholder:text-sm placeholder:text-right rounded-lg text-lg text-left px-2 py-2"
                />
              </div>
              <button
                type="submit"
                className="bg-green-500 w-full py-2 rounded-lg text-white font-bold"
              >
                ورود
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginAdmin;
