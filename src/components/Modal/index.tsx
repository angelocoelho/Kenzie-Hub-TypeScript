import { useContext } from "react";
import { useForm } from "react-hook-form";
import Container from "./style";
import { TechContext } from "../../context/TechContext";
import { ITechnology } from "../../context/UserContext";

interface IProps {
  title: string;
  type: string;
}

function Modal(title: IProps, type: IProps) {
  const { closeModal, addTech } = useContext(TechContext);

  const { register, handleSubmit } = useForm<ITechnology>({});

  const onSubmitFunction = (data: ITechnology) => {
    if (title.type === "cadastrar") {
      addTech(data);
    } else {
      console.log("sou uma alteração");
    }
  };

  return (
    <Container>
      <div className="modal">
        <div className="titles">
          <h4>{title.title}</h4>
          <button onClick={() => closeModal()}>X</button>
        </div>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <label htmlFor="" className="technology">
            Nome da tecnologia
          </label>
          <input type="text" placeholder="Material UI" {...register("title")} />
          <label htmlFor="">Status</label>
          <select placeholder="Iniciante" {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          {title.type === "cadastrar" && (
            <button type="submit" className="registration">
              Cadastrar Tecnologia
            </button>
          )}
          {/* refatorar em 2 componentes diferentes */}
        </form>
      </div>
    </Container>
  );
}

export default Modal;
