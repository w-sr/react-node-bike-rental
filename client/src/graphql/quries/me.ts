import { gql, useQuery } from "@apollo/client";
import { QueryHookResult, User } from "../type";

export const ME_QUERY = gql`
  query MeQuery {
    me {
      _id
      first_name
      last_name
      email
      role
    }
  }
`;

export const useQueryMe = (): QueryHookResult<User> => {
  const { data, loading } = useQuery(ME_QUERY);
  return { data: data?.me, loading };
};
