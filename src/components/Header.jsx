import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { styled } from "@mui/system";
import { Search } from "./Search";
import Button from "@mui/material/Button";

export const Header = ({ setSearchText }) => {

  return (
    <HeaderContainer>
      <Typography sx={{ flex: 1}} variant="title">Account users</Typography>
      <Search onSearchChange={setSearchText} />
      <Button color="primary" variant="contained">Connect users</Button>
    </HeaderContainer>
  )
}

const HeaderContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "10px",
})