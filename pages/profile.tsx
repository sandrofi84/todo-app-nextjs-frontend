import Image from "next/image";
import { useContext } from "react";
import StateContext from "../src/context/StateContext";
import { Picture } from "../src/types/Picture";
import { State } from "../src/types/State";

const Profile = props => {
  const { user } = useContext<State>(StateContext);

  return (
    <>
      <div>{user.displayName}</div>
      {user.pictures.map((pic: Picture) => (
        <div key={pic.id}>
          <Image src={pic.uri} width={200} height={200} alt="" />
        </div>
      ))}
    </>
  );
};

export default Profile;
