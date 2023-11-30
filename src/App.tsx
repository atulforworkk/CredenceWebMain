import React from "react";
<<<<<<< HEAD
// import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { RouterProvider } from "react-router-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import router from "./routes/Routes";
function App() {
  return (
    // <MantineProvider>
    // <Notifications />
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    // </MantineProvider>
=======
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { Button } from "@mantine/core";
import router from "./routes/Routes";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <MantineProvider>
        <Notifications />
        <RouterProvider router={router} />
      </MantineProvider>
    </Provider>
>>>>>>> 757bfa279db42a0db0b91b5fc7ddfa5e1ef96276
  );
}

export default App;
