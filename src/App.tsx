import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './privateRoute';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import { AuthProvider } from './userContext';
import ProfilePage from './ProfilePage';

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        {/* Rota pública*/}
        <Route path="/login" element={<LoginPage />} />
        
        {/* Rotas privadas*/}
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
};

export default App;