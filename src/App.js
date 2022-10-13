import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';

const App = () => {
  return (
    <>
      <section className="App">
        <Dashboard />
      </section>
      <Login />
      <Signup />
    </>
  );
}

export default App;
