import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Inter, sans-serif",
    title: {
      fontSize: "18px",
      fontWeight: 500,
      lineHeight: "27px",
      color: "#1A202C"
    },
    subtitle: {
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "24px",
      color: "#2D3748"
    },
    primary: {
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: "21px",
      color: "#1A202C"
    },
    secondary: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "21px",
      color: "#718096"
    },
    label: {
      fontSize: "12px",
      fontWeight: 500,
      lineHeight: "18px",
      color: "#718096"
    }
  },
  palette: {
    selected: "#475DE5",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          textTransform: "none",
          ...(ownerState.variant === "contained" &&
            ownerState.color === "primary" && {
              backgroundColor: "#475DE5",
            }),
            ...(ownerState.variant === "outlined" &&
            ownerState.color === "secondary" && {
              height: "32px",
              backgroundColor: "#FFFFFF",
              color: "#4A5568",
              borderColor: "#E2E8F0" 
            }),
        }),
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: 0,
          "&.Mui-checked": {
            color: theme.palette.selected,
          },
        }),
      },
    },
    // workaround for material-ui issue #35939
    MuiTypography: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontFamily: theme.typography.fontFamily
        })
      }
    }
  },
});

export default theme;