import React from "react";
import { MdOutlineExitToApp } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const NavbarRight = () => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    // حذف همه داده‌های ذخیره شده در localStorage
    localStorage.clear();
    // انتقال به صفحه ورود
    navigate("/");
  };
  
  return (
    <div>
      {/* right Nav */}
      <div className="lg:w-[18vw] text-center lg:text-right bg-blue-800 h-screen rounded-b-[50px] pb-10 p-3">
        <div className="mx-auto bg-yellow-400 w-64 md:w-52 text-center rounded-xl mt-3 mb-5 py-4">
          <p className="text-2xl md:text-xl font-black ">
            پنل مدیریت رشد استار
          </p>
        </div>
        <div>
          <ul className="flex flex-col gap-8 p-2">
            <li
              onClick={() => navigate("/admin-panel2")}
              className="text-white pl-10 pr-4 py-4 bg-blue-700 rounded-xl cursor-pointer shadow-lg "
            >
              داشبورد
            </li>
            <li
              onClick={() => navigate("products")}
              className="text-white pl-10 pr-4 py-4 bg-blue-700 rounded-xl cursor-pointer shadow-lg "
            >
              محصولات
            </li>
            <li
              onClick={() => navigate("movies")}
              className="text-white pl-10 pr-4 py-4 bg-blue-700 rounded-xl cursor-pointer shadow-lg "
            >
              فیلم ها
            </li>
            <li
              onClick={() => navigate("/information")}
              className="text-white pl-10 pr-4 py-4 bg-blue-700 rounded-xl cursor-pointer shadow-lg "
            >
              اطلاعات کاربری
            </li>
          </ul>
        </div>
        {/* Icons */}
        <div>
          <abbr title="خروج">
            <MdOutlineExitToApp
              onClick={handleLogoutClick}
              className="text-[45px] text-center text-yellow-400 mt-10 cursor-pointer block mx-auto"
            />
          </abbr>
        </div>
      </div>
    </div>
  );
};

export default NavbarRight;
