import { Friend } from "../types";
import { FRIEND_API_KEY } from "../config";

const APIS = {
  GET_FRIENDS: "https://api.json-generator.com/templates/-xdNcNKYtTFG/data",
} as const;

export const getAsyncFriends = (): Promise<Friend[]> =>
  fetch(APIS.GET_FRIENDS, {
    method: "GET",
    headers: new Headers({
      Authorization: `Bearer ${FRIEND_API_KEY}`,
    }),
  }).then((res) => res.json());
