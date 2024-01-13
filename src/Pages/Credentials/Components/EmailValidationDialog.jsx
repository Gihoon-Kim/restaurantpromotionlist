import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";

const EmailValidationDialog = (props) => {
  const { open, close, email, setUseEmail } = props;

  const setUseEmailHandler = (event) => {
    setUseEmail(event.target.value);
  };

  return (
    <Dialog open={open} onClose={close}>
      <DialogTitle>Email Validation</DialogTitle>

      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Email address {email} is usable. Do you want to use this email to
          regist?
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button onClick={setUseEmailHandler} value={false}>
          No
        </Button>
        <Button onClick={setUseEmailHandler} value={true} autoFocus>
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EmailValidationDialog;
