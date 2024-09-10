import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  UserRegisteration  from './Pages/UserRegisteration';
import Navbar from './Components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<UserRegisteration/>} />
        {/* Add more routes here */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
