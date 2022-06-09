
import * as React from "react";
// import { IPost } from "../types";
import Box from "@mui/material/Box";
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Typography from "@mui/material/Typography";
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
     
     
const NoFavorite: any = ({}) => { 
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
       <SupervisorAccountIcon />
        <Typography variant="body2" px={5} align="center">
        Once you like people, you'll see them here.
        </Typography>
      </Box>
  )
}
export default NoFavorite