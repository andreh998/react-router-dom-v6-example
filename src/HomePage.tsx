import { useNavigate } from 'react-router-dom';
import { useAuth } from './userContext';

const HomePage = () => {
  const { logoutUser } = useAuth();
  const navigate = useNavigate()

  const paraProfile = () => {
    navigate('/profile')
  }

  return(
    <div>
      <h1>HOME PRIVADA</h1>
      <button onClick={() => paraProfile()}>Profile</button>
      <br />
      <br />
      <button onClick={() => logoutUser()}>LOGOUT</button>
    </div>
  )
}

export default HomePage;