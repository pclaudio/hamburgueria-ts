import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Credentials } from "../../globalTypes";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./schema";
import { useAuth } from "../../providers/Auth";
import { Alert, Snackbar } from "@mui/material";
import {
  Container,
  FormButton,
  FormInput,
  LoginLink,
  Title,
  TitleWrapper,
} from "./styles";

const SignUpForm = (): JSX.Element => {
  const { failMessage, setFailMessage, setSignUp } = useAuth();

  const [open, setOpen] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Credentials>({
    resolver: yupResolver(schema),
  });

  const name = register("name");
  const email = register("email");
  const password = register("password");
  const passwordConfirmation = register("passwordConfirmation");

  useEffect(() => {
    !!failMessage && setOpen(true);
  }, [failMessage]);

  const handleSignUp = (credentials: Credentials): void => {
    setValue("password", "");
    setValue("passwordConfirmation", "");
    setSignUp(credentials);
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
      <TitleWrapper>
        <Title variant="h3">Cadastro</Title>

        <Link to="/">
          <LoginLink variant="body1">Retornar para o login</LoginLink>
        </Link>
      </TitleWrapper>

      <form onSubmit={handleSubmit(handleSignUp)}>
        <FormInput
          autoFocus
          fullWidth
          label="Nome *"
          error={!!errors.name}
          helperText={errors.name?.message}
          name={name.name}
          onChange={name.onChange}
          onBlur={name.onBlur}
          inputRef={name.ref}
        />

        <FormInput
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

        <FormInput
          fullWidth
          label="Confirmar Senha *"
          type="password"
          error={!!errors.passwordConfirmation}
          helperText={errors.passwordConfirmation?.message}
          name={passwordConfirmation.name}
          onChange={passwordConfirmation.onChange}
          onBlur={passwordConfirmation.onBlur}
          inputRef={passwordConfirmation.ref}
        />

        <FormButton fullWidth color="secondary" type="submit">
          Cadastrar
        </FormButton>
      </form>

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

export default SignUpForm;
