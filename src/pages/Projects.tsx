import { Box, Divider, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard";

export default function () {
  return (
    <Box display='flex'>
      <ProjectCard image='/images/gato.png'>
        <Typography variant="h5">
          HTML5, CSS3, Javascript, jQuery, PHP, MySQL 
        </Typography>
        <Divider/>
          gato is my senior project that I worked on with a partner. We developed the full-stack for the
          project. I was in charge of developing most of the back-end code and processes. This site allows
          users who have created a profile to interact with the website like a forum. Users can use BBCode
          to format their posts however they like. Users can also have ranks associated with their
          accounts that allow them to take disciplinary action on misbehaving users.

          gato is now hosted on my own machine using Docker.
      
      </ProjectCard>
      <ProjectCard image='/images/FF.png'>
        <Typography variant="h5">
          Android Development Kit, Java, XML, SQLite 
        </Typography>
        <Divider/>
          Fridge Friend is an Android application I made with a partner that is currently on the play store. It allows users to record their food products and the respective expiration dates into an SQLite database. The app is designed to make the user aware of any near expired food they have. The app also includes a shopping list and notepad. The goal of this application was to reduce the amount of wasted food that could have otherwise been used. While my partner focused on visual design and art, my role in Fridge Friend's development was implementing the SQLite database and all interaction and navigation. 
      </ProjectCard>
    </Box>
  )
}