import { Container, Paper, TextField } from "@mui/material";
import React from "react";
import { Form, Link, useNavigation } from "react-router-dom";

const LoginLayout = () => {
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  return (
    <Container sx={{ marginTop: "30px" }}>
      <Paper elevation={16} style={{ padding: "30px" }}>
        <Form method="POST">
          <TextField
            id="outlined-basic"
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
            required
            style={{ marginBottom: "30px" }}
          />

          <TextField
            id="outlined-basic"
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            required
            style={{ marginBottom: "30px" }}
          />

          <div>
            <Link to="signup">Not User? Signup for now</Link>
            <button disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Save"}
            </button>
          </div>
        </Form>
      </Paper>
    </Container>
  );
};

export default LoginLayout;
