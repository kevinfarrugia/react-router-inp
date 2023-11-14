import { Outlet } from "react-router-dom";
import Banner from "../components/Banner";

function Root() {
  return (
    <>
      <Banner title="Root" />
      <Outlet />
    </>
  );
}

export default Root;
