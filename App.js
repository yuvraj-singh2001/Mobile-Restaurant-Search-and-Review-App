import React from "react";
import { Navigation } from "./src/features/navigation";
import { AuthenticationContextProvider } from "./src/services/authentication/AuthenticationContext";

export default function App() {
  return (
    <>
      <AuthenticationContextProvider>
        <Navigation />
      </AuthenticationContextProvider>
    </>
  );
}