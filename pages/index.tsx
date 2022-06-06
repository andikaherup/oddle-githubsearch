/**/
import type { NextPage } from "next";
import { css } from "@emotion/react";
import { ReactNode, useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTheme } from "next-themes";
import { Button, Fab, Paper, Switch } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import TextField from "@mui/material/TextField";
import ArchiveIcon from "@mui/icons-material/Archive";
const Home: NextPage = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const [value, setValue] = useState(0);
  return (
    <Box sx={{ pb: 7, display: "flex", justifyContent: "center" }}>
      <Box
        width="33vw"
        height="100vh"
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "column",
          maxWidth: { xl: 466, ls: 466, md: 466 },
          ...(resolvedTheme === 'light' && {
            backgroundColor: '#FFFFFF',
          }),
           ...(resolvedTheme === 'dark' && {
            backgroundColor: '#021E3C',
          })
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            pt: 4,
            pb: 2,

            m: 2,
            borderRadius: 1,
          }}
        >
          <Typography>Search</Typography>
          <Switch
            onChange={() =>
              setTheme(resolvedTheme === "light" ? "dark" : "light")
            }
          ></Switch>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <TextField
            fullWidth
            sx={{ mx: 2 }}
            id="outlined-search"
            label="Enter GitHub username, i.e. gaearon"
            type="search"
          />
        </Box>
     
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
             <Box
          component="img"
          sx={{ width: "120px" }}
          alt="github logo"
          src="/githubmark.svg"
        />
          <Box component="img" alt="github logo" src="/githublogo.svg" />

          <Typography variant="body2" px={5} align="center">
            Enter GitHub username and search users matching the input like
            Google Search, click avatars to view more details, including
            repositories, followers and following.
          </Typography>
        </Box>

        {/* <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        bgcolor: 'background.paper',
        overflow: 'hidden',
        borderRadius: '12px',
        boxShadow: 1,
        fontWeight: 'bold',
      }}
    >
      <Box
        component="img"
        sx={{
          height: 233,
          width: 350,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt="The house from the offer."
        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'center', md: 'flex-start' },
          m: 3,
          minWidth: { md: 350 },
        }}
      >
        <Box component="span" sx={{ fontSize: 16, mt: 1 }}>
          123 Main St, Phoenix AZ
        </Box>
        <Box component="span" sx={{ color: 'primary.main', fontSize: 22 }}>
          $280,000 — $310,000
        </Box>
        <Box
          sx={{
            mt: 1.5,
            p: 0.5,
            backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1),
            borderRadius: '5px',
            color: 'primary.main',
            fontWeight: 'medium',
            display: 'flex',
            fontSize: 12,
            alignItems: 'center',
            '& svg': {
              fontSize: 21,
              mr: 0.5,
            },
          }}
        >
          <ErrorOutlineIcon />
          CONFIDENCE SCORE 85%
        </Box>
      </Box>
      </Box> */}
      </Box>
      <Paper sx={{ width: "33vw", position: "fixed", bottom: 0 }} elevation={3}>
        <BottomNavigation
          sx={{  ...(resolvedTheme === 'light' && {
            backgroundColor: '#FFFFFF',
          }),
           ...(resolvedTheme === 'dark' && {
            backgroundColor: '#021E3C',
          }) }}
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Search" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
};
export default Home;
