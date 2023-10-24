import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Step1 from "./pages/Step1";
import Step3 from "./pages/Step3";
import Step4 from "./pages/step4";
import Step2 from "./pages/Step2";
import Step5AfterPay from "./pages/step5AfterPay";
import Step6AfterPay from "./pages/Step6AfterPay";
import Congratulations from "./pages/Congratulations";
import LoginAdmin from "./pages/LoginAdmin";
import TashakorDigital from "./pages/TashakorDigital";
import AdminPanel2 from "./pages/AdminPanel2";
import DashBorad from "./components/DashBorad";
import Products from "./components/Products";
import Movies from "./components/Movies";
import Information from "./components/Information";
import Congratulations2 from "./pages/Congratulations2";

const TokenContext = React.createContext();
function App() {
  // اینم برای ادمین پنل هست
  const [token, setToken] = useState(localStorage.getItem("token"));
  // این برای اینه که اگه ثبت انجام نشده بود و توکنی نداشت نتونه صفحه های بعد ثبت نام رو ببینه و اگه داشت بتونه ببینه
  const [isRegistered, setIsRegistered] = useState(true);
  // const [deleteToken, setDeleteToken] = useState(false)
  // const handleLogout = () => {
  //   // حذف توکن از localStorage
  //   localStorage.clear();
  //   // تغییر وضعیت
  //   setToken(null);
  // };
  return (
    <TokenContext.Provider value={token}>
      <Routes>
        <>
          <Route
            path="/login-admin"
            element={<LoginAdmin setToken={setToken} />}
          />

          {/* مسیرهای مرتبط با صفحه مدیریت */}
          <Route
            path="/admin-panel"
            element={
              token ? (
                <AdminPanel2 />
              ) : (
                // اگر توکن JWT نامعتبر باشد یا وجود نداشته باشد، به صفحه ورود هدایت می‌شویم
                <Navigate to="/login-admin" />
              )
            }
          >
            <Route index element={<Navigate to="dashborad" />} />
            <Route path="dashborad" element={<DashBorad />} />
            <Route path="products" element={<Products />} />
            <Route path="movies" element={<Movies />} />
            <Route path="information" element={<Information />} />
          </Route>
          {/* سایر مسیرها */}
          <Route path="/" element={<Step1 />} />
          <Route path="/step2" element={<Step2 />} />
          <Route path="/step3" element={<Step3 />} />
          <Route path="/tashakor-digital" element={<TashakorDigital />} />
          <Route
            path="/step4"
            element={<Step4 setIsRegistered={setIsRegistered} />}
          />

          {/* صفحه Step5AfterPay با دسترسی محدود */}
          <Route
            path="/step5afterpay"
            element={
              isRegistered ? <Step5AfterPay /> : <Navigate to="/step4" />
            }
          />

          {/* صفحه Step6AfterPay با دسترسی محدود */}
          <Route
            path="/step6afterpay"
            element={
              isRegistered ? <Step6AfterPay /> : <Navigate to="/step4" />
            }
          />

          {/* صفحه Congratulations با دسترسی محدود */}
          <Route
            path="/greeting/landing"
            element={
              isRegistered ? <Congratulations /> : <Navigate to="/step4" />
            }
          />
          {/* صفحه Congratulations با دسترسی محدود */}
          <Route
            path="greeting/Learn/"
            element={
              isRegistered ? <Congratulations2 /> : <Navigate to="/step4" />
            }
          />
          <Route path="*" element={<Step1 />} />

          {/* این کد های کامنت شده پایین چیز خاصی نیستن */}
          {/*<Route path="/admin-panel2" element={<AdminPanel2 />}>
          <Route index element={<Navigate to="dashborad" />} />
          <Route path="dashborad" element={<DashBorad />} />
          <Route path="products" element={<Products />} />
          <Route path="movies" element={<Movies />} />
          <Route path="information" element={<Information />} />
        </Route> */}
        </>
      </Routes>
    </TokenContext.Provider>
  );
}

export default App;
