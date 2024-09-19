import { ChangeEvent, useState } from "react";
import "./index.scss";
import { IUserData } from "../../interfaces";
import { formInputList } from "../../data";

interface Iprops {
  setIsLoggedIn: (val: boolean) => void;
  userData: IUserData;
  setUserData: (val: IUserData) => void;
}
const RigesterForm = ({ setIsLoggedIn, userData, setUserData }: Iprops) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };
  const [inputList, setInputList] = useState(formInputList);
  const renderInputListForm = inputList.map((input, idx) => {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: 5 }} key={idx}>
        <div className="input-wrapper">
          <label htmlFor={input.id}>{input.label}</label>
          <input
            type={input.type}
            name={input.name}
            id={input.id}
            value={userData[input.name]}
            onChange={onChangeHandler}
          />
        </div>
        <button
          style={{
            color: "red",
            padding: 10,
            borderRadius: 8,
            border: "none",
            backgroundColor: "black",
          }}
          onClick={() => {
            const newList = inputList.filter(
              (el) => el.id != inputList[idx].id
            );
            setInputList(newList);
          }}
          key={idx}
        >
          X
        </button>
      </div>
    );
  });
  return (
    <>
      <form
        className="login-form"
        onSubmit={(e) => e.preventDefault()}
        style={{ margin: "30px" }}
      >
        {renderInputListForm}
        <button onClick={() => setIsLoggedIn(true)}>Click Me!</button>
      </form>
    </>
  );
};
export default RigesterForm;
