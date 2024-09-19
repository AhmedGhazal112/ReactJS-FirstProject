import { useState } from "react";
import RigesterForm from "./components/RegisterForm";
import Navbar from "./components/Navbar";
import UserDetails from "./components/UserDetails";
import { IUserData } from "./interfaces";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState<IUserData>({
    username: "",
    email: "",
    address: "",
    password: "",
  });
  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      {!isLoggedIn ? (
        <RigesterForm
          setIsLoggedIn={setIsLoggedIn}
          userData={userData}
          setUserData={setUserData}
        />
      ) : (
        <UserDetails userData={userData} />
      )}
    </>
  );
}

export default App;
