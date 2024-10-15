import { Box } from "@mui/material";
import ProjectCard from "./ProjectCard";

export default function () {
  const cards = [
    <ProjectCard
      title="Slag"
      image='/images/Slag.png'
      tags="Unity, C#, Blender "
    >
        Slag was my final project for the Unity course I attended in college. I was the sole developer
        for this project, and I learned vector math and raytracing while building this project.
    </ProjectCard>,
    <ProjectCard
      title="Procedural Generation in UE5"
      image='/images/ProceduralTest.gif'
      tags="Unreal Engine 5, C++, Blueprints, Multithreading "
    >
      I am currently exploring Unreal Engine 5 with the aspiration to make a complete game to ship.
      I got started by building an endlessly generating realm of cubes for the player to explore.
      It currently isn't much, but I have already learned so much about Unreal and am elated to have
      the opportunity to learn more. I look forward to how far I can take it.
    </ProjectCard>,
    <ProjectCard
      title="Druidic Calamity"
      image='/images/DC.png'
      tags="Unity, C# "
    >
      I was lucky enough to attend Texas A&M's yearly gamejam called Chillennium in 2018. My
      University sent one team of four to the Texas A&M campus to participate. That year's theme
      was "Transformation". Our idea was to have the player be a druid that can transform into
      different animals to solve puzzles. Unfortunately, our team did not use any organized version
      control. This caused us to spend needless time fixing compatibility errors involved with
      moving assets around. The final build of our game is broken and incomplete, but I am very
      happy to have had that experience.
    </ProjectCard>,
    <ProjectCard
      title="QWOP-Like game"
      image='/images/qwoplike.png'
      tags="HTML5, CSS3, Javascript, jQuery"
    >
       Inspired by the games by Bennete Foddy, I wanted to create a kind of game that was unique
       in the way that the player moved around. In this game, the player moves around by pointing
       a leg toward a surface, and propelling their foot into the surface to launch their body in
       the desired direction. For now, there is no real goal in the game. It is just a proof of concept.
    </ProjectCard>
  ]

  let numColumns = 2
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