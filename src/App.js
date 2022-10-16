import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
// import Signup from './components/Signup';
import User from './components/User';

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/dashboard" element={<Dashboard />} />
        {/* <Route exact path="/signup" element={<Signup />} /> */}
        <Route exact path="/" element={<Login />} />
        <Route exact path="/user" element={<User />} />
      </Routes>
    </>
  );
}

export default App;
