import { FriendList } from "./component/friends/FriendList";
import { GMap } from "./component/GMap";
import "./App.scss";
import { useEffect, useState } from "react";
import { Friend } from "./types";
import { getAsyncFriends } from "./services/friends";
import { Box, HStack, Spinner } from "@chakra-ui/react";
import { Status, Wrapper } from "@googlemaps/react-wrapper";
import { GOOGLE_MAP_API_KEY } from "./config";

const render = (friend: Friend | null) => {
  return (status: Status) => {
    switch (status) {
      case Status.LOADING:
        return <Spinner />;
      case Status.FAILURE:
        return <div>Something went wrong</div>;
      case Status.SUCCESS:
        return <GMap friend={friend} />;
    }
  };
};

function App() {
  const [friends, setFriends] = useState<Friend[]>([]);
  const [selectedFriend, setSelectedFriend] =
    useState<Friend | null>(null);
  useEffect(() => {
    getAsyncFriends().then((response) => {
      setFriends(response);
    });
  }, []);

  useEffect(() => {
    if (friends.length > 0) {
      setSelectedFriend(friends[0]);
    }
  }, [friends]);

  return (
    <HStack spacing={8} direction="row">
      <Box>
        <FriendList friends={friends} clickEvent={setSelectedFriend} />
      </Box>
      <Box w="80%">
        <Wrapper apiKey={GOOGLE_MAP_API_KEY} render={render(selectedFriend)} />
      </Box>
    </HStack>
  );
}

export default App;
