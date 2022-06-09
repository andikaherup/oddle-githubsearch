/**/
import type { NextPage } from "next";
import { css } from "@emotion/react";
import { ReactNode, useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import Box from "@mui/material/Box";
import NoFavorite from "components/NoFavorite";
import { useTheme } from "next-themes";
import Avatar from "@mui/material/Avatar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {
  Button,
  CircularProgress,
  Fab,
  Pagination,
  Paper,
  Stack,
  Switch,
} from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import TextField from "@mui/material/TextField";
import Repositories from "components/Repositories";
import HomeIcon from "@mui/icons-material/Home";
import ApartmentIcon from "@mui/icons-material/Apartment";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
         {children}
        </Box>
      )}
    </div>
  );
}

const UserDetailPage: NextPage = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const [value, setValue] = useState(0);
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [counter, setCounter] = useState(0);
  const [order, setOrder] = useState("desc");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [first, setFirst] = useState(true);
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

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      //if search is empty dont do anything
      if (search === "") {
        return;
      }
      setLoading(true);
      getUsers();
      // Send Axios request here
    }, 3000);
  }, [search, page]);

  // make function to call api users from github api
  const getUsers = async () => {
    const response = await fetch(
      `https://api.github.com/search/users?q=${search}&order=${order}&page=${page}&per_page=10`
    );
    const data = await response.json();
    //set loading false after request
    setFirst(false);
    setLoading(false);
    setUsers(data.items);
    setCounter(data.total_count);
  };

  const handleChange = (event: any) => {
    setSearch(event.target.value);
    console.log(search);
  };
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  //create handle for page change
  return (
    <Box
      sx={{ pb: 7, display: "flex", height: "100vh", justifyContent: "center" }}
    >
      <Box
        // width={xl : "100%", lg : "100%", md : "100%", sm : "100%", xs : "100%"}
        sx={{
          width: { xl: "33%", lg: "33%", md: "33%", sm: "66%", xs: "100%" },
          height: "100vh",
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "column",

          backgroundColor: "#FFFFFF",

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
          <HomeIcon></HomeIcon>
          <Switch
            onChange={() =>
              setTheme(resolvedTheme === "light" ? "dark" : "light")
            }
          ></Switch>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src="https://images.unsplash.com/photo-1563298723-dcfebaa392e3"
            sx={{ width: 160, height: 160 }}
          />
          <Box>
          <Typography
            sx={{
              fontFamily: "Arsenal",
              fontSize: "26px",
              fontWeight: "700",
              lineHeight: "36px",
              letterSpacing: "0px",
              textAlign: "center",
            }}
          >
            Bob The
          </Typography>
          </Box>
          <Box>
          <Typography
            sx={{
              fontFamily: "Arsenal",
              fontSize: "24px",
              fontWeight: "400",
              lineHeight: "32px",
              letterSpacing: "0px",
              textAlign: "center",
            }}
          >
            @bobthe
          </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ApartmentIcon />
            <Typography
              sx={{
                fontFamily: "Jost",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "24px",
                letterSpacing: "0px",
                textAlign: "left",
              }}
            >
              Texas, US
            </Typography>
          </Box>
        </Box>
        <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            variant="fullWidth"
            onChange={handleTabChange}
            aria-label="basic tabs example"
          >
            <Tab label="Item One" {...a11yProps(0)} />
            <Tab label="Item Two" {...a11yProps(1)} />
            <Tab label="Item Three" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Box sx={{ height: "100vh", px: 2, mt: 5 }}>
            <Grid container spacing={2}>
              {data.map((item, index) => (
                <Grid item xs={6} md={6}>
                  <Repositories key={index} repoData={item}></Repositories>
                 
                </Grid>
              ))}
            </Grid>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        </Box>
      </Box>

      <Paper
        sx={{
          width: { xl: "33%", lg: "33%", md: "33%", sm: "66%", xs: "100%" },
          position: "fixed",
          bottom: 3,
        }}
        elevation={3}
      >
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
          onChange={(event, newValue) => {}}
        >
          <BottomNavigationAction
            label="Search"
            icon={
              <Link href="/">
                <RestoreIcon />
              </Link>
            }
          />
          <BottomNavigationAction
            label="Favorites"
            icon={
              <Link href="/liked">
                <FavoriteIcon />
              </Link>
            }
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
};
export default UserDetailPage;
