import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import Chrome from "@material-ui/icons/OpenInBrowser";

import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} alt={project.name} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <div className="links">
        <GitHubIcon
          style={{ cursor: "pointer" }}
          onClick={() => window.open(project.gitLink)}
        />
        <Chrome
          style={{ cursor: "pointer" }}
          onClick={() => window.open(project.demo)}
        />
      </div>
    </div>
  );
}

export default ProjectDisplay;
