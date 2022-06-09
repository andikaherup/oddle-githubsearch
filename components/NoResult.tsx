
import * as React from "react";
// import { IPost } from "../types";
import Box from "@mui/material/Box";
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Typography from "@mui/material/Typography";
import SearchIcon from '@mui/icons-material/Search';
     
type Props = {
    value: any;
  };
const NoResult: React.FC<Props>  = ({value}) => { 
  return (
      <Box
        sx={{
          height: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          top: "30%"
        }}
      >
        <SearchIcon />
      
        <Typography variant="body2" px={5} align="center">
          No search result found for
        </Typography>
        <Typography variant="body2" px={5} align="center" sx={{ fontWeight : "bolder" }}>
          {value}
        </Typography>
      </Box>
  )
}
export default NoResult