import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { toggleViewType } from "../../../redux/viewType/viewTypeSlice";

const TO_VERTICAL_VIEW_TEXT = "Swich to vertical view";
const TO_HORIZONTAL_VIEW_TEXT = "Switch to horizontal view";

export const ChangeViewButton = ({ title }) => {
  const { isVertical } = useSelector((state) => state.viewType);
  const dispatch = useDispatch();

  const initialTitle = isVertical
    ? TO_HORIZONTAL_VIEW_TEXT
    : TO_VERTICAL_VIEW_TEXT;

  const handleClick = () => {
    dispatch(toggleViewType());
  };

  return <Button onClick={handleClick}>{title || initialTitle}</Button>;
};
