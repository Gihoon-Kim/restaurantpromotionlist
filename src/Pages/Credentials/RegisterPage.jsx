import { Button, Container, Paper, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import PasswordChecklist from "react-password-checklist";
import { Form, json } from "react-router-dom";
import validator from "validator";
import styles from "./RegisterPage.module.css";
import { ConfirmDialog } from "./Components/ConfirmDialog";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordChecker, setPasswordChecker] = useState("");
  const [emailUsable, setEmailUsable] = useState(true);
  const [emailValidated, setEmailValidated] = useState(false);
  const [passwordValidated, setPasswordValidated] = useState(false);
  const [isEmailConfirmDialogOpen, setIsEmailConfirmDialogOpen] =
    useState(false);

  const onEmailChange = (event) => {
    event.preventDefault();
    if (event.target.value !== null) {
      setEmailUsable(true);
    }
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const onPasswordCheckerChange = (event) => {
    event.preventDefault();
    setPasswordChecker(event.target.value);
  };

  const onEmailCheckClickEvent = async (event) => {
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
        setEmailUsable(false);
        setIsEmailConfirmDialogOpen(true);
      } else {
        setEmailUsable(true);
        setIsEmailConfirmDialogOpen(true);
      }
    }
  };

  const handleEmailValidateDialogClose = () => {
    setIsEmailConfirmDialogOpen(false);
    if (emailUsable) {
      setEmailValidated(true);
    }
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
            <div className={styles.email}>
              <TextField
                id="outlined-basic"
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                value={email}
                required
                onChange={onEmailChange}
                disabled={emailValidated}
              />
              <Button
                disabled={
                  emailValidated ||
                  email.length === 0 ||
                  !validator.isEmail(email)
                }
                variant="outlined"
                onClick={onEmailCheckClickEvent}
                sx={{
                  marginLeft: "10px",
                  textTransform: "none",
                }}
              >
                Check Email
              </Button>
            </div>

            {isEmailConfirmDialogOpen && (
              <ConfirmDialog
                email={email}
                isOpen={isEmailConfirmDialogOpen}
                emailUsable={emailUsable}
                handleClose={handleEmailValidateDialogClose}
              />
            )}
          </Container>

          {emailValidated && (
            <div style={{ display: "block" }}>
              <Container
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <TextField
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
                  fullWidth
                  label="Password Check"
                  type="password"
                  variant="outlined"
                  value={passwordChecker}
                  required
                  onChange={onPasswordCheckerChange}
                />
              </Container>

              <PasswordChecklist
                rules={[
                  "minLength",
                  "specialChar",
                  "number",
                  "capital",
                  "match",
                ]}
                minLength={8}
                value={password}
                valueAgain={passwordChecker}
                onChange={(isValid) => {
                  if (isValid) setPasswordValidated(true);
                  else setPasswordValidated(false);
                }}
              />
            </div>
          )}

          {passwordValidated && (
            <div>
              <button>Register</button>
            </div>
          )}
        </Form>
      </Paper>
    </Container>
  );
};

export default RegisterPage;
