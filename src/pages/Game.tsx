import { Box, Divider, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard";

export default function () {
  return (
    <Box display='flex'>
      <ProjectCard image='/images/Slag.png'>
        <Typography variant="h5">
          Unity, C#, Blender 
        </Typography>
        <Divider/>
        Slag was my final project for the Unity course I attended in college. I was the sole developer for this project, and I learned vector math and raytracing while building this project.
      </ProjectCard>
      <ProjectCard video='/videos/ProceduralTest.mp4'>
        <Typography variant="h5">
          Unreal Engine 5, C++, Blueprints, Multithreading 
        </Typography>
        <Divider/>
        I am currently exploring Unreal Engine 5 with the aspiration to make a complete game to ship. I got started by building an endlessly generating realm of cubes for the player to explore. It currently isn't much, but I have already learned so much about Unreal and am elated to have the opportunity to learn more. I look forward to how far I can take it. 
      </ProjectCard>
    </Box>
  )
}