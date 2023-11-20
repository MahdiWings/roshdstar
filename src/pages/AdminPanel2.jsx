import axios from "axios";
import { useEffect } from "react";
import { MdOutlineExitToApp } from "react-icons/md";
import {Routes, Route, useNavigate, Link, NavLink, Outlet} from "react-router-dom";

const AdminPanel2 = () => {
  const navigate = useNavigate()
  document.title = "ادمین پنل - رشد استار";
  useEffect(() => {
    const token = localStorage.getItem('token');
    const requireAuth = async () => {
      try {
        const response = await axios.get('https://startmali.runflare.run/api/user/isadmin', {
      headers: {
        authorization: `Bearer ${token}` // Include the token in the request headers
      }
      })
      // console.log('this is the response', response)
      if (!response.data.isAdmin) {
        navigate('/login-admin'); 
      }
        } catch (error) {
          console.error('Error checking admin status:', error)
          navigate('/login-admin');
        }
      }
    requireAuth()
  }, []);



  return (
    <div className=" lg:flex">
       {/* right Nav */}
       <div className="lg:w-[18vw] text-center lg:text-right bg-blue-800 h-screen rounded-b-[50px] pb-10 p-3">
        <div className="mx-auto bg-yellow-400 w-64 md:w-52 text-center rounded-xl mt-3 mb-5 py-4">
          <p className="text-2xl md:text-xl font-black ">
            پنل مدیریت رشد استار
          </p>
        </div>
        <div>
          <ul className="flex flex-col gap-8 p-2">
            <Link
            to="dashborad"
              className="text-white pl-10 pr-4 py-4 bg-blue-700 rounded-xl cursor-pointer shadow-lg "
            >
              داشبورد
            </Link>
            <NavLink to="products"
            
            // onClick={() => navigate("products")}
             className="text-white pl-10 pr-4 py-4 bg-blue-700 rounded-xl cursor-pointer shadow-lg ">
              محصولات
            </NavLink>
            <Link to="movies" className="text-white pl-10 pr-4 py-4 bg-blue-700 rounded-xl cursor-pointer shadow-lg ">
              فیلم ها
            </Link>
            <li onClick={() => navigate("information")} className="text-white pl-10 pr-4 py-4 bg-blue-700 rounded-xl cursor-pointer shadow-lg ">
              اطلاعات کاربری
            </li>
          </ul>
        </div>
        {/* Icons */}
        <div>
          <abbr title="خروج">
            <MdOutlineExitToApp
              onClick={() => {
                localStorage.removeItem('token');
                navigate("/")
              }}
              className="text-[45px] text-center text-yellow-400 mt-10 cursor-pointer block mx-auto"
            />
          </abbr>
        </div>
      </div>
      <Outlet />
      {/* <DashBorad /> */}
      {/* <Information /> */}
    </div>
  );
};

export default AdminPanel2;