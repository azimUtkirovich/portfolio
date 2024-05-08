import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";

import "../styles/Projects.css";

import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation("global");

  return (
    <div className="projects">
      <h1>{t("content.title")}</h1>
      <p> {t("content.subtitle")} </p>
      <div className="projectList">
        {ProjectList.map((project, index) => {
          return (
            <ProjectItem
              id={index}
              name={project.name}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
