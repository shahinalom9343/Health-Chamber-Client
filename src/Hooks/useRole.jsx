import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../AuthProviders/AuthProviders";
import useAxiosSecure from "./useAxiosSecure";
export const useRole = () => {
  const { user, loading } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { data: role = "", isLoading } = useQuery({
    queryKey: ["role", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure(`/users/${user?.email}`);
      return data.role;
    },
  });

  //   Fetch user info using logged in user email

  return [role, isLoading];
};

export default useRole;
