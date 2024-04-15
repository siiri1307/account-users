import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import TableSortLabel from "@mui/material/TableSortLabel";

export const Labels = ({ onSortTriggered, orderBy, order }) => {

  const handleSortRequest = (event, property) => {
    const isAsc = orderBy === property && order === "asc"
    const newSortOrder = isAsc ? "desc" : "asc"
    onSortTriggered(property, newSortOrder)
  }

  return (
    <Grid container alignItems="center" justifyContent="center" sx={{ borderLeft:  "#FFFFFF solid 4px" }} pb={1}>
      <Grid container item alignItems="center" xs={6} md={5} gap={2}>
        <Grid item>
          <Checkbox
            checked={false}
            {...{inputProps: {"aria-label": "Select all users"}}}
          />
        </Grid>
        <Grid item>
          <TableSortLabel
            active={orderBy === "name"}
            direction={orderBy === "name" ? order : "asc"}
            onClick={(e) => handleSortRequest(e, "name")}
          >
            <Typography variant="label">
              User
            </Typography>
          </TableSortLabel>
        </Grid>
      </Grid>
      <Grid item xs={6} md={7}>
        <TableSortLabel
          active={orderBy === "permission"}
          direction={orderBy === "permission" ? order : "asc"}
          onClick={(e) => handleSortRequest(e, "permission")}
        >
          <Typography variant="label">
            Permission
          </Typography>
        </TableSortLabel>
      </Grid>
    </Grid>
  )
}