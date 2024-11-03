import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {GoogleLogin, GoogleLogout} from 'react-google-login' 
import { gapi } from 'gapi-script'


const Mainpage = () => {
    // id ที่ใช้เชื่อมกับการทำ Google Authenticator
  const clientId = "1055730967869-baqfhf1uo2k26e6i4i5k65onev345fqn.apps.googleusercontent.com"

  // ลิงค์รูป
  const enLogo = "https://upload.wikimedia.org/wikipedia/th/thumb/1/1d/NU_ENG_2015_Logo.png/800px-NU_ENG_2015_Logo.png"
  const eduLogo = "https://nclist.fiet.kmutt.ac.th/images/nclist2022/logo/04_logo_NU.png"

  // ตัวแปรใช้ย้ายหน้าเว็บ
  // const nav = useNavigate()

  // ตัวแปรเก็บค่าต่างๆ
  const [profile, setProfile] = useState([])

  // เรียกใช้ครั้งแรก
  useEffect (() => {
    // เรียกใช้ google authenticator
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope:''
      })
    }
    gapi.load("client:auth2", initClient)
  }, [])

  // ฟังก์ชันเมื่อ login สำเร็จ
  const onSuccess = (res) => {
    setProfile(res.profileObj)
    console.log('Success', res)
    console.log(profile)
  }
  // ฟังก์ชันเมื่อ login ไม่สำเร็๗
  const onFailure = (res) => {
    console.log('Failed', res)
  }
  // ฟังก์ชันเมื่อ logout
  const Logout = () => {
    setProfile(null)
  }

  return (
    // <>
    //   <h2> React Google Login</h2>
    //   <br/><br/>
    //   {profile ? (
    //     <div>
    //       <img src={profile.imageUrl} alt="user image"/>
    //       <h3>User Logged in</h3>
    //       <p>Name: {profile.name}</p>
    //       <p>Email: {profile.email}</p>       
    //       <GoogleLogout clientId={clientId} buttonText="Log out" onLogoutSuccess={Logout}/>
    //     </div>
    //   ) : (
    //     <GoogleLogin
    //       clientId={clientId}
    //       buttonText='Sign in with Google'
    //       onSuccess={onSuccess}
    //       onFailure={onFailure}
    //       cookiePolicy='single_host_origin'
    //       isSignedIn={true}
    //     />
    //   )}
    // </>
      
    <div className="font-['Kanit'] font-normal">
      <div className="bg-red-500 m-0 flex overflow-hidden shadow-md shadow-red-400">
        <div className="bg-slate-100 flex p-3 pr-10 -skew-x-[-24deg] transform origin-left"
        style={{marginLeft:"-20px", paddingLeft:"20px"}}>
          <img className="w-16 h-16 skew-x-[-24deg] ml-8 my-1"src={enLogo}/>
          <img className="w-16 h-16 skew-x-[-24deg] ml-8 my-1"src={eduLogo}/>
        </div>
        <div className="ml-5 py-8 font-semibold text-2xl text-white ">
          เกมพัฒนาทักษะทางคณิตศาสตร์ | Mathimatical Game
        </div>
        <button className="text-white border-2 rounded-2xl ml-auto my-6 pl-6 pr-6 hover:text-red-500 hover:bg-white hover:transfrom duration-150">เกี่ยวกับเรา</button>
        <button className="text-white border-2 rounded-2xl ml-5 mr-5 my-6 pl-6 pr-6 hover:text-red-500 hover:bg-white hover:transfrom duration-150">ลงชื่อเข้าใช้ / สมัครบัญชี</button>
      </div>
    </div>
  )

}

export default Mainpage;