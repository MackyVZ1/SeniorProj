import { React, useState, useEffect } from "react";
import { X } from "lucide-react"; // import icon กากบาท
import Googlelogin from "./Googlelogin";

export default function Loginpopup({ onOpen, onClose }) {
  // เก็บสถานะการกดเปิดจากการที่ถูกส่งผ่าน onOpen
  const [isPress, setisPress] = useState(onOpen);

  // เมื่อกดปิด
  const clickClose = () => {
    setisPress(false);
    onClose();
  };

  return (
    <>
    {/**เมื่อหน้าต่างยังเปิดอยู่ */}
      {isPress && (
        <div className="font-['Kanit'] font-normal">
          <div className="fixed m-0 bg-slate-200/50 flex justify-center items-center top-0 right-0 left-0 bottom-0">
            <div>
              <button className="float-end m-auto p-3">
                <X onClick={clickClose} className="w-6 h-6 items-end" />
              </button>
              <form className="border rounded-xl bg-white  p-24  justify-center items-center shadow-inner shadow-slate-300">
                <p className="text-xl font-medium text-center my-5">
                  ลงชื่อเข้าใช้ / สมัครบัญชี
                </p>
                <Googlelogin onPopup={onClose} />
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
