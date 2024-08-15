import { useNavigate } from 'react-router-dom';
import { useAuth } from './userContext';

const ProfilePage = () => {
  const { logoutUser } = useAuth();
  const navigate = useNavigate()

  const paraHome = () => {
    navigate('/home')
  }

  return(
    <div>
      <h1>PROFILE PRIVADA</h1>
      <button onClick={() => paraHome()}>HOME</button>
      <br />
      <br />
      <button onClick={() => logoutUser()}>LOGOUT</button>
    </div>
  )
}

export default ProfilePage;