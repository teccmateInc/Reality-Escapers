import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import { IoIosArrowDown } from "react-icons/io";
import { FILTER_OPTION } from "../helper/constant";


const SimpleAccordion = ()=> {
  return (
    <div>
      {FILTER_OPTION.map((value) => (
        <Accordion>
          <AccordionSummary expandIcon={<IoIosArrowDown />}>
            <Typography sx={{ fontWeight: "600" }}>{value.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup>
              {value.filters.map((value) => (
                <FormControlLabel sx={{fontSize:"6px",fontWeight:"800"}} control={<Checkbox />} label={value} />
              ))}
            </FormGroup>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
export default SimpleAccordion;