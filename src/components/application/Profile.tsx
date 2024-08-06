import { useEffect } from "react";
import cameraImage from '../../assets/images/profile-camera.jpg'

interface ProfileProps {

}

function Profile({}: ProfileProps) {
  useEffect(()=>{

  },[])

  return (
    <>
      <div className="profileContainer">
        <div className="profileICamera">
          <img src={cameraImage} alt="profile image"/>
        </div>
        <div className="cameraButtonWrap">
          <span className="cameraBtn"></span>
        </div>
      </div>
    </>
  )
}

export default Profile;