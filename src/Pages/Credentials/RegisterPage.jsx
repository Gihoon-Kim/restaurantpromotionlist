import { Button, Container, Paper, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
// import ReactPasswordChecklist from "react-password-checklist";
import { Form, json } from "react-router-dom";
import validator from "validator";
import EmailValidationDialog from "./Components/EmailValidationDialog";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [useEmail, setUseEmail] = useState(null);
  // const [password, setPassword] = useState("");
  // const [passwordChecker, setPasswordChecker] = useState("");
  // const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState({
    emailHasError: false,
    passwordCheckError: false,
  });

  const [dialogOpen, setDialogOpen] = React.useState(false);

  useEffect(() => {
    if (!useEmail) {
      setEmail("");
      setUseEmail(null);
    }
    onDialogClose();
  }, [useEmail]);

  useEffect(() => {
    onEmailValidate(email);
  }, [email]);

  const onEmailChange = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const onEmailValidate = (email) => {
    validator.isEmail(email)
      ? setError({ emailHasError: true })
      : setError({ emailHasError: false });
  };

  const _onEmailCheckClickEvent = async (event) => {
    event.preventDefault();

    const response = await axios.get(
      "http://localhost:8080/api/userAuth/userCheck",
      {
        params: { email: email },
      }
    );

    if (response.statusText !== "OK") {
      throw json(
        { message: "Could not fetch events." },
        {
          status: 500,
        }
      );
    } else {
      if (response.data.length > 0) {
        setError({ emailCheckError: true });
      } else {
        setError({ emailCheckError: false });
        setDialogOpen(true);
      }
    }
  };

  const onDialogClose = () => {
    setDialogOpen(false);
  };

  // const onPasswordChange = (event) => {
  //   setPassword(event.target.value);
  // };

  // const onPasswordCheckerChange = (event) => {
  //   setPasswordChecker(event.target.value);
  // };

  return (
    <Container sx={{ marginTop: "30px" }}>
      <Paper elevation={16} style={{ padding: "30px" }}>
        <Form method="POST">
          <Container
            sx={{
              textAlign: "center",
              marginBottom: "1rem",
            }}
          >
            <h1>Enter your email</h1>
            <TextField
              id="outlined-basic"
              fullWidth
              label="Email"
              type="email"
              variant="outlined"
              value={email}
              required
              onChange={onEmailChange}
              error={error.emailHasError}
              helperText={
                error.emailHasError && "Please input valid email address"
              }
              sx={{ marginBottom: "1rem" }}
            />
            <Button
              disabled={!error.emailHasError}
              variant="outlined"
              onClick={_onEmailCheckClickEvent}
              sx={{ textTransform: "none" }}
            >
              Check Email
            </Button>
          </Container>

          {/* <Container
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <TextField
              id="outlined-basic"
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              value={password}
              required
              onChange={onPasswordChange}
              style={{ marginRight: "50px" }}
            />

            <TextField
              id="outlined-basic"
              fullWidth
              label="Password Check"
              type="password"
              variant="outlined"
              value={passwordChecker}
              required
              onChange={onPasswordCheckerChange}
            />
          </Container>

          <Container
            sx={{
              marginBottom: "30px",
            }}
          >
            <ReactPasswordChecklist
              rules={["minLength", "specialChar", "number", "capital", "match"]}
              minLength={5}
              value={password}
              valueAgain={passwordChecker}
              onChange={(isValid) => {
                setIsValid(isValid);
              }}
            />
          </Container>

          <div>
            <button disabled={!isValid}>Register</button>
          </div> */}
        </Form>
      </Paper>

      <EmailValidationDialog
        open={dialogOpen}
        close={onDialogClose}
        email={email}
        setUseEmail={setUseEmail}
      />
    </Container>
  );
};

export default RegisterPage;
