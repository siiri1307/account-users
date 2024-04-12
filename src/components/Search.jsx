import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { ReactComponent as MySearchIcon } from "../icons/search.svg";
import SvgIcon from "@mui/material/SvgIcon";
import { debounce } from "../helpers/debounce";

export const Search = ({ onSearchChange }) => {

  const handleSearchChange = debounce((text) => {
    onSearchChange(text)
  }, 500)

  return (
    <TextField
      size="small"
      id="outlined-basic"
      placeholder="Search"
      variant="outlined"
      onChange={(e) => handleSearchChange(e.target.value)}
      sx={{
        backgroundColor: "#FFFFFF",
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "#A0AEC0",
          },
        },
      }}    
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SvgIcon component={MySearchIcon} inheritViewBox sx={{ width: "12px", height: "12px", fill: "none" }} />
          </InputAdornment>
        ),
        sx: {
          "& input::placeholder": {
            color: "#A0AEC0",
            fontSize: "14px",
          },
          "& input": {
            paddingTop: "9px",
            paddingBottom: "8px"
          }
        }
      }}
    />
  )
} 