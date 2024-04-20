import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Search } from "./Search";
import Button from "@mui/material/Button";

export const Header = ({ setSearchText }) => {

  return (
    <Grid container alignItems="center" spacing={1}>
      <Grid item xs={12} sm={6}>
        <Typography variant="title">Account users</Typography>
      </Grid>
      <Grid item container xs={12} sm={6} justifyContent={{ xs: "flex-start", sm: "flex-end"}} alignItems="center" spacing={1}>
        <Grid item sm={6} >
          <Search onSearchChange={setSearchText} />
        </Grid>
        <Grid item>
          <Button color="primary" variant="contained">Connect users</Button>
        </Grid>
      </Grid>
    </Grid>
  )
}