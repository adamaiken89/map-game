import { Friend } from "../../types";
import { FriendItem } from "./FriendItem";

type Props = { friends: Friend[]; clickEvent: Function };
export const FriendList = ({ friends, clickEvent }: Props) => {
  return (
    <>
      <h2>All Friends</h2>
      <div className="list">
        {friends.map((friend, key) => (
          <FriendItem key={key} friend={friend} clickEvent={clickEvent} />
        ))}
      </div>
    </>
  );
};
