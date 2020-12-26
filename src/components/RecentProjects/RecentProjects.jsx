/* eslint-disable */
import React from "react"
import useRecentProjects from '../../hooks/useRecentProjects';
import { Button } from "../../helpers/Button/Button"
import { ThemeProvider } from "styled-components"
import {
  ProjectCard,
  ProjectContainer,
  ProjectWrap,
  ProjectFlex,
  ProjectTitle,
  Links,
  TechWrap,
  GithubLink,
  SiteLink,
  ButtonWrap,

} from "./RecentProjectsElements"

const RecentProjects = ({ theme }) => {
 
  const project = useRecentProjects();

  return (
    <ThemeProvider theme={theme}>
      <>
        <ProjectWrap>
          <ProjectTitle>Recent Projects</ProjectTitle>
          <ProjectFlex>
            <ProjectContainer>
              {project.map((project) => ( 
                  <ProjectCard key={project.id}>
                  <h1>{project.title}</h1>
                  <p>{project.excerpt}</p>
                  <ButtonWrap>
                  <Button to={project.slug}>Go to project</Button>
                  </ButtonWrap>
                  <TechWrap>
                    <p>Technologies used: </p>
                    <span> {project.technology}</span>
                  </TechWrap>
                  <Links>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      referrer="noreferrer noopener"
                    >
                      {project.githubLink ? <GithubLink /> : ""}
                    </a>
                    <a
                      href={project.siteLink}
                      target="_blank"
                      referrer="noreferrer noopener"
                    >
                      {project.siteLink ? <SiteLink /> : ""}
                    </a>
                  </Links>
                </ProjectCard>
              ))}
            </ProjectContainer>
          </ProjectFlex>
        </ProjectWrap>
      </>
    </ThemeProvider>
  )
}
export default RecentProjects
