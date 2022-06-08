/**/
import type { NextPage } from "next";
import { css } from "@emotion/react";
import { ReactNode, useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTheme } from "next-themes";
import { Button, CircularProgress, Fab, Pagination, Paper, Stack, Switch } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import TextField from "@mui/material/TextField";
import UserCards from "../components/UserCards";
import NoItem from "../components/NoItem";
import Grid from "@mui/material/Grid";
import ArchiveIcon from "@mui/icons-material/Archive";
import { AnyAction } from "@reduxjs/toolkit";
import { setDefaultResultOrder } from "dns";
const Home: NextPage = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const [value, setValue] = useState(0);
  const [users,setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [counter, setCounter] = useState(0);
  const [order,setOrder] = useState('desc');
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
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
  const [query, setQuery] = useState('spiderman') //Value to look for when submit

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      //if search is empty dont do anything
      if (search === '') {
        return;
      }
      setLoading(true);
      getUsers()
      // Send Axios request here
    }, 3000)
     
  }, [search,page])

  // make function to call api users from github api
  const getUsers = async () => {
    
    const response = await fetch(
      `https://api.github.com/search/users?q=${search}&order=${order}&page=${page}&per_page=10`
    );
    const data = await response.json();
    //set loading false after request
    setLoading(false);
    setUsers(data.items);
    setCounter(data.total_count);
  };

  const handleChange = (event:any) =>{
    setSearch(event.target.value);
    console.log(search);
 }
 //create handle for page change
  const handlePageChange = (event:any,value:any) =>{
    setPage(value);
    console.log(value);
  }



  return (
    <Box sx={{ pb: 7, display: "flex", justifyContent: "center" }}>
      <Box
        // width={xl : "100%", lg : "100%", md : "100%", sm : "100%", xs : "100%"}
        sx={{
          width: {xl : "33%", lg : "33%", md : "33%", sm : "66%", xs : "100%"},
          height: "fit-content",
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
            onChange={handleChange}
            value={search}
          />
        </Box>
       
        {loading && <Box sx={{ display:"flex" ,height: "100vh", flexDirection: "column" ,justifyContent: "center",alignItems: 'center'}}>
          <CircularProgress color="secondary"
           />  <Typography>Loading...</Typography></Box>}
        {!loading && users && users.length === 0 && <Box sx={{ display: "flex",height: "100vh", justifyContent: "center",px: 2, mt: 5 }}>
          <NoItem />  
        </Box> }
        {!loading && users && users.length > 0 && <Box sx={{ height: "100vh",px: 2, mt: 5 }}>
          <Grid container spacing={2}>
            {users.map((item, index) => (
              <Grid item xs={6} md={6}>
                <UserCards key={index} data={item}></UserCards>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ pt: 4, display:'flex',justifyContent: 'center' ,pb: 1}}>
            <Stack spacing={2}>
              <Pagination count={10} variant="outlined" page={page} onChange={handlePageChange} />
            </Stack>
          </Box>
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
          <BottomNavigationAction label="Search" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
};
export default Home;
