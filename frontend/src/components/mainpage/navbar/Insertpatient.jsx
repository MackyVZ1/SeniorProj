import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { th } from "date-fns/locale";

function Insertpatient() {
  // ข้อมูลที่ต้องการ
  const [dn, setDN] = useState("");
  const [titleTH, settitleTH] = useState("");
  const [nameTH, setnameTH] = useState("");
  const [surnameTH, setsurnameTH] = useState("");
  const [titleEN, settitleEN] = useState("");
  const [nameEN, setnameEN] = useState("");
  const [surnameEN, setsurnameEN] = useState("");
  const [sex, setSex] = useState("");
  const [Status, setStatus] = useState("");
  const [idNo, setidNo] = useState("");
  const [age, setAge] = useState("");
  const [occupation, setOccupation] = useState("");
  const [address, setAddress] = useState("");
  const [phoneHome, setPhonehome] = useState("");
  const [phoneOffice, setPhoneoffice] = useState("");
  const [emerNotify, setemerNotify] = useState("");
  const [emerAddress, setemerAddress] = useState("");
  const [parent, setParent] = useState("");
  const [parentPhone, setparentPhone] = useState("");
  const [physician, setPhysician] = useState("");
  const [physicianOffice, setPhysicianoffice] = useState("");
  const [physicianPhone, setPhysicianphone] = useState("");
  const [regDate, setregDate] = useState("");
  const [birthDate, setbirthDate] = useState("");
  const [priv, setPriv] = useState("");
  const [otherAddress, setotherAddress] = useState("");
  const [registerDate, setregisterDate] = useState("");
  const [bDate, setbDate] = useState("");
  const [fromHospital, setfromHospital] = useState("");
  const [updateByUserId, setupdateuserId] = useState("");
  const [updateTime, setupdateTime] = useState("");

  // วันที่, เวลาปัจจุบัน
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  // วันที่
  const days = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  // เดือน
  const months = [
    "ม.ค.",
    "ก.พ.",
    "มี.ค.",
    "เม.ย.",
    "พ.ค.",
    "มิ.ย.",
    "ก.ค.",
    "ส.ค.",
    "ก.ย.",
    "ต.ค.",
    "พ.ย.",
    "ธ.ค.",
  ];

  // ปี
  const years = [
  

  ]

  const titleThaiSelect = ["ด.ช.", "ด.ญ.", "นาย", "นางสาว", "นาง", "อื่น ๆ"]; // คำนำหน้าภาษาไทย
  const titleEnglishSelect = ["Mr.", "Miss", "Mrs.", "Other"]; // คำนำหน้าภาษาอังกฤษ
  const sexSelect = ["ชาย", "หญิง"] // เพศ
  const maritalStatusSelect = ["โสด", "สมรส", "หย่าร้าง", "หม้าย"] // สถานะ
  // แปลงเลขเดือน -> เดือนไทย
  const thaiMonth = (monthNum) => {
    return months[monthNum];
  };

  // แปลงปีสากล -> ปีพ.ศ.
  const thaiYear = (yearNum) => {
    return yearNum + 543;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="pt-2 text-center">
      <div className="flex justify-end">
        <p>
          {format(
            currentDateTime,
            `วันที่ dd/${thaiMonth(currentDateTime.getMonth())}/${thaiYear(
              currentDateTime.getFullYear()
            )} เวลา HH:mm:ss`,
            { locale: th }
          )}
        </p>
      </div>
      <h1 className="pt-3">ลงทะเบียนคนไข้ใหม่</h1>
      {/**DN */}
      <div className="flex justify-start gap-x-6">
        <p>DN</p>
        <input
          className="border"
          type="text"
          value={dn}
          onChange={(e) => setDN(e.target.value)}
          maxLength={8}
        />
      </div>
      {/**เลขประจำตัวบัตรประชาชน */}
      <div className="flex justify-start gap-x-6">
          <p>เลขประจำตัวประชาชน</p>
          <input
          className="border"
          value={idNo}
          type="text"
          onChange={(e) => setidNo(e.target.value)}
          maxLength={13}
          />
      </div>
      {/**ชื่อ-นามสกุลภาษาไทย */}
      <div className="flex justify-start gap-x-6">
        <p>คำนำหน้า</p>
        <select
          value={titleTH}
          onChange={(e) => settitleTH(e.target.value)}
          className="border w-22 bg-white text-black text-center"
        >
          <option value="" disabled>
            กรุณาเลือกคำนำหน้า
          </option>
          {titleThaiSelect.map((titleThOption) => (
            <option key={titleThOption} value={titleThOption}>
              {" "}
              {titleThOption}{" "}
            </option>
          ))}
        </select>
      </div>
      <div className="flex justify-start gap-x-6">
        <p>ชื่อ</p>
        <input
          className="border"
          type="text"
          value={nameTH}
          onChange={(e) => setnameTH(e.target.value)}
        />
      </div>
      <div className="flex justify-start gap-x-6">
        <p>นามสกุล</p>
        <input
          className="border"
          type="text"
          value={surnameTH}
          onChange={(e) => setsurnameTH(e.target.value)}
        />
      </div>
      {/**ชื่อ-นามสกุลภาษาอังกฤษ */}
      <div className="flex justify-start gap-x-6">
        <p>Title</p>
        <select
          value={titleEN}
          onChange={(e) => settitleEN(e.target.value)}
          className="border w-22 bg-white text-black text-center"
        >
          <option value="" disabled>
            Please select a title
          </option>
          {titleEnglishSelect.map((titleEnOption) => (
            <option key={titleEnOption} value={titleEnOption}>
              {" "}
              {titleEnOption}{" "}
            </option>
          ))}
        </select>
      </div>
      <div className="flex justify-start gap-x-6">
        <p>Name</p>
        <input
          className="border"
          type="text"
          value={nameEN}
          onChange={(e) => setnameEN(e.target.value)}
        />
      </div>
      <div className="flex justify-start gap-x-6">
        <p>Surname</p>
        <input
          className="border"
          type="text"
          value={surnameEN}
          onChange={(e) => setsurnameEN(e.target.value)}
        />
      </div>
      {/**เพศ, สถานะ */}
      <div className="flex justify-start gap-x-6">
        <p>เพศ</p>
        <select
          value={sex}
          onChange={(e) => setSex(e.target.value)}
          className="border w-22 bg-white text-black text-center"
        >
          <option value="" disabled>
            ระบุเพศ
          </option>
          {sexSelect.map((sexOption) => (
            <option key={sexOption} value={sexOption}>
              {" "}
              {sexOption}{" "}
            </option>
          ))}
        </select>
        <p>สถานะ</p>
        <select
          value={Status}
          onChange={(e) => setStatus(e.target.value)}
          className="border w-22 bg-white text-black text-center"
        >
          <option value="" disabled>
            ระบุสถานะ
          </option>
          {maritalStatusSelect.map((maritalOption) => (
            <option key={maritalOption} value={maritalOption}>
              {" "}
              {maritalOption}{" "}
            </option>
          ))}
        </select>
      </div>
      {/**วัน/เดือน/ปีเกิด */}
      <div className="flex justify-start gap-x-6">
        <p>วัน/เดือน/ปี</p>
        {/**ทำอันนี้ต่อจ้า */}
      </div>
    </div>
  );
}

export default Insertpatient;
