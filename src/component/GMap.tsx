import { Stack, Box } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { Friend } from "../types";
import { FriendItem } from "./friends/FriendItem";

type Props = {
  friend: Friend | null;
};
export const GMap = ({ friend }: Props) => {
  const mapRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (mapRef?.current && friend) {
      const { latitude: lat, longitude: lng } = friend.location;
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat, lng },
        zoom: 12,
      });

      new google.maps.Marker({
        position: { lat, lng },
        map,
        title: "Your Friend!",
      });
    }
  }, [friend]);

  if (!friend) {
    return <Box>No friends</Box>;
  }

  return (
    <>
      <h2>Your Friend</h2>
      <Stack className="content" alignItems="center" justifyContent="left">
        <Box w="90%">
          <div ref={mapRef} id="map" />
        </Box>
        <Box w="90%">
          <FriendItem friend={friend} clickEvent={null} />
        </Box>
      </Stack>
    </>
  );
};
