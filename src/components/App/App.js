import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'


function App() {
  return (
    <section className='main'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </section>
  );
}

export default App;
