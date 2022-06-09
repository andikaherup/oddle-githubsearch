import * as React from "react";
// import { IPost } from "../types";
import Box from "@mui/material/Box";
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Typography from "@mui/material/Typography";


type Props = {
  repoData: any;
};
const Repositories: React.FC<Props> = ({ repoData }) => {
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
        {/* <Box component="span" sx={{ fontSize: 16, mt: 1 }}>
          {data.login}
        </Box> */}

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
          <Typography >103 FOllowers</Typography>
          
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
          <Typography >103 Following</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Repositories;
