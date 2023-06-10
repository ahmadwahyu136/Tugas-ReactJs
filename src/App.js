import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import EventPage from './pages/EventPage';
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route path="/" element={<EventPage/>} />
    </Routes>
  );
}

export default App;
