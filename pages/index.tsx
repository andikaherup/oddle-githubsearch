/**/
import type { NextPage } from "next";
import { css } from "@emotion/react";
import { ReactNode, useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTheme } from "next-themes";
import { Button, Fab, Pagination, Paper, Stack, Switch } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import TextField from "@mui/material/TextField";
import UserCards from "../components/UserCards";
import Noitem from "../components/NoItem";
import Grid from "@mui/material/Grid";
import ArchiveIcon from "@mui/icons-material/Archive";
const Home: NextPage = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const [value, setValue] = useState(0);
  const data = [
    {
      name: "Bobs",
      avatar:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2",
      followers: "100",
      following: "100",
    },
    {
      name: "Bob1",
      avatar:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2",
      followers: "100",
      following: "100",
    },
    {
      name: "Bob2",
      avatar:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2",
      followers: "100",
      following: "100",
    },
    {
      name: "Bob3",
      avatar:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2",
      followers: "100",
      following: "100",
    },
    {
      name: "Bob4",
      avatar:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2",
      followers: "100",
      following: "100",
    },
    {
      name: "Bob4",
      avatar:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2",
      followers: "100",
      following: "100",
    },
    {
      name: "Bob4",
      avatar:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2",
      followers: "100",
      following: "100",
    },
  ];

  return (
    <Box sx={{ pb: 7, display: "flex", justifyContent: "center" }}>
      <Box
        width="33vw"
        height="100vh"
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "column",
     
          ...(resolvedTheme === "light" && {
            backgroundColor: "#FFFFFF",
          }),
          ...(resolvedTheme === "dark" && {
            backgroundColor: "#021E3C",
          }),
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

        <Box sx={{ px: 2, mt: 5 }}>
          <Grid container spacing={2}>
            {data.map((item, index) => (
              <Grid item xs={6} md={6}>
                <UserCards key={index} data={item}></UserCards>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ mt: 4, display:'flex',justifyContent: 'center' }}>
            <Stack spacing={2}>
              <Pagination count={10} variant="outlined" />
            </Stack>
          </Box>
        </Box>
      </Box>

      <Paper sx={{ width: "33vw", position: "fixed", bottom: 0 }} elevation={3}>
        <BottomNavigation
          sx={{
            ...(resolvedTheme === "light" && {
              backgroundColor: "#FFFFFF",
            }),
            ...(resolvedTheme === "dark" && {
              backgroundColor: "#021E3C",
            }),
          }}
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
