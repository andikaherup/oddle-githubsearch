/**/
import type { NextPage } from "next";
import { css } from "@emotion/react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTheme } from "next-themes";
import { Button, Fab } from "@mui/material";
import DarkModeSharpIcon from "@mui/icons-material/DarkModeSharp";
import LightModeSharpIcon from "@mui/icons-material/LightModeSharp";
const Liked: NextPage = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  return (
    <Container maxWidth="lg">
        {/* //create title for the page */}
        <Typography variant="h3" gutterBottom>
            Liked Page
        </Typography>
      <Fab
        css={css`
          background: linear-gradient(to top right, #2a48f3 0%, #c32cc2 100%);
        `}
        sx={{ position: "absolute", top: 16, right: 16 }}
        onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      >
        {/* Toggle {resolvedTheme === "light" ? "dark" : "light"} mode */}
        {resolvedTheme === "light" ? (
          <DarkModeSharpIcon />
        ) : (
          <LightModeSharpIcon sx={{ color: "white" }} />
        )}
      </Fab>
    </Container>
  );
};
export default Liked;
