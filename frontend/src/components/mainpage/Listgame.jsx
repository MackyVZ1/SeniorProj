import React from "react";
import { useNavigate } from "react-router-dom";
import floristryLogo from "../../elements/floristryLogo.png"; // icon รูปเกม

export default function Listgame() {
  // ตัวแปรใช้ย้ายหน้าเว็บ
  const nav = useNavigate();

  return (
    <div className="font-['Kanit'] font-normal">
      <div className="bg-white w-full h-auto m-auto p-6 flex justify-center">
        {/* แถวที่แสดงเกมทั้งหมดที่มี */}
        <div className="bg-slate-50 rounded-2xl flex flex-col gap-8 p-6 my-24 w-full sm:py-12 md:w-5/6 lg:w-3/4 xl:w-2/3">
          {/* แถวเกม */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
            {/* การ์ดเกม */}
            <div>
              <button onClick={() => nav("/floristry")}>
                <img className="rounded-2xl w-36 h-36 mx-auto transition duration-150 hover:shadow-2xl hover:border-2" src={floristryLogo}/>
              </button>
              <h1 className="text-black text-lg mt-2">Floristry</h1>
            </div>
            <div>
              <button>
                <img className="rounded-2xl w-36 h-36 mx-auto transition duration-150 hover:shadow-2xl hover:border-2" src={floristryLogo}/>
              </button>
              <h1 className="text-black text-lg mt-2">Floristry</h1>
            </div>
            <div>
              <button>
                <img className="rounded-2xl w-36 h-36 mx-auto transition duration-150 hover:shadow-2xl hover:border-2" src={floristryLogo}/>
              </button>
              <h1 className="text-black text-lg mt-2">Floristry</h1>
            </div>
            <div>
              <button>
                <img className="rounded-2xl w-36 h-36 mx-auto transition duration-150 hover:shadow-2xl hover:border-2" src={floristryLogo}/>
              </button>
              <h1 className="text-black text-lg mt-2">Floristry</h1>
            </div>
            <div>
              <button>
                <img className="rounded-2xl w-36 h-36 mx-auto transition duration-150 hover:shadow-2xl hover:border-2" src={floristryLogo}/>
              </button>
              <h1 className="text-black text-lg mt-2">Floristry</h1>
            </div>
            <div>
              <button>
                <img className="rounded-2xl w-36 h-36 mx-auto transition duration-150 hover:shadow-2xl hover:border-2" src={floristryLogo}/>
              </button>
              <h1 className="text-black text-lg mt-2">Floristry</h1>
            </div>
            <div>
              <button>
                <img className="rounded-2xl w-36 h-36 mx-auto transition duration-150 hover:shadow-2xl hover:border-2" src={floristryLogo}/>
              </button>
              <h1 className="text-black text-lg mt-2">Floristry</h1>
            </div>
            <div>
              <button>
                <img className="rounded-2xl w-36 h-36 mx-auto transition duration-150 hover:shadow-2xl hover:border-2" src={floristryLogo}/>
              </button>
              <h1 className="text-black text-lg mt-2">Floristry</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
