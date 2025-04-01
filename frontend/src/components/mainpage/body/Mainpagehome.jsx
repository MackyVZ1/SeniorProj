import React from 'react'

function Mainpagehome() {
  return (
    <div className="flex justify-center py-28 mx-4 text-sm md:py-24">
        <div className="flex-row text-center bg-purple-500/70 px-8 py-12 text-white rounded-3xl shadow-lg shadow-purple-400 text-md md:text-lg">
            <p className="pb-6 font-bold">ชาร์ตออนไลน์</p>
            <div className="text-start">
                <p>เงื่อนไข</p>
                <p>1.นทพ. สามารถ <a className="font-bold">จองชาร์ต</a> ล่วงหน้าและ <a className="font-bold">สืบค้นข้อมูลผู้ป่วย</a> ผ่านเว็บไซต์</p>
                <p>2.นทพ. ต้องทำการจองชาร์ตล่วงหน้าก่อนวันที่จะใช้งานอย่างน้อย 1 วัน และก่อน 14.00 น.</p>
                <p>3.นทพ. สามารถเบิกชาร์ต (เบิกล่วงหน้า) ได้ 2 ชาร์ตต่อ 1 วัน คือ เช้า 1 ชาร์จ บ่าย 1 ชาร์ต</p>
                <p>4.นทพ. ที่ไม่ได้คืนชาร์ต จะไม่ได้รับชาร์ตใหม่จาก จนท.เวชระเบียน</p>
                <p>5.เพื่อความปลอดภัยของข้อมูล กรุณาลงชื่อออกหลังใช้งานทุกครั้ง</p>
            </div>
        </div>
    </div>
  )
}

export default Mainpagehome