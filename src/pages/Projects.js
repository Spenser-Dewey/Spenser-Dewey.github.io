import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Project from '../components/Project'
import Icon from '../images/TilingPattern.png'

const projectInfo = [
  {
    name: "Tabletop RPG Helper IP",
    imgNames: [],
    description: "Built to help players of tabletop RPG games keep track of NPCs, locations, and other information that comes up in a DND-type game. Tracks relationships between these things and screens to view relevant information all in one place. Not currently hosted anywhere.",
    link: "https://github.com/Spenser-Dewey/TRPGNoteTracker"
  },
  {
    name: "The Easy Animator",
    imgNames: ['EasyAnimator.png'],
    description: "A simple animation software written in java using swing. Reads in descriptions of animations from a text file, and can output an SVG describing the animation or play a visual representation of the animation. (School project, code available on request)",
    link: "",
  },
  {
    name: "Space Fighters",
    imgNames: ['SpaceFighters.PNG'],
    description: "Multiplayer spaceship game with powerups inspired by the Atari game 'Asteroids'. Built in javascript and typescript, using websockets. No longer hosted anywhere after Heroku ended free plans.",
    link: "https://github.com/Spenser-Dewey/SpaceFightersWithFriends",
  },
  {
    name: "Generic Cellular Automata",
    imgNames: ["cellular_automata_crystal_growth.jpg", "generic_cellular_automata_evoloops.jpg"],
    description: (<>This project is a program which can run any cellular automata, given it's set of rules. The most famous automata is probably
      <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">"Conway's Game of Life"</a>. Generally, for the purposes of this program, a cellular automata is a set of cells
      which can each be in some state from a finite set of states, and they can transition from that state into another state based on their own state and the state of their neighbors.
      We created 1D, 2D, and 3D cellular automata examples in the repository; rules are specified in JSON. The one that runs is the one labeled 'startup.json'. The above images are of a
      3D automata, and then a 2-dimensional automata based on 'evo-loops'.
    </>),
    link: "https://github.com/tiedyeguy/GenericCellularAutomata",
  },
  {
    name: "'Hackarona' Drink Catalog",
    imgNames: [],
    description: "Built as part of an AWS sponsored hackathon for Constellation Brands interns. This was a django website which gave cocktail recommendations based on which ingredients and Constellation products you owned. We allowed users to take photos of constellation products, and we would determine which product it was, and suggest recipes based on it. One of the goals was to use AWS services, so we hit as many as we reasonably could along the way; we ran the app on an EC2, we stored user images in S3 buckets, and we ran AWS lambdas to process the photos with AWS Textract, and finally logging to AWS cloudwatch. There was an existing collection of recipes that Constellation had put together, which we used. This website won Crowd Favorite at the hackathon.",
    link: "https://github.com/cbi-robschmidt/hackarona"
  },
];

const MAX_COL_PER_ROW = 3;

function Projects() {
  const projectGrid = []
  for (let idx = 0; idx < projectInfo.length; idx++) {
    if (idx % MAX_COL_PER_ROW === 0) {
      projectGrid.push([])
    }
    projectGrid[Math.floor(idx / MAX_COL_PER_ROW)].push(projectInfo[idx]);
  }
  return (
    <>
      <h1 className="p-3"> <span>
        <img className="pb-2" alt="Fun Icon" width="45px" src={Icon} />
        Projects
        <img className="pb-2" alt="Fun Icon" width="45px" src={Icon} />
      </span> </h1>
      <Container fluid>
        {projectGrid.map((projectRow, idx) =>
          <Row key={idx}>
            {projectRow.map((project) =>
              <Col key={project.name}>
                <Project name={project.name} description={project.description} link={project.link} imgNames={project.imgNames} />
              </Col>
            )}
          </Row>
        )}
      </Container >
    </>
  );
}

export default Projects;