import { useAuth } from './userContext';

const LoginPage = () => {
  const { loginUser } = useAuth();

  return(
    <div>
      <h1>PÁGINA DE LOGIN</h1>
      <button onClick={() => loginUser()}>LOGIN</button>
    </div>
  )
}

export default LoginPage;