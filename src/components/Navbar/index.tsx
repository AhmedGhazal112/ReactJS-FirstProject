import "./index.scss";

interface Iprops {
  isLoggedIn: boolean;
  setIsLoggedIn: (val: boolean) => void;
}
export default function Navbar({ isLoggedIn, setIsLoggedIn }: Iprops) {
  return (
    <>
      <ul className="navbar">
        <li>
          <a href="/">Codeawy</a>
        </li>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About Us</a>
        </li>
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? "Signout" : "Signin"}
        </button>
      </ul>
    </>
  );
}
