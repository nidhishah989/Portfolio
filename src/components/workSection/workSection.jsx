import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WorkSection = () => {
  const username = 'nidhishah989';
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [file, setfile] =useState([])

  useEffect(() => {
    
    const fetchRepos = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        const data = await response.json();
        console.log("DATA: ", data.name + data.description)
        const sortedRepos = [...data].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        setRepos(sortedRepos);

        const response1 = await fetch (`https://api.github.com/repos/${username}/Meeting-Scheduler/contents/file.json`)
        const data1 = await response1.json();
        setfile(data1)


        
      } catch (error) {
        console.error('Error fetching public repositories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div>
      <h1>GitHub Repositories for {username}</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {repos.map(repo => (
            repo.description &&  <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name} ---- {repo.created_at}
            </a>
            <p>{repo.description}</p> 
            <p> {file.content}</p>
          </li>
           
          ))}
        </ul>
      )}
    </div>
  );
};

export default WorkSection;
