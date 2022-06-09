/**/
import type { NextPage } from "next";
import { css } from "@emotion/react";
import { ReactNode, useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import Box from "@mui/material/Box";
import { wrapper } from "app/store";
import Router from "next/router";

import NoFavorite from "components/NoFavorite";
import { useTheme } from "next-themes";
import Avatar from "@mui/material/Avatar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import { selectUsers, setSelectedUser,setUsers,addFavorites,selectSelectedUser,removeFavorites,selectFavorites} from "app/store/slices/user";

import { useSelector, useDispatch } from "react-redux";
import { useRouter } from 'next/router'
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
import UserCards from "components/UserCards";

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
  //set router query  id to user id
  const router = useRouter()
  const userId = router.query.id
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const user = useSelector(selectSelectedUser);
  const favList = useSelector(selectFavorites);
  const [userDetail, setUserDetail] = useState(user);
  const [loading, setLoading] = useState(false);
  const [userRepo, setUserRepo] = useState([]);
  const [userFollowers, setUserFollowers] = useState<any[]>([]);
  const [userFollowing, setUserFollowing] = useState<any[]>([]);
 
  //run getUerDetail function when the page is loaded
  useEffect(() => {

    //if user login not equal to query param, get user detai
      getUserDetail();
    
  }, []);
  const handleCardDetail = (user:any) =>{
    dispatch(setSelectedUser(user));
    //go to user detail page
    Router.push(`/users/${user.login}`);

  }
  const handleFavorite = (user:any) =>{
    dispatch(addFavorites(user));
  }
  const handleRemoveFavorite = (user:any) =>{

    dispatch(removeFavorites(user));
  }

  // make function to call api users from github api
  const getUserDetail = async () => {
    const response = await fetch(
      `https://api.github.com/users/${userId}`
    );
    const data = await response.json();
    setUserDetail(data);
    //fetch multiple api at the same time
    const response2 = await Promise.all([
      fetch(data.repos_url),
      fetch(data.followers_url),
      fetch(data.following_url.split("following")[0]+'following'),
    ]);
    //devide response 2 into repo, followers and following
    const [repo, followers, following] = await Promise.all(
      response2.map((res) => res.json())
    );
    setUserRepo(repo);
    setUserFollowers(followers);
    setUserFollowing(following);
    
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
            src={userDetail?.avatar_url}
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
            {userDetail?.name}
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
            {userDetail?.login}
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
              {userDetail?.location}
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
            <Tab label={`Repositories ${userDetail?.followers}` } {...a11yProps(0)} />
            <Tab label={`Followers ${userDetail?.followers}`} {...a11yProps(1)} />
            <Tab label={`Following ${userDetail?.following}`} {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Paper sx={{ height: "100vh", px: 2, mt: 5 ,overflow: 'auto'}}>
            <Grid container spacing={2}>
              {userRepo.map((repo) => (
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <Repositories repoData={repo}></Repositories>
                  </Grid>
              ))}
            </Grid>
          </Paper>
        </TabPanel>
        <TabPanel value={value} index={1}>
        <Paper sx={{ height: "100vh", px: 2, mt: 5 ,overflow: 'auto'}}>
            <Grid container spacing={2}>
              {userFollowers.map((item,index) => (
                <Grid item xs={12} sm={6} md={6} lg={6}>
                <UserCards key={index} data={item} onClickDetail={handleCardDetail} status={favList.find(user => user?.login === item?.login) ? "fav" : "nofav"} onClickFavorite={handleFavorite} onClickRemoveFavorite={handleRemoveFavorite}></UserCards>
                  </Grid>
              ))}
            </Grid>
          </Paper>
        </TabPanel>
        <TabPanel value={value} index={2}>
        <Paper sx={{ height: "100vh", px: 2, mt: 5 ,overflow: 'auto'}}>
            <Grid container spacing={2}>
              {userFollowing.map((item,index) => (
                <Grid item xs={12} sm={6} md={6} lg={6}>
                <UserCards key={index} data={item} onClickDetail={handleCardDetail} status={favList.find(user => user?.login === item?.login) ? "fav" : "nofav"} onClickFavorite={handleFavorite} onClickRemoveFavorite={handleRemoveFavorite}></UserCards>
                  </Grid>
              ))}
            </Grid>
          </Paper>
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

export const getServerSideProps = wrapper.getServerSideProps(store => async ({resolvedUrl}) => {


  store.dispatch(setSelectedUser(resolvedUrl))
  return {
    props: {
      resolvedUrl
    }
  }
})
export default UserDetailPage;
