import { FormControl, InputBase } from "@mui/material";
import { styled } from "@mui/material/styles";

export const FormInput = styled(FormControl)({
  alignItems: "flex-start",
  flexDirection: "row",
  gap: "5px",
});

export const InputWrapper = styled("div")(({ theme }) => ({
  height: "40px",
  width: "100%",
  border: "1.5px solid #ff6500",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
}));

export const IconWrapper = styled("div")(({ theme }) => ({
  padding: "5px 10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,

  color: "#000",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    width: "100%",
  },
}));
