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
          alignItems:  "flex-start", 
          justifyContent: "flex-start",
          padding: "10px",
        }}
      >
       
        <Box component="span" sx={{ fontSize: 16,lineHeight: '24px' }}>
          {repoData.name}
        </Box>

        <Box
          sx={{
            borderRadius: "5px",
            fontWeight: "medium",
            display: "flex",
            top: '34px',
            alignItems: "center",
          }}
        >
          <Typography sx={{fontSize: '12px'}}>{repoData.stargazers_count} stars</Typography>
          
        </Box>
        <Box
          sx={{
            borderRadius: "5px",
            fontWeight: "medium",
            display: "flex",
            alignItems: "center",
           
          }}
        >
          <Typography sx={{ fontSize: '12px'}}>{repoData.forks_count} forks</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Repositories;
