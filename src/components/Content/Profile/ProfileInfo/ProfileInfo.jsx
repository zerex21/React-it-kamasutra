import sProfileInfo from './ProfileInfo.module.css'

const ProfileInfo = () =>{
    return(
      <div>
      <div>
        <img className={sProfileInfo.profileImg} src="https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg" alt="pic" />
      </div>
      <div className={sProfileInfo.decriptionBlock}>
       ava
      </div>
    </div>
    )
  }

export default ProfileInfo;