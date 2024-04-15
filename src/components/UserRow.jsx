import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import { renderBadge } from "./Badge";
import { styled } from "@mui/system";
import Button from "@mui/material/Button";
import { StyledIconButton } from "./StyledIconButton";
import { ReactComponent as TrashIcon } from "../icons/trash-2.svg";
import { ReactComponent as EditIcon } from "../icons/edit-2.svg";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export const UserRow = ({ user, style, onUserSelectionChange, isSelected}) => {
  const { id, avatar, email, name, role } = user;

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const handleUserSelectionChanged = () => {
    const newStatus = !isSelected
    onUserSelectionChange(id, newStatus)
  }

  return (
    <FlexContainer
      container
      selected={isSelected}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...style}
    >
      <Grid container alignItems="center" item xs={12} sm={12} md={5} spacing={2}>
        <Grid item>
          <Checkbox
            checked={isSelected}
            {...{inputProps: {"aria-label": "Select user"}}}
            onChange={() => handleUserSelectionChanged()}
          />
        </Grid>
        <Grid item>
          <Avatar alt={name} src={avatar} />
        </Grid>
        <Grid container xs={6} sm={6} item direction="column" justifyContent="center">
          <Grid item>
            <Typography variant="primary">
              {name}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="secondary">
              {email}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={3}> 
        {renderBadge(role)}
      </Grid>
      <ButtonsContainer item container xs={12} sm={12} md={3} isHovered={isHovered}>
        <Grid item>
          <Button color="secondary" variant="outlined" startIcon={<EditIcon />}>Edit</Button>
        </Grid>
        <Grid item>
          <StyledIconButton aria-label="delete icon button">
            <TrashIcon />
          </StyledIconButton>
        </Grid>
      </ButtonsContainer>
    </FlexContainer>
  )
}

const FlexContainer = styled(Grid)(({ theme, selected }) => ({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  backgroundColor: selected ? "#F7FAFC": "#FFFFFF",
  borderLeft: `${selected ? theme.palette.selected : "#FFFFFF"} solid 4px`,
  borderRadius: "4px",
}));

const ButtonsContainer = styled(Grid)(({isHovered}) => ({
  gap: "5px",
  alignItems: "center",
  justifyContent: "flex-start",
  visibility: isHovered ? "visible" : "hidden",
  opacity: isHovered ? 1 : 0,
  transition: "visibility 0.5s, opacity 0.5s ease-in-out",
}));