import React, { useState, useEffect } from "react";
import axios from "axios";

function Searchpatient() {
  const [patientData, setPatientData] = useState([]); // State to store patient data
  const [patientInfo, setPatientInfo] = useState(""); // DN, ID

  // Fetch
  useEffect(() => {
    console.log("ข้อมูลคนไข้ที่ค้นหา:", patientInfo); // Log the patientInfo state
    const fetchPatientData = async () => {
      try {
        let response;
        // แสดงคนไข้ทั้งหมด
        if (patientInfo.length === 0) {
          response = await axios.get("http://localhost:3000/api/searchpatient");
        }
        // ค้นหาด้วย DN (8 characters)
        else if (patientInfo.length === 8) {
          response = await axios.get(
            "http://localhost:3000/api/searchpatient",
            {
              params: { dn: patientInfo },
            }
          );
        }
        // ค้นหาด้วย ID (13 characters)
        else if (patientInfo.length === 13) {
          response = await axios.get(
            "http://localhost:3000/api/searchpatient",
            {
              params: { id: patientInfo },
            }
          );
        }

        if (response && response.status === 200) {
          console.log("Response data:", response.data); // Log the response data
          setPatientData(response.data); // Update the patientData state with the response data
        } else if (response && response.status === 404) {
          console.error("ไม่พบข้อมูลคนไข้ที่ค้นหา");
          setPatientData([]); // Clear patient data if not found
        }
      } catch (e) {
        console.error("Error fetching patient data:", e);
      }
    };
    fetchPatientData(); // Call the fetch function
  }, [patientInfo]); // Run whenever patientInfo changes

  return (
    <div className="m-2 p-2">
      {/**Search Input */}
      <div className="grid grid-rows-2 items-center justify-center text-center sm:flex sm:gap-4 sm:items-center">
        <h1 className="font-bold sm:text-xl">ค้นหาคนไข้</h1>
        <input
          type="text"
          placeholder="ค้นหาคนไข้ [DN, เลขบัตรประชาชน]"
          className="w-64 h-10 border-2 border-purple-700 rounded-md px-2 focus:outline-none focus:border-purple-500"
          onChange={(e) => setPatientInfo(e.target.value)} // Update patientInfo state on input change
        />
      </div>
      {/** Display Patient Data */}
      <div className="mt-4 flex justify-center items-center">
        {patientData.length > 0 ? (
          <table className=" border-collapse border-3 border-purple-700 text-center w-full">
            <thead>
              <tr className="text-sm sm:text-lg">
                <th className="border-3 border-purple-700 px-4 py-2">DN</th>
                <th className="border-3 border-purple-700 px-4 py-2">
                  เลขบัตรประชาชน
                </th>
                <th className="border-3 border-purple-700 px-4 py-2">ชื่อ</th>
                <th className="border-3 border-purple-700 px-4 py-2">
                  นามสกุล
                </th>
              </tr>
            </thead>
            <tbody>
              {patientData.map((patient, index) => (
                <tr key={index} className="text-xs sm:text-lg">
                  <td className="border-3 border-purple-700 px-4 py-2">
                    {patient.dn}
                  </td>
                  <td className="border-3 border-purple-700 px-4 py-2">
                    {patient.idNo}
                  </td>
                  <td className="border-3 border-purple-700 px-4 py-2">
                    {patient.nameTh}
                  </td>
                  <td className="border-3 border-purple-700 px-4 py-2">
                    {patient.surnameTh}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-gray-500">ไม่พบข้อมูลคนไข้</p>
        )}
      </div>
    </div>
  );
}

export default Searchpatient;
