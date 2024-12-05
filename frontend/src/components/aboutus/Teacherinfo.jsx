import React from 'react'

export default function Teacherinfo() {
  return (
    <div className="font-['Kanit] font-normal">
        <p className="my-12 font-medium text-2xl text-center">
        อาจารย์ที่ปรึกษาโครงงาน
      </p>
      {/**ข้อมูลอาจารย์ */}
      <div className="w-auto h-auto">
        <div className="flex m-auto p-auto justify-center gap-36">
          <div className="text-center font-medium">
            <img
              className="w-48 h-52 object-cover mb-3"
              src="http://www.ecpe.nu.ac.th/web/images/people/suradat.png"
            />
            <p> ดร.สุรเดช จิตประไพกุลศาล</p>
            <p> Dr.Suradet Jitprapaikulsan</p>
            <p> Faculty of Engineering</p>
            <p className="underline"> ติดต่อ: suradet@nu.ac.th</p>
          </div>
          <div className="text-center font-medium">
            <img
              className="w-48 h-52 object-cover mb-3"
              src="https://ww2.edu.nu.ac.th/wp-content/uploads/2022/03/pic-teacher-suparat-65.png"
            />
            <p> อ.สุภารัตน์ เชื้อโชติ</p>
            <p> Suparat Chuecote</p>
            <p> Faculty of Education</p>
            <p className="underline"> ติดต่อ: suparatch@nu.ac.th</p>
          </div>
        </div>
      </div>
    </div>
  )
}
