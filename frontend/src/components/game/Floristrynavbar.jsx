import React from "react";

function Floristrynavbar() {
  return (
    <nav className="font-['Kanit'] font-normal bg-transparent">
      <div className="flex justify-end">
        <button className="border-2 rounded-xl border-black text-lg text-black p-2 m-4 transition duration-150 hover:bg-yellow-300 hover:text-white hover:border-yellow-300">
          ลงชื่อเข้าใช้ / สมัครบัญชี
        </button>
      </div>
    </nav>
  );
}

export default Floristrynavbar;
