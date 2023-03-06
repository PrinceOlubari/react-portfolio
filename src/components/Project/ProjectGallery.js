import React from "react";
import { CardGroup } from "react-bootstrap";
import Project from "./Project";




export default function ProjectGallery() {


  const projectItems = [
    {
        name: "project1",
        description: "test",
        link: "mygithublink.com"
    },
    {
        name: "project2",
        description: "test2",
        link: "mygithublink2.com"
    }
  ];



  const showProjects = projectItems.map((project) => {
    return (
      
      <Project
        name={project.name}
        description={project.description}
        link={project.link}
        
        />
    )
  })

  // return showProjects 


  return(<CardGroup>{showProjects}</CardGroup>)
}