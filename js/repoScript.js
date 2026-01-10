// 1. Select the DOM element where you want the list to appear
const repoList = document.getElementById('repoContainer');

// 2. Define the username
const username = 'matwal42083'; // Replace with your actual GitHub username if different

// 3. Fetch data using the Promise-based API
fetch(`https://api.github.com/users/${username}/repos`)
  .then(response => {
    // The API call completed successfully, but we need to check the status
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    // Convert the response to JSON
    return response.json();
  })
  .then(data => {
    // 'data' is now the array of repositories
    console.log('Repositories fetched:', data);
    
    // Clear current list
    repoList.innerHTML = '';

    // Loop through the data and create list items
    data.forEach(repo => {
      const listItem = document.createElement('li');
      // Create a link to the repo
      listItem.innerHTML = `<a href="${repo.html_url}" target="_blank" id="repo_link"><div id="div_Card">
      <div class="repo-name">
      <h3>${repo.name}</h3>
      </div>
      <div class="repo-description"><p>${repo.description || 'No description'} - </p></div>
      <div class="repo-stats" id="forks-counts">⭐ ${repo.stargazers_count} | 🍴 ${repo.forks_count}</div>
      <div class="repo-owner"> By: ${repo.owner.login}</div>
      <div class="repo-updated">${repo.updated_at}</div>
      </div></a>`;
      repoList.appendChild(listItem);
    });
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.error('Error fetching data:', error);
    repoList.innerHTML = '<li>Error loading repositories.</li>';
  });