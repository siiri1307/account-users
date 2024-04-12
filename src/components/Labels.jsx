import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { styled } from "@mui/system";

export const Labels = ({onPermissionOrderChanged}) => {

  const handleSortOrderChange = () => {

    onPermissionOrderChanged("TODO")
  }

  return (
    <Grid container alignItems="center" justifyContent="center" sx={{ borderLeft:  "#FFFFFF solid 4px" }}>
      <Grid container item alignItems="center" xs={6} md={5} gap={2}>
        <Grid item>
          <Checkbox
            checked={false}
            {...{inputProps: {"aria-label": "Select all users"}}}
          />
        </Grid>
        <Grid item>
          <Typography variant="label">
            User
          </Typography>
          <ArrowContainer component={ArrowDownwardIcon} />
        </Grid>
      </Grid>
      <Grid item xs={6} md={7}>
        <Typography variant="label">
          Permission
        </Typography>
        <ArrowContainer onClick={handleSortOrderChange} component={true ? ArrowUpwardIcon : ArrowDownwardIcon} />
      </Grid>
    </Grid>
  )
}

const ArrowContainer = styled(({ component: Component, ...props}) => <Component {...props} />)({
  height: "12px",
  color: "#718096",
  cursor: "pointer"
})