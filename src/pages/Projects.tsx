import { Box, Button, useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import ProjectCard from "./ProjectCard";
import OpenIcon from '@mui/icons-material/OpenInNew';
import DownloadIcon from '@mui/icons-material/Download';

export default function () {
  const theme = useTheme();
  const cards = [
    <ProjectCard
      title="gato"
      image='/images/gato.png'
      tags="HTML5, CSS3, Javascript, jQuery, PHP, MySQL"
      href='http://72.128.4.45/gato/'
      buttons= {[
        <Button variant="contained" endIcon={<OpenIcon/>} sx={{maxWidth: '50%', m:1}} href='http://72.128.4.45/gato/' target='_blank'>
          View Demo
        </Button>
      ]}
    >
        gato is my senior project that I worked on with a partner. We developed the full-stack for the
        project. I was in charge of developing most of the back-end code and processes. This site allows
        users who have created a profile to interact with the website like a forum. Users can use BBCode
        to format their posts however they like. Users can also have ranks associated with their
        accounts that allow them to take disciplinary action on misbehaving users.
        gato is now hosted on my own machine using Docker.
    </ProjectCard>,
    <ProjectCard
      title="Fridge Friend"
      image='/images/FF.png'
      tags="Android Development Kit, Java, XML, SQLite"
      href='/Fridge Friend.apk'
      buttons= {[
        <Button variant="contained" startIcon={<DownloadIcon/>} sx={{maxWidth: '50%', m:1}} href='/Fridge Friend.apk'>
          Download APK
        </Button>
      ]}
    >
        Fridge Friend is an Android application I made with a partner that is currently on the play store.
        It allows users to record their food products and the respective expiration dates into an SQLite
        database. The app is designed to make the user aware of any near expired food they have. The app
        also includes a shopping list and notepad. The goal of this application was to reduce the amount
        of wasted food that could have otherwise been used. While my partner focused on visual design and
        art, my role in Fridge Friend's development was implementing the SQLite database and all interaction
        and navigation. 
    </ProjectCard>,
    <ProjectCard
      title="Domes"
      image='/images/domes.png'
      tags="HTML5, CSS3, Javascript, PHP, MySQL"
      href='http://72.128.4.45/Domes/'
      buttons= {[
        <Button variant="contained" endIcon={<OpenIcon/>} sx={{maxWidth: '50%', m:1, textDecoration: 'inherit'}} href='http://72.128.4.45/Domes/' target='_blank'>
          View Demo
        </Button>
      ]}
    >
        Domes is an E-Commerce website where a user can order many different varieties of hats by placing
        them in their cart. These hats and their details are all stored in a mysql database where data is
        retrieved by the server. The user interacts with the site by selecting a size and quantity of a
        particular hat and adding it to their cart. The cart dynamically calculates the total cost of the
        order as the user adds and removes items from it. Once the user submits their order, shipping
        information is recorded and stored on the database for a site administrator to view and manage.
        The site also records trends and statistics related to the orders placed.
    </ProjectCard>,
    <ProjectCard
      title="In Browser Orbit Simulator"
      image='/images/Orbit.png'
      tags="HTML5, CSS3, Javascript, jQuery"
      href="https://ianriley237.github.io/Orbit-Animation/"
      buttons= {[
        <Button variant="contained" endIcon={<OpenIcon/>} sx={{maxWidth: '50%', m:1}} href='https://ianriley237.github.io/Orbit-Animation/' target='_blank'>
          View Demo
        </Button>
      ]}
    >
        I am fascinated by the ever-expanding cosmos and astrophysics. As an excercise to myself, I wanted
        to explore astrophysics by creating this orbit simulator. My primary goal with this project is to
        investigate the N-body problem, the problem of predicting where celestial objects will be in a
        system of more than two objects. Currently (Aug 2024), I am working on a project to build a more
        accurate version that runs calculations in C++ with an interactive Next.js front-end. 
    </ProjectCard>
  ]

  let numColumns = useMediaQuery(theme.breakpoints.up('md')) ? 2 : 1
  let output = [];
  for (let index = 0; index < cards.length; index+=numColumns) {
    output.push(
      <Box display='flex' flexDirection='row'>
        {cards.slice(index, index+numColumns)}
      </Box>)
  }

  return (
    <Box display='flex' flexDirection='column'>
      {output}
    </Box>
  )
}