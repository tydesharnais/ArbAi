
import React from "react";
import { View } from "@aws-amplify/ui-react";
import { NavBar } from "../ui-components";

function Layout({ children, authText, handleClick, username }) {
  return (
    <View width="1200px" marginLeft="auto" marginRight="auto">
      <NavBar
        marginTop={"20px"}
        handleAuth={handleClick}
        authText={authText}
        username={username}
        avatar={username.split("")[0].toUpperCase()}
      />
      {children}
    </View>
  );
};

export default Layout;
