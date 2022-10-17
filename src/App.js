import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Details from './components/Details';
import Login from './components/Login';
import User from './components/User';

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/" element={<Login />} />
        <Route exact path="/users" element={<User />} />
        <Route exact path="/users/:id" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
