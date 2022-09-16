import React, { useContext } from "react";
import { UserContext } from "../../context/UseContext";
import Modal from "../Modal";
import Container from "./style";
import { BsTrash } from "react-icons/bs";
import { IoIosAdd } from "react-icons/io";
import { TechContext } from "../../context/TechContext";

function Main() {
  const { modalAtt, openModal, deleteTech } = useContext(TechContext);
  const { technology } = useContext(UserContext);

  return (
    <Container>
      <div className="addPanel">
        <h3>Tecnologias</h3>
        <button onClick={() => openModal("cadastro")}>
          {" "}
          <IoIosAdd />
        </button>
      </div>
      {modalAtt && <Modal title={"Cadastrar Tecnologia"} type={"cadastrar"} />}
      <section>
        <ul>
          {technology.length !== 0 ? (
            technology?.map((elem) => {
              return (
                <li key={elem.id}>
                  <div className="titleTech">{elem.title}</div>
                  <div>
                    <div>
                      <span>{elem.status}</span>
                      <BsTrash
                        onClick={() => {
                          deleteTech(elem.id);
                        }}
                      />
                    </div>
                  </div>
                </li>
              );
            })
          ) : (
            <h2>Adicione alguma tech</h2>
          )}
        </ul>
      </section>
    </Container>
  );
}

export default Main;
