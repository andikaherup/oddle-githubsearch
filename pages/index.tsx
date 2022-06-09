/**/
import type { NextPage } from "next";
import { css } from "@emotion/react";
import { ReactNode, useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from 'next/link'
import Box from "@mui/material/Box";
import Router from "next/router";
import { useTheme } from "next-themes";
import { wrapper } from "app/store";
import { Button, CircularProgress, Fab, Pagination, Paper, Stack, Switch } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import TextField from "@mui/material/TextField";
import UserCards from "../components/UserCards";
import NoResult from "../components/NoResult";
import NoItem from "../components/NoItem";
import Grid from "@mui/material/Grid";
import { selectUsers, setSelectedUser,setUsers,addFavorites,selectFavorites, removeFavorites} from "app/store/slices/user";
import { useSelector, useDispatch } from "react-redux";
const Home: NextPage = (props: any) => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const dispatch = useDispatch();
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const [value, setValue] = useState(0);
  const userList =  useSelector(selectUsers);
  const favList = useSelector(selectFavorites);
  const [dataEmpty , setDataEmpty] = useState(false);
  const [search, setSearch] = useState('');
  const [counter, setCounter] = useState(0);
  const [order,setOrder] = useState('desc');
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [first , setFirst] = useState(true);
  const {resolvedUrl} = props;


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
    setFirst(false);
    if (data.items && data.items.length === 0) {
      setDataEmpty(true);
    }else {
      setDataEmpty(false);
    }
    setCounter(data.total_count);
    dispatch(setUsers(data.items));
    setLoading(false);
    console.log("data empty",dataEmpty, data, userList);
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
        {!loading  && !first && dataEmpty && <Box sx={{ display: "flex",height: "100vh", justifyContent: "center",px: 2, mt: 5 }}>
          <NoResult value={search} />  
        </Box> }
        {!loading && first && !dataEmpty && <Box sx={{ display: "flex",height: "100vh", justifyContent: "center",px: 2, mt: 5 }}>
          <NoItem />  
        </Box> }
        {!loading && userList && userList.length > 0 && <Box sx={{ height: "100vh",px: 2, mt: 5 }}>
          <Grid container spacing={2}>
            {userList.map((item, index) => (
              <Grid item xs={6} md={6}>
                <UserCards key={index} data={item} status={favList.find(user => user.login === item.login) ? "fav" : "nofav"} onClickDetail={handleCardDetail} onClickFavorite={handleFavorite} onClickRemoveFavorite={handleRemoveFavorite}></UserCards>
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
         <BottomNavigationAction label="Search" icon={ <Link href="/"><RestoreIcon /></Link>} />
          <BottomNavigationAction label="Favorites" icon={<Link href="/liked"><FavoriteIcon /></Link>} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(store => async ({resolvedUrl}) => {
  console.log(resolvedUrl)

  store.dispatch(setSelectedUser(resolvedUrl))
  return {
    props: {
      resolvedUrl
    }
  }
})

export default Home;
