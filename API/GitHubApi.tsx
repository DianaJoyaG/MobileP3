// Function to check if a GitHub user exists and fetch their data
export async function checkGitHubUser(username: string) {
  const GITHUB_API_TOKEN = '';  // Directly specify your GitHub token

  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        'Authorization': `token ${GITHUB_API_TOKEN}`
      }
    });

    if (!response.ok) {
      throw new Error('GitHub user not found');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
