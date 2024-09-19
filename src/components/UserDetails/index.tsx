import { IUserData } from "../../interfaces";

interface Iprops {
  userData: IUserData;
}
export default function UserDetails({ userData }: Iprops) {
  return (
    <>
      <div>{userData.email}</div>
      <div>{userData.password}</div>
    </>
  );
}
