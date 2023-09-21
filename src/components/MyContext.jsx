import React, { createContext, useContext, useState } from 'react';

// ایجاد یک context
const MyContext = createContext();

// یک کاستوم هوک برای استفاده از مقادیر context ایجاد کنید
export function useMyContext() {
  return useContext(MyContext);
}

export function MyContextProvider({ children }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
// اینجا متغیر هامو مینویسم و بعد تو صفحه ای که میخوام ازش استفاده میکنم مثل کاری که در کامپوننت ثبت نام کردم
  return (
    <MyContext.Provider value={{ name, setName, email, setEmail, phoneNumber, setPhoneNumber }}>
      {children}
    </MyContext.Provider>
  );
}
