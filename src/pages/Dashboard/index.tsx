import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { useProducts } from "../../providers/Products";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./schema";
import { Product } from "../../globalTypes";
import {
  Alert,
  Container,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import Button from "../../components/Button";
import { useUser } from "../../providers/User";

const Dashboard = (): JSX.Element => {
  const history = useHistory();

  const { addProduct } = useProducts();

  const { user } = useUser();

  const [open, setOpen] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Product>({
    resolver: yupResolver(schema),
  });

  const handleAddNewProduct = (product: Product): void => {
    addProduct(product);
    setOpen(true);
    reset();
  };

  const handleGoShop = (): void => {
    history.push("/shop");
  };

  const handleClose = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  if (user.role !== "administrador") {
    handleGoShop();
  }

  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        padding: 0,
        margin: 0,
      }}
    >
      <Container maxWidth={false} sx={{ width: "100%", maxWidth: "500px" }}>
        <Typography variant="h2" align="center" sx={{ margin: "50px 0 25px" }}>
          Área de cadastro de novos produtos
        </Typography>

        <form noValidate onSubmit={handleSubmit(handleAddNewProduct)}>
          <TextField
            autoFocus
            fullWidth
            label="Nome do produto *"
            error={!!errors.title}
            helperText={errors.title?.message}
            {...register("title")}
            sx={{ marginBottom: "16px" }}
          />

          <FormControl
            fullWidth
            error={!!errors.category}
            sx={{ marginBottom: "16px" }}
          >
            <InputLabel id="category-label">Categoria *</InputLabel>

            <Select
              labelId="category-label"
              label="Categoria *"
              defaultValue="hamburgueres"
              {...register("category")}
            >
              <MenuItem value={"hamburgueres"}>Hamburgueres</MenuItem>
              <MenuItem value={"bebidas"}>Bebidas</MenuItem>
              <MenuItem value={"acompanhamentos"}>Acompanhamentos</MenuItem>
              <MenuItem value={"sobremesas"}>Sobremesas</MenuItem>
            </Select>
            <FormHelperText>{errors.category?.message}</FormHelperText>
          </FormControl>

          <TextField
            fullWidth
            type="number"
            defaultValue={1}
            label="Preço *"
            error={!!errors.price}
            helperText={errors.price?.message}
            {...register("price")}
            sx={{ marginBottom: "16px" }}
          />
          <Button
            fullWidth
            type="submit"
            size="medium"
            sx={{ marginBottom: "16px" }}
          >
            Salvar
          </Button>
        </form>

        <Button
          fullWidth
          color="secondary"
          size="medium"
          onClick={handleGoShop}
        >
          Ir para a loja
        </Button>
      </Container>

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity="success" variant="filled">
          {"Produto cadastrado com sucesso"}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Dashboard;
