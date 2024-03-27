import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import React from "react";

const LessonButton = () => {
  return (
    <Stack spacing={2} direction="column">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
};

export default LessonButton;
