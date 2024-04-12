import { styled } from "@mui/system";

export const Badge = styled("div")(({ theme, bgColor, textColor }) => ({
  display: "inline-block",
  backgroundColor: bgColor,
  color: textColor,
  padding: "3px 8px",
  fontSize: 12,
  fontWeight: 500,
  fontFamily: theme.typography.fontFamily,
  lineHeight: "18px",
  borderRadius: 4
}));

export const renderBadge = (role) => {
  switch(role) {
    case "ACCOUNT_MANAGER":
      return <Badge bgColor="#FEDDE6" textColor="#922B6C">Account manager</Badge>
    case "ADMIN":
      return <Badge bgColor="#EFE2FE" textColor="#574195">Admin</Badge>
    case "AGENT":
      return <Badge bgColor="#C8E7F9" textColor="#2C5282">Agent</Badge>
    case "EXTERNAL_REVIEWER":
      return <Badge bgColor="#FEEBC8" textColor="#91472C">External reviewer</Badge>
    default:
      return "N/A"
  }
}