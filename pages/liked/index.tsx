/**/
import type { NextPage } from "next";
import { css } from "@emotion/react";
import { ReactNode, useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from 'next/link';
import Router from "next/router";

import Box from "@mui/material/Box";
import NoFavorite from "components/NoFavorite";
import { useTheme } from "next-themes";
import { Button, CircularProgress, Fab, Pagination, Paper, Stack, Switch } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import UserCards from "components/UserCards";

import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";

import TextField from "@mui/material/TextField";
import {  addFavorites ,removeFavorites,setSelectedUser,selectFavorites} from "app/store/slices/user";


const Liked: NextPage = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const [value, setValue] = useState(0);

  const [search, setSearch] = useState('');

  const dispatch = useDispatch();
  const users = useSelector(selectFavorites);
  const favList = useSelector(selectFavorites);


  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);



  const handlePageChange = (event:any,value:any) =>{
    setPage(value);
    console.log(value);
  }
 

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



  return (
    <Box sx={{ pb: 7, display: "flex",height: '100vh', justifyContent: "center" }}>
      <Box
        // width={xl : "100%", lg : "100%", md : "100%", sm : "100%", xs : "100%"}
        sx={{
          width: {xl : "33%", lg : "33%", md : "33%", sm : "66%", xs : "100%"},
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
          <Typography>Favorite</Typography>
          <Switch
            onChange={() =>
              setTheme(resolvedTheme === "light" ? "dark" : "light")
            }
          ></Switch>
        </Box>
     
        {!loading && users?.length === 0 && <Box sx={{ display: "flex",height: "100vh", justifyContent: "center",px: 2, mt: 5 }}>
          <NoFavorite value={search} />  
        </Box> }
        {!loading && users?.length > 0 && <Box sx={{ height: "100vh",px: 2, mt: 5 }}>
          <Grid container spacing={2}>
            {users.map((item, index) => (
              <Grid item xs={6} md={6}>
                <UserCards key={index} data={item} onClickDetail={handleCardDetail} status={favList.find(user => user.login === item.login) ? "fav" : "nofav"} onClickFavorite={handleFavorite} onClickRemoveFavorite={handleRemoveFavorite}></UserCards>
              </Grid>
            ))}
          </Grid>
         
        </Box>}
        
      </Box>

      <Paper sx={{  width: {xl : "33%", lg : "33%", md : "33%", sm : "66%", xs : "100%"}, position: "fixed", bottom: 3 }} elevation={3}>
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
         <BottomNavigationAction label="Search" icon={ <Link href="/"><RestoreIcon /></Link>} />
          <BottomNavigationAction label="Favorites" icon={<Link href="/liked"><FavoriteIcon /></Link>} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
};
export default Liked;
