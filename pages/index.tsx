/**/
import type { NextPage } from "next";
import { css } from "@emotion/react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTheme } from "next-themes";
import { Button } from "@mui/material";
const Home: NextPage = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          MUI v5 + Next.js with TypeScript example
        </Typography>
        <Typography variant="h5" gutterBottom>
          Persisted{" "}
          {resolvedTheme !== theme ? `${theme} (${resolvedTheme})` : theme} mode
        </Typography>
        <Button
          css={css`
            background: linear-gradient(to top right, #2a48f3 0%, #c32cc2 100%);
          `}
          variant="contained"
          onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
        >
          Toggle {resolvedTheme === "light" ? "dark" : "light"} mode
        </Button>
      </Box>
    </Container>
  );
};
export default Home;