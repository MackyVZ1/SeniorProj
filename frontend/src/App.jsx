import { useState, useEffect } from 'react'
import './App.css'
import {GoogleLogin, GoogleLogout} from 'react-google-login' 
import { gapi } from 'gapi-script'

function App() {
  const clientId = "1055730967869-baqfhf1uo2k26e6i4i5k65onev345fqn.apps.googleusercontent.com"

  const [profile, setProfile] = useState([])
  // ลิงค์รูปมอ
  const enLogo = "https://www.eng.nu.ac.th/eng2022/images/2015_color.png"
  const eduLogo = "https://nclist.fiet.kmutt.ac.th/images/nclist2022/logo/04_logo_NU.png"
  
  useEffect (() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope:''
      })
    }
    gapi.load("client:auth2", initClient)
  }, [])

  const onSuccess = (res) => {
    setProfile(res.profileObj)
    console.log('Success', res)
  }

  const onFailure = (res) => {
    console.log('Failed', res)
  }

  const Logout = () => {
    setProfile(null)
  }

  return (
    <>
      <h2> React Google Login</h2>
      <br/><br/>
      {profile ? (
        <div>
          <img src={profile.imageUrl} alt="user image"/>
          <h3>User Logged in</h3>
          <p>Name: {profile.name}</p>
          <p>Email: {profile.email}</p>       
          <GoogleLogout clientId={clientId} buttonText="Log out" onLogoutSuccess={Logout}/>
        </div>
      ) : (
        <GoogleLogin
          clientId={clientId}
          buttonText='Sign in with Google'
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy='single_host_origin'
          isSignedIn={true}
        />
      )}
    </>
      
    // <div className="font-['Kanit'] font-normal">
    //   <header className="flex bg-blue-400 p-3 justify-between">
    //     <div className='flex'>
    //       <img className="w-16 h-16 ml-4" src={enLogo}/>
    //       <img className="w-16 h-16 ml-10" src={eduLogo}/>
    //     </div>
    //     <div className="my-5 mr-96 font-medium text-2xl text-white">
    //       เกมพัฒนาทักษะทางคณิตศาสตร์
    //     </div>
    //     <button className="border ml-64 p-5 text-white rounded-2xl hover:bg-white hover:text-blue-500 transition duration-300">
    //       เกี่ยวกับเรา
    //     </button>
    //     <button className="border p-3 text-white rounded-2xl hover:bg-white hover:text-blue-500 transition duration-300">
    //       ลงชื่อเข้าใช้ / สมัครสมาชิก
    //     </button>
    //   </header>
    // </div>
  )
}

export default App;
