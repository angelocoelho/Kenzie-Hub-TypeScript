import { useContext } from "react";
import { UserContext } from "../../context/UseContext";

import Container from "./style";

function InforUser() {
  const { user } = useContext(UserContext);

  return (
    <Container>
      <h2>Olá, {user?.name}</h2>
      <p>{user?.course_module}</p>
    </Container>
  );
}

export default InforUser;
