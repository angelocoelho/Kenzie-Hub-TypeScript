/* eslint-disable react-hooks/exhaustive-deps */
import Header from "../../components/Header";
import InforUser from "../../components/InforUser";
import Main from "../../components/Main";

function DashBoard() {
  return (
    <>
      <Header btn={"Logout"} />
      <InforUser />
      <Main />
    </>
  );
}

export default DashBoard;
