import { createContext, useState, useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { api } from "../services/api";
import { UserContext } from "./UseContext";
import { ITechnology} from "./UseContext";


interface ITechContext {
  openModal: (modal: string) => void;
  closeModal: () => void;
  changeTech: () => void;
  addTech: (data: ITechnology) => void;
  deleteTech: (id: string) => void;
  modalAtt: boolean;
  modalAlt: boolean;
}

interface ITechProvider {
  children: React.ReactNode;
}

export const TechContext = createContext<ITechContext>({} as ITechContext)

export function TechProvider({children}: ITechProvider){
    const { technology, setTechnology } = useContext(UserContext);

    const [modalAtt, setModalAtt] = useState(false);
    const [modalAlt, setModalAlt] = useState(false);

    function openModal(modal: string) {
      if (modal === "cadastro") {
        setModalAtt(true);
      } else {
        setModalAlt(true);
      }
    }

    function closeModal() {
      setModalAtt(false);

      setModalAlt(false);
    }

    function changeTech() {
  
      setModalAtt(false);
      toast.success("Tecnologia alterada");
    }

    async function addTech(data: ITechnology) {

      const token = localStorage.getItem("@TOKEN");

      try {
        const response = await api.post("/users/techs", data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        toast.success("Tecnologia adicionada");
        setModalAtt(false);
        setTechnology([...technology, response.data]);

      } catch (error) {
        console.log(error)
      }
      
    }

    async function deleteTech(id: string) {
      try {
        const token = localStorage.getItem("@TOKEN");
        await api.delete(`/users/techs/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        toast.success("Tecnologia excluida");
        const filtered = technology.filter((elem) => {
          return elem.id !== id;
        });

        setTechnology(filtered);
      } catch (error) {
        console.log(error)
      }
      
    }
    return(
        <TechContext.Provider value={{openModal, closeModal, changeTech, deleteTech, addTech, modalAtt, modalAlt}}>
            {children}
        </TechContext.Provider>
    )
}