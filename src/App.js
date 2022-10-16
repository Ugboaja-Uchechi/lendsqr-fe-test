import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import User from './components/User';
import UserDetails from './components/UserDetails';

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/" element={<Login />} />
        <Route exact path="/users" element={<User />} />
        <Route exact path="/users/:id" element={<UserDetails />} />
      </Routes>
    </>
  );
}

export default App;
