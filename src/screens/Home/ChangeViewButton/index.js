import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { toggleViewType } from "../../../redux/viewTypeSlice";

export const ChangeViewButton = ({ title = "change view" }) => {
  const dispatch = useDispatch();
  return <Button onClick={() => dispatch(toggleViewType())}>{title}</Button>;
};
