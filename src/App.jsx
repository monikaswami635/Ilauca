import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Faqpage from './pages/Faqpage';
import Bagpage from './pages/Bagpage';
import Termsconditionpage from './pages/Termsconditionpage';
import Privacypolicypage from './pages/Privacypolicypage';
import Legalconditionpage from './pages/Legalconditionpage';
import Paymentpage from './pages/Paymentpage';
import Purchasepage from './pages/Purchasepage';
import Cartpage from './pages/Cartpage';
import Scrolltotop from './components/Scrolltotop';
// import Cartdrawer from './components/Cartdrawer';

function App() {
  // const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      {/* Navbar hide when cart open */}
      {/* {!cartOpen && <Navbar setCartOpen={setCartOpen} />} */}

      {/* Cart Drawer */}
      {/* <Cartdrawer cartOpen={cartOpen} setCartOpen={setCartOpen} /> */}
      <Navbar />
      <Scrolltotop />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/faqpage" element={<Faqpage />} />
        <Route path="/bag" element={<Bagpage />} />
        <Route path="/termscondition" element={<Termsconditionpage />} />
        <Route path="/privacypolicy" element={<Privacypolicypage />} />
        <Route path="/legalconditions" element={<Legalconditionpage />} />
        <Route path="/paymentsection" element={<Paymentpage />} />
        <Route path="/purchase" element={<Purchasepage />} />
        <Route path="/cart" element={<Cartpage />} />
      </Routes>

      {/* Footer hide when cart open */}
      <Footer />
    </>
  );
}

export default App;
