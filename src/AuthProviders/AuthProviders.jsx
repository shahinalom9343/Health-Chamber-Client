import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const AuthProviders = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState();
  const axiosPublic = useAxiosPublic();
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google Signin
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // facebook Signin
  const facebookSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        //create and save token to LS
        const userInfo = { email: currentUser.email };
        axiosPublic.post("/jwt", userInfo).then((res) => {
          if (res.data.token) {
            localStorage.setItem("access-token", res.data.token);
          }
        });
      } else {
        // do something
        localStorage.removeItem("access-token");
      }
      //   console.log("current user is", currentUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe;
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    googleSignIn,
    facebookSignIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
