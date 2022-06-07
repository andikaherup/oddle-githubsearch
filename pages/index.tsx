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
import UserCards from "../components/UserCards";
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
        <UserCards ></UserCards>
       
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
