import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import { ReactComponent as TrashIcon } from "../icons/trash-2.svg"
import { ReactComponent as EditIcon } from "../icons/edit-2.svg"

export const ActionBar = ({ selectedUsersCount }) => {

  return (
    <ActionBarContainer pb={2}>
      <Typography variant="subtitle">{selectedUsersCount} users selected</Typography>
      <ButtonsContainer>
        <Button color="secondary" variant="outlined" startIcon={<TrashIcon />}>Delete</Button>
        <Button color="secondary" variant="outlined" startIcon={<EditIcon />}>Edit</Button>
      </ButtonsContainer>
    </ActionBarContainer>
  )
}

const ActionBarContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "20px",
})

const ButtonsContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "8px"
})