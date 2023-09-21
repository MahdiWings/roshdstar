import React, { useEffect, useState } from "react";
import { HiUserGroup } from "react-icons/hi2";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { BsCurrencyDollar } from "react-icons/bs";
import Users from "./Users";
import axios from "axios";

const DashBorad = () => {
  const [totalUser, setTotalUser] = useState(0);
  const [purchases, setPurchases] = useState([]); // متغیر جدید برای ذخیره خریدها
  const [income, setIncome] = useState(0); // متغیر جدید برای ذخیره درآمد
  const [token, setToken] = useState("");

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://roshdstar.onrender.com/api/user",
          {
            headers: {
              authorization: `Bearer ${storedToken}`,
            },
          }
        );
        console.log(response);
        setTotalUser(response.data.length);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    // دریافت تعداد خریدها
    const fetchPurchases = async () => {
      try {
        const response = await axios.get(
          "https://roshdstar.onrender.com/api/payment",
          {
            headers: {
              authorization: `Bearer ${storedToken}`,
            },
          }
        );
        // محاسبه تعداد خریدها
        const totalPurchases = response.data.length;
        setPurchases(totalPurchases);

        // محاسبه مجموع درآمد
        const totalIncome = response.data.reduce(
          (acc, purchase) => acc + purchase.amount,
          0
        );
        setIncome(totalIncome);
      } catch (error) {
        console.error("Error fetching purchases:", error);
      }
    };

    fetchUsers();
    fetchPurchases();
    // fetchSalesCount();
  }, []);

  return (
    <div className="mx-auto lg:mx-0 lg:flex lg:flex-col w-[83vw] h-screen">
      <div className="flex justify-around flex-wrap w-[80%] mt-10 gap-8 mx-auto">
        <div className="w-60 h-44 rounded-xl flex justify-evenly flex-col items-center shadow-sm bg-blue-700">
          <div className="flex items-center justify-between h-[40%] w-[60%]">
            <HiUserGroup className="text-6xl bg-gray-50 rounded-full p-1" />
            <p className="text-white font-bold">
              تعداد
              <br />
              مشتریان
            </p>
          </div>
          <p className="text-3xl font-bold text-white">
            {totalUser.toLocaleString("fa-IR")}
          </p>
        </div>
        <div className="w-60 h-44 rounded-xl flex justify-evenly flex-col items-center shadow-sm bg-blue-700">
          <div className="flex items-center justify-between h-[40%] w-[60%]">
            <LiaShoppingCartSolid className="text-6xl bg-gray-50 rounded-full p-1" />
            <p className="text-white font-bold">
              تعداد
              <br />
              فروش
            </p>
          </div>
          <p className="text-3xl font-bold text-white">
            {purchases.toLocaleString("fa-IR")}
          </p>
        </div>
        <div className="w-60 h-44 rounded-xl flex justify-evenly flex-col items-center shadow-sm bg-blue-700">
          <div className="flex items-center justify-between h-[40%] w-[60%]">
            <BsCurrencyDollar className="text-6xl bg-gray-50 rounded-full p-1" />
            <p className="text-white font-bold">
              حجم
              <br />
              فروش
            </p>
          </div>
          <p className="text-3xl font-bold text-white">
            {income.toLocaleString("fa-IR")}
            <span className="text-xs pr-1.5">تومان</span>
          </p>
        </div>
      </div>
      <div>
        <Users />
      </div>
    </div>
  );
};

export default DashBorad;
