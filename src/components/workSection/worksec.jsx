import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Project from './project';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const username = "nidhishah989"
   
  const fetchData = async () => {
    try {
      // Fetch public repositories 
      const repoResponse = await axios.get(`https://api.github.com/users/${username}/repos`);

      // Filter repositories that have a description
      const reposWithDescription = repoResponse.data.filter(repo => repo.description);

      console.log(reposWithDescription)

      //sorted repos
      const sortedRepos = reposWithDescription.sort((a,b)=> new Date(b.created_at)- new Date(a.created_at));
      
      // Iterate through each repository with a description
      const repos = await Promise.all(sortedRepos.map(async (repo) => {
        // Fetch the content of the JSON file in the master branch
        try {
          let jsonFileResponse = await axios.get(`https://raw.githubusercontent.com/nidhishah989/${repo.name}/master/file.json`);

          if (jsonFileResponse.status === 200){
              
              console.log("MAIN JSON",jsonFileResponse.data)
              console.log("MAIN JSON",jsonFileResponse.data.title)
            //   console.log(JSON.parse(jsonFileResponse.data))
              const jsonData = jsonFileResponse.data;
              
              console.log("JSON DATA",jsonData)
              console.log(jsonData.title)
              console.log(jsonData.description)
              console.log(jsonData.tools)
              const projectInfo = {
              title: jsonData.title,
              description: jsonData.description,
              tools: jsonData.tools,
              githubUrl: repo.html_url,
              demoUrl: jsonData.demoUrl || null, // Adjust based on your JSON structure
              };

          console.log(projectInfo)
          return projectInfo;
          }

        } catch (error) {
          console.error(`Error fetching JSON for ${repo.name}:`, error);
          return null;
        }
      }));
      
      console.log("REPOS",repos)
      // Filter out null values (repositories without a valid JSON file)
      const filteredProjects = repos.filter(proj => proj !== null);

      // // Set the state with the filtered projects
      setProjects(filteredProjects);
      console.log(projects)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  

  useEffect(() => {
    

    fetchData();
  },[]);

  return (
    <div className='container'>
      <h1>My Projects</h1>
      <div className='row'>
        {projects.map((proj, index) => (
           
            <Project key={index} gitrepoproject={proj}></Project>
            // <div className='card' key={index}>
            //     <div class="card-header">{project.title}</div>
            //     <h2>{project.title}</h2>
            //     <p>{project.description}</p>
            //     <p>Tools: {project.tools}</p>
            //     <p>GitHub URL: <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">{project.githubUrl}</a></p>
            //     {project.demoUrl && <p>Demo URL: <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">{project.demoUrl}</a></p>}
            // </div>
        ))}
      </div>

    </div>
  );
};

export default ProjectList;
