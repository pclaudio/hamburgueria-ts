import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Credentials } from "../../globalTypes";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./schema";
import { useAuth } from "../../providers/Auth";
import { Alert, Snackbar } from "@mui/material";
import Button from "../Button";
import { Container, FormButton, FormInput, Message, Title } from "./styles";

const LoginForm = (): JSX.Element => {
  const history = useHistory();

  const { failMessage, setFailMessage, setLogin } = useAuth();

  const [open, setOpen] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Credentials>({
    resolver: yupResolver(schema),
  });

  const email = register("email");
  const password = register("password");

  useEffect(() => {
    !!failMessage && setOpen(true);
  }, [failMessage]);

  const handleLogin = (credentials: Credentials): void => {
    setValue("password", "");
    setLogin(credentials);
  };

  const handleSignUp = (): void => {
    history.push("/signup");
  };

  const handleClose = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    setFailMessage("");
  };

  return (
    <Container>
      <Title variant="h3">Login</Title>

      <form onSubmit={handleSubmit(handleLogin)}>
        <FormInput
          autoFocus
          fullWidth
          label="E-mail *"
          error={!!errors.email}
          helperText={errors.email?.message}
          name={email.name}
          onChange={email.onChange}
          onBlur={email.onBlur}
          inputRef={email.ref}
        />

        <FormInput
          fullWidth
          label="Senha *"
          type="password"
          error={!!errors.password}
          helperText={errors.password?.message}
          name={password.name}
          onChange={password.onChange}
          onBlur={password.onBlur}
          inputRef={password.ref}
        />

        <FormButton fullWidth type="submit">
          Logar
        </FormButton>
      </form>

      <Message variant="body1">
        Crie sua conta para saborear muitas delícias e matar sua fome!
      </Message>

      <Button fullWidth color="secondary" onClick={handleSignUp}>
        Cadastrar
      </Button>

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity="error" variant="filled">
          {failMessage && failMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default LoginForm;
