import Banner from "../../components/Banner";
import SignUpForm from "../../components/SignUpForm";
import { BannerWrapper, Container } from "./styles";

const SignUp = (): JSX.Element => {
  return (
    <Container>
      <BannerWrapper>
        <Banner />
      </BannerWrapper>

      <SignUpForm />
    </Container>
  );
};

export default SignUp;
