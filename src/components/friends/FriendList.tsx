import { Friend } from "../../types";
import { FriendItem } from "./FriendItem";

type Props = { friends: Friend[]; clickEvent: React.Dispatch<React.SetStateAction<Friend | null>> };
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
