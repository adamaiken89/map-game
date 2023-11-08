import { Box, Heading, HStack, Stack, Image, Text } from "@chakra-ui/react";
import { Friend } from "../../types";

type Props = { friend: Friend; clickEvent: React.Dispatch<React.SetStateAction<Friend | null>> | null };
export const FriendItem = ({ friend, clickEvent }: Props) => {
  const {
    picture,
    name: { first, last },
  } = friend;
  const className = clickEvent ? "item" : "subitem";
  return (
    <HStack
      className={className}
      spacing={8}
      direction="row"
      onClick={() => clickEvent && clickEvent(friend)}
    >
      <Box>
        <Image src={picture} boxSize="10vh" alt="Friend avatar" />
      </Box>
      <Box>
        <Stack spacing={2}>
          <Box
            w="100%"
            display="flex"
            alignItems="center"
            justifyContent="left"
          >
            <Heading>{first}</Heading>
            <Text fontSize="xl" ml={2}>
              {last}
            </Text>
          </Box>
        </Stack>
      </Box>
    </HStack>
  );
};
