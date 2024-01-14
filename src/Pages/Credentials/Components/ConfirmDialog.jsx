import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";

export const ConfirmDialog = (props) => {
  return (
    <Dialog open={props.isOpen}>
      <DialogTitle>Set Email</DialogTitle>
      {props.emailUsable && (
        <DialogContent>
          <DialogContentText>
            Email {props.email} is validated.
          </DialogContentText>
        </DialogContent>
      )}
      {!props.emailUsable && (
        <DialogContent>
          <DialogContentText>
            Email {props.email} is already used.
          </DialogContentText>
        </DialogContent>
      )}
      <DialogActions>
        <Button autoFocus onClick={props.handleClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
