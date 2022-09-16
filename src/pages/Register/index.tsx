import * as yup from 'yup'; 
import { useForm } from "react-hook-form"; 
import { yupResolver } from '@hookform/resolvers/yup';
import Container from './styled';
import Header from '../../components/Header';
import React, { useContext, useState } from 'react';
import { UserContext, IFormRegister } from "../../context/UseContext";


function Registro(){
    const {onSubmitRegister} = useContext(UserContext)

    const [loading, setLoading] = useState(false)

    const formSchema = yup.object().shape({
      name: yup.string().required("Nome obrigatório"),
      email: yup.string().required("E-mail obrigatório"),
      password: yup.string().required("Senha Obrigatória").matches(/(^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*_-])).{8,}$/, "A senha precisa ter pelo menos uma letra maiúscula, uma minúscula, um dígito e um carácter"),
      confirmPassword: yup.string().required("Confirmação obrigatória").oneOf([yup.ref("password")], "Confirmação precisa ser igual a senha"),
      bio: yup.string().required("Bio obrigatória"),
      contact: yup.string().required("Contato obrigatório"),
      course_module: yup.string().required("Módulo obrigatório"),
    });  

    const { register , handleSubmit, formState: { errors } } = useForm<IFormRegister>({ resolver: yupResolver(formSchema)});
    
    return (
      <>
        <Header btn={'Voltar'} />
        <Container>
          <div>
            <h4>Crie sua conta</h4>
            <span>Rápido e grátis, vamos nessa ?</span>
            <form onSubmit={handleSubmit((register) => onSubmitRegister(register as IFormRegister, setLoading))}>
              <label htmlFor='nome'>Nome</label>
              <input type="text" placeholder="Digite aqui seu nome" {...register("name")} id='nome'/>
              <span>{errors.name?.message}</span>

              <label htmlFor='email'>Email</label>
              <input type="text" placeholder="Email" {...register("email")} id='email'/>
              <span>{errors.email?.message}</span>

              <label htmlFor='senha'>Senha</label>
              <input type="password" placeholder="Digite sua senha" {...register("password")} id='senha'/>
              <span>{errors.password?.message}</span>

              <label htmlFor='confirmacaoSenha'>Senha</label>
              <input type="password" placeholder="Digite novamente sua senha" {...register("confirmPassword")} id='confirmacaoSenha'/>
              <span>{errors.password?.message}</span>

              <label htmlFor='bio'>Bio</label>
              <input type="text" placeholder="Fale sobre você" {...register("bio")} id='bio'/>
              <span>{errors.bio?.message}</span>

              <label htmlFor='contato'>Contato</label>
              <input type="text" placeholder="Opções de contato" {...register("contact")} id='contato'/>
              <span>{errors.contact?.message}</span>

              <label htmlFor="modulo" className='labelModule'>Selecionar módulo</label>
              <select id="modulo" {...register('course_module')}>
                <option value="1° Módulo">Primeiro módulo</option>
                <option value="2° Módulo">Segundo módulo</option>
                <option value="3° Módulo">Terceiro módulo</option>
                <option value="4° Módulo">Quarto módulo</option>
              </select>
              <span>{errors.course_module?.message}</span>
              <>
                <button type='submit' disabled={loading}>
                  {loading? 'Cadastrando...' : 'Cadastre-se'}
                </button>
              </>
            </form>
          </div>
        </Container>
      </>
    );
}

export default Registro