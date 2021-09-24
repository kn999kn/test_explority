import React from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { Button } from "@mui/material";
import { addEntity } from "../../../redux/editors/editorsSlice";

const styles = {
  button: {
    fontSize: "1.5rem",
    margin: "0 1rem",
  },
};

export const AddCardButton = ({ title = "+" }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addEntity({ id: uuidv4() }));
  };

  return (
    <Button sx={styles.button} variant="contained" onClick={handleClick}>
      {title}
    </Button>
  );
};
