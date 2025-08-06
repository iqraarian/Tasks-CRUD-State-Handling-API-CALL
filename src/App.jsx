import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Todos from './pages/Todos';
import UserDetail from './pages/UserDetail';
import Home from './pages/Home';
import './index.css';
function App(){
  return (
    <Router basename="/">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/todos">Todos</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/user/:id" element={<UserDetail />} />
      </Routes>
    </Router>
  );
}
export default App;