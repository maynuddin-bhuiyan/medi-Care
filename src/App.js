import './App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from './Page/Home/Home/Home';
import PrivacyPolicy from './Page/PrivacyPolicy/PrivacyPolicy';
import Help from './Page/Help/Help';
import PropertieDetails from './Page/PropertieDetails/PropertieDetails';
import Authprovider from './Page/Context/Authprovider';
import Login from './Page/Login/Login/Login';
import PrivateRoute from './Page/Login/PrivateRouter/PrivateRouter';
import Registration from './Page/Login/Registration/Registration';

function App() {
  return (
    <div className="App">
      <Authprovider>
      
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
     
      <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
      <Route path="/help" element={<Help />} />
      <Route path="/propertieDetails/:id" element={<PrivateRoute> <PropertieDetails /> </PrivateRoute>} />

      

      





      </Routes>
      
      </BrowserRouter>
      </Authprovider>


    </div>
  );
}

export default App;
