import React from "react";
import { useNavigate } from "react-router-dom";
import floristryLogo from "../elements/floristryLogo.png"; // icon รูปเกม

export default function Listgame() {
  // ตัวแปรใช้ย้ายหน้าเว็บ
  const nav = useNavigate();

  return (
    <div className="font-['Kanit'] font-normal">
      {/**แถวที่แสดงเกมทั้งหมดที่มี */}
      <div className="border/50 border-black rounded-2xl bg-slate-50 shadow-md ml-48 mr-48 my-12 p-10">
        {/**แถวเกมแถวที่ 1 */}
        <div className="flex justify-between text-center my-4">
          <div className="overflow-hidden">
            <button>
              <img
                onClick={() => {
                  nav("/floristry");
                }}
                src={floristryLogo}
                className="rounded-xl m-0 object-cover w-48 hover:shadow-md hover:transform duration-150"
              />
            </button>
            <p> Floristry</p>
          </div>
          <div>
            <button>
              <div className="border-4 rounded-xl m-0 p-14 hover:border-black hover:transform duration-150">
                รูปเกมที่ 2
              </div>
            </button>
            <p> ชื่อเกมที่ 2</p>
          </div>
          <div>
            <button>
              <div className="border-4 rounded-xl m-0 p-14 hover:border-black hover:transform duration-150">
                รูปเกมที่ 3
              </div>
            </button>
            <p> ชื่อเกมที่ 3</p>
          </div>
          <div>
            <button>
              <div className="border-4 rounded-xl m-0 p-14 hover:border-black hover:transform duration-150">
                รูปเกมที่ 4
              </div>
            </button>
            <p> ชื่อเกมที่ 4</p>
          </div>
        </div>
        {/**แถวเกมแถวที่ 2 */}
        <div className="flex justify-between text-center my-8">
          <div>
            <button>
              <div className="border-4 rounded-xl m-0 p-14 hover:border-black hover:transform duration-150">
                รูปเกมที่ 5
              </div>
            </button>
            <p> ชื่อเกมที่ 5</p>
          </div>
          <div>
            <button>
              <div className="border-4 rounded-xl m-0 p-14 hover:border-black hover:transform duration-150">
                รูปเกมที่ 6
              </div>
            </button>
            <p> ชื่อเกมที่ 6</p>
          </div>
          <div>
            <button>
              <div className="border-4 rounded-xl m-0 p-14 hover:border-black hover:transform duration-150">
                รูปเกมที่ 7
              </div>
            </button>
            <p> ชื่อเกมที่ 7</p>
          </div>
          <div>
            <button>
              <div className="border-4 rounded-xl m-0 p-14 hover:border-black hover:transform duration-150">
                รูปเกมที่ 8
              </div>
            </button>
            <p> ชื่อเกมที่ 8</p>
          </div>
        </div>
      </div>
    </div>
  );
}
