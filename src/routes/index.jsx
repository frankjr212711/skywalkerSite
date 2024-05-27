import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Layout from "~/components/layout";

const rootRoutes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route
          index
          lazy={async () => {
            const { default: Home } = await import("./home");
            return { Component: Home };
          }}
        />
        <Route
          path="skywalker"
          lazy={async () => {
            const { default: Skywalker } = await import("./skywalker");
            return { Component: Skywalker };
          }}
        />
        <Route
          path="gjr"
          lazy={async () => {
            const { default: GJR } = await import("./gjr");
            return { Component: GJR };
          }}
        />
        <Route
          path="librex"
          lazy={async () => {
            const { default: Librex } = await import("./librex");
            return { Component: Librex };
          }}
        />
        <Route
          path="about"
          lazy={async () => {
            const { default: About } = await import("./about");
            return { Component: About };
          }}
        />
        <Route
          path="contact"
          lazy={async () => {
            const { default: Contact } = await import("./contact");
            return { Component: Contact };
          }}
        />
      </Route>
    </>
  )
);
export default rootRoutes;
