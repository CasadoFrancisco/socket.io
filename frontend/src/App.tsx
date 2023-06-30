import React from "react";
import { BrowserRouter } from "react-router-dom";
import { RouterComponent } from "./Routes";

export const AppComponent: React.FC = () => {
  return (
    <BrowserRouter>
      <RouterComponent />
    </BrowserRouter>
  );
};
