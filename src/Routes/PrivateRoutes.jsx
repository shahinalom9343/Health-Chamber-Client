import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthProviders/AuthProviders";
import { FidgetSpinner } from "react-loader-spinner";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <FidgetSpinner
          visible={true}
          height="80"
          width="80"
          ariaLabel="fidget-spinner-loading"
          wrapperStyle={{}}
          wrapperClass="fidget-spinner-wrapper"
        />
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoutes;
