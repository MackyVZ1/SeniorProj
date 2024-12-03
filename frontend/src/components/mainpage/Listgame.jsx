import React from "react";
import { useNavigate } from "react-router-dom";
import floristryLogo from "../../elements/floristryLogo.png"; // icon รูปเกม

export default function Listgame() {
  // ตัวแปรใช้ย้ายหน้าเว็บ
  const nav = useNavigate();

  return (
    <div className="font-['Kanit'] font-normal">
      {/**แถวที่แสดงเกมทั้งหมดที่มี */}
      <div className="border/50 border-black rounded-2xl bg-slate-50 shadow-md m-auto p-auto my-12">
        {/**แถวเกมที่ 1 */}
        <div className="border-2 p-6">

        </div>
      </div>
    </div>
  );
}
