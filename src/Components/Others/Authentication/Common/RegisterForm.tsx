import { CreateAccount, EmailAddress, Password, PrivacyPolicy, SignIn, YourName } from "@/Constant";
import Link from "next/link";
import { Lock, Mail, User } from "react-feather";
import { Button, Form, FormGroup, Input, InputGroup, InputGroupText, Label } from "reactstrap";
import MediaIcons from "./MediaIcons";
import { useAppSelector } from "@/Redux/Hooks";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const router =  useRouter()
  const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  return (
    <Form className="theme-form login-form">
      <div className="login-header text-center">
        <h4>Create your account</h4>
        <h6>Enter your personal details to create account</h6>
      </div>
      <FormGroup>
        <MediaIcons />
      </FormGroup>
      <div className="login-social-title">
        <h5>Sign in with Email</h5>
      </div>
      <FormGroup>
        <Label>{YourName}</Label>
        <div className="small-group">
          <InputGroup>
            <InputGroupText>
              <User />
            </InputGroupText>
            <Input type="text" required placeholder="Fist Name" />
          </InputGroup>
          <InputGroup>
            <InputGroupText>
              <User />
            </InputGroupText>
            <Input type="email" required placeholder="Last Name" />
          </InputGroup>
        </div>
      </FormGroup>
      <FormGroup>
        <Label>{EmailAddress}</Label>
        <InputGroup>
          <InputGroupText>
            <Mail />
          </InputGroupText>
          <Input type="email" required placeholder="Test@gmail.com" />
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <Label>{Password}</Label>
        <InputGroup>
          <InputGroupText>
            <Lock />
          </InputGroupText>
          <Input type="password" name="login[password]" required placeholder="*********" />
          <div className="show-hide">
            <span className="show"></span>
          </div>
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <div className="checkbox">
          <Input id="checkbox1" type="checkbox" />
          <Label className="text-muted" for="checkbox1">
            Agree with <span>{PrivacyPolicy}</span>
          </Label>
        </div>
      </FormGroup>
      <FormGroup>
        <Button className="btn-block" color="primary" type="submit">
          {CreateAccount}
        </Button>
      </FormGroup>
      <p>
        Already have an account?
        <Button onClick={()=> router.push(`/${i18LangStatus}/dashboard/default`)} className="ms-2">
          {SignIn}
        </Button>
      </p>
    </Form>
  );
};

export default RegisterForm;
