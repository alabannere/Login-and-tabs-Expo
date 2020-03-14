import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: () => {},
  signIn: () => {},
  signOut: () => {}
})

export default AuthContext;