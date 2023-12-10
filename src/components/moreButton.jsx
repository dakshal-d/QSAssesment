import React from "react";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const moreButton = () => {

  return (
    <IconButton>
      <MoreHorizIcon style={{ fontSize: 18 }} />
    </IconButton>
  );
};

export default moreButton;
