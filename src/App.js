import Home from "./components/Home/Home";
import Signup from "./components/Signup/Signup";
import ProfileComplete from "./components/ProfileComplete/ProfileComplete";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarFun from "./components/Navbar/Navbar";
// import { useContext } from "react";
// import CreateContext from "./store/create-context";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";
import { useSelector } from "react-redux";
function App() {
  // const createcontext = useContext(CreateContext);
  // let isLoggedIn = createcontext.isLoggedIn;
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <>
      <BrowserRouter>
        <NavbarFun />
        <Routes>
          {isLoggedIn ? (
            <>
              {/* <Route path="/" element={<Temp />} /> */}
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<ProfileComplete />} />
            </>
          ) : (
            <>
              <Route path="/login" element={<Signup />} />
              <Route path="/forgotpassword" element={<ForgetPassword />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
