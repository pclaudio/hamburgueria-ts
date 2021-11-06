import Banner from "../../components/Banner";
import LoginForm from "../../components/LoginForm";
import { Container } from "./styles";

const Login = (): JSX.Element => {
  return (
    <Container>
      <Banner />

      <LoginForm />
    </Container>
  );
};

export default Login;
