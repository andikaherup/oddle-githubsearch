
import * as React from "react";
// import { IPost } from "../types";
import Box from "@mui/material/Box";
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Typography from "@mui/material/Typography";
     
     
const NoItem: any = ({}) => { 
  return (
      <Box
        sx={{
          height: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          top : 20
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
  )
}
export default NoItem