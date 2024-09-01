import React from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const AllPatients = () => {
  const axiosSecure = useAxiosSecure();
  const { data: patients = [] } = useQuery({
    queryKey: ["patients"],
    queryFn: async () => {
      const result = await axiosSecure.get("/patients");
      return result.data;
    },
  });
  return (
    <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
      <h2 className="mb-4 text-xl font-normal text-center leading-tight">
        Total Appointed Patients:{patients.length}
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
          <thead className=" bg-sky-50 text-base">
            <tr className="text-left">
              <th className="p-3">Nos.</th>
              <th className="p-3">Patient Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Address</th>
              <th className="p-3">City</th>
              <th className="p-3">Country</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient, index) => (
              <tr
                key={patient._id}
                className="border-b border-opacity-20  bg-purple-50 dark:bg-slate-950"
              >
                <td className="p-3">
                  <p>{index + 1}</p>
                </td>
                <td className="p-3">
                  <p>
                    {patient.first} {patient.last}
                  </p>
                </td>
                <td className="p-3">
                  <p>{patient.email}</p>
                </td>

                <td className="p-3">
                  <p>{patient.address}</p>
                </td>
                <td className="p-3">
                  <p>{patient.city}</p>
                </td>
                <td className="p-3">
                  <p>{patient.country}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllPatients;
