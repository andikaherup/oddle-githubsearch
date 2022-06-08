import * as React from "react";
// import { IPost } from "../types";
import Box from "@mui/material/Box";
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

type Props = {
  data: any;
};
const Post: React.FC<Props> = ({ data }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        bgcolor: "background.paper",
        overflow: "hidden",
        borderRadius: "10px",
        boxShadow: 2,
        fontWeight: "bold",
        height: 80,
      }}
    >
       
      <Box
        component="img"
        sx={{
          height: 64,
          width: 64,
          ml: 1
        
        }}
        alt="The house from the offer."
        src={data.avatar_url}
      />
      
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "flex-start" },
          m: 3,
          minWidth: { md: 350 },
        }}
      >
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton> */}
        <Box component="span" sx={{ fontSize: 16, mt: 1 }}>
          {data.login}
        </Box>

        <Box
          sx={{
            mt: 1.5,
          
            borderRadius: "5px",
            fontWeight: "medium",
            display: "flex",
            fontSize: 12,
            alignItems: "center",
            "& svg": {
              fontSize: 21,
              mr: 0.5,
            },
          }}
        >
          17,3K Followers
        </Box>
        <Box
          sx={{
         
          
            borderRadius: "5px",
            fontWeight: "medium",
            display: "flex",
            fontSize: 12,
            alignItems: "center",
            "& svg": {
              fontSize: 21,
              mr: 0.5,
            },
          }}
        >
          103 Following
        </Box>
      </Box>
    </Box>
  );
};

export default Post;
