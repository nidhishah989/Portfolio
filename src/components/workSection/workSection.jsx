import React, { useEffect, useState } from 'react';

const WorkSection = () => {
  const username = 'nidhishah989';
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        const data = await response.json();
        console.log(data.name + data.description)
        setRepos(data);
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
            <li key={repo.id}>
                {repo.description?"":
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name} {repo.description}
              </a>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WorkSection;
