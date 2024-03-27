import React from "react";
import { pink } from "@mui/material/colors";
import Radio from "@mui/material/Radio";

import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { RadioGroup } from "@mui/material";

const LessonRadioButton = () => {
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });
  return (
    <div>
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group" >Gender</FormLabel>
        <RadioGroup row>
        <Radio {...controlProps("a")} />
        <Radio {...controlProps("b")} color="secondary" />
        <Radio {...controlProps("c")} color="success" />
        <Radio {...controlProps("d")} color="default" />
        <Radio
          {...controlProps("e")}
          sx={{
            color: pink[800],
            "&.Mui-checked": {
              color: pink[600],
            },
          }}
        />
        </RadioGroup>
       
      </FormControl>
    </div>
  );
};

export default LessonRadioButton;
