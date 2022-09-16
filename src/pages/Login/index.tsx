import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import Container from "./styled";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UseContext";
import { IFormLogin } from "../../context/UseContext";

function Login() {
  const { onSubmitLogin } = useContext(UserContext);

  const [loading, setLoading] = useState(false);

  const formSchema = yup.object().shape({
    email: yup
      .string()
      .required("E-mail obrigatório")
      .email("Deve ser um e-mail"),
    password: yup.string().required("Senha Obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormLogin>({ resolver: yupResolver(formSchema) });

  return (
    <Container>
      <h1>Kenzie Hub</h1>
      <div>
        <form
          onSubmit={handleSubmit((register) =>
            onSubmitLogin(register as IFormLogin, setLoading)
          )}
        >
          <h4>Login</h4>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="Email"
            {...register("email")}
            id="email"
          />
          <span>{errors.email?.message!}</span>

          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            placeholder="Senha"
            {...register("password")}
            id="senha"
          />
          <span>{errors.password?.message}</span>
          <button type="submit" disabled={loading}>
            {loading ? "Entrando" : "Entrar"}
          </button>
        </form>
        <p>Ainda não possui uma conta?</p>
        <Link to="/register" className="register">
          Cadastre-se
        </Link>
      </div>
    </Container>
  );
}

export default Login;
