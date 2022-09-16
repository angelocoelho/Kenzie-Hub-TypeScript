/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import  {api} from '../services/api'

export interface IUser {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  created_at: string;
  updated_at: string;
  techs: [];
  works: [];
  avatar_url: null,
}

export interface ITechnology{
  title: string,
  status: string,
  id: string,
}

export interface IFormRegister {
  name: string;
  email: string;
  password: string;
  confirmPassword: string,
  bio: string;
  contact: string;
  course_module: string;
}

export interface IFormLogin{
  email: string,
  password: string,
}

export interface IUserContext {
  user: IUser | null;
  technology: ITechnology[];
  setTechnology: React.Dispatch<React.SetStateAction<ITechnology[]>>;
  onSubmitLogin: (
    data: IFormLogin,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  onSubmitRegister: (
    data: IFormRegister,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
}

interface IUserProvider{
  children: React.ReactNode,
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

export function UserProvider({children}: IUserProvider){
    
    const [user, setUser] = useState<IUser | null>(null);
    const [technology, setTechnology] = useState<ITechnology[]>([] as ITechnology[]);
    
    const navigate = useNavigate();
    
    useEffect(() => {
      const token = localStorage.getItem("@TOKEN");

      async function autoLogin(){
        try {
          const response = await api.get('/profile', {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          })

          setUser(response.data);
          setTechnology(response.data.techs)

          navigate("/dashBoard", { replace: true });
        } catch (error) {
          localStorage.removeItem("@TOKEN");
          localStorage.removeItem("@USERID");
          navigate('/' , {replace: true})
        } 
      }
        if(token) {
          autoLogin();
        }
    }, []);

    async function onSubmitLogin(data: IFormLogin, setLoading: React.Dispatch<React.SetStateAction<boolean>>) {
      try {
        setLoading(true);
        const response = await api.post(`/sessions`, data);

        setUser(response.data.user);
        setTechnology(response.data.user.techs);

        localStorage.setItem("@TOKEN", response.data.token);
        localStorage.setItem("@USERID", response.data.user.id);

        toast.success("Login realizado com suceso!");

        setTimeout(() => {
          navigate("/DashBoard", { replace: true });
        }, 500);
      } catch (error) {
        toast.error("Dados incorretos!");
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    
    async function onSubmitRegister(data: IFormRegister, setLoading: React.Dispatch<React.SetStateAction<boolean>>) {
      const { confirmPassword, ...remaining } = data;

      try{
        setLoading(true);
        await api.post('/users', remaining);
        toast.success("Usuário criado com sucesso!");
        setTimeout(() => {
          navigate("/", { replace: true });
        }, 2000);
      } catch (error) {
        toast.error("Usuário não cadastrado, verifique seus dados!");
        console.log(error);
      } finally {
        setLoading(false)
      }
    }


    return (
      <UserContext.Provider
        value={{ user, onSubmitLogin, onSubmitRegister, technology, setTechnology}}
      >
        {children}
      </UserContext.Provider>
    );
}