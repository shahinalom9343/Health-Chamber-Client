import React from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const result = await axiosSecure.get("/users", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
      });

      return result.data;
    },
  });
  return (
    <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
      <h2 className="mb-4 text-2xl font-semibold leading-tight">
        All Logged In Users
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-xs">
          <colgroup>
            <col />
            <col />
            <col />
            <col />
            <col />
            <col className="w-24" />
          </colgroup>
          <thead className="dark:bg-gray-300">
            <tr className="text-left">
              <th className="p-3">Nos.</th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Photo/PhotoURL</th>
              <th className="p-3 text-right">Role</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user._id}
                className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50"
              >
                <td className="p-3">
                  <p>{index + 1}</p>
                </td>
                <td className="p-3">
                  <p>{user.name}</p>
                </td>
                <td className="p-3">
                  <p>{user.email}</p>
                </td>
                <td className="p-3">
                  <p>{user.photoURL}</p>
                </td>
                <td className="p-3 text-right">
                  <p>{user.role}</p>
                </td>
                <td className="p-3 text-right">
                  <p>PENDING</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
