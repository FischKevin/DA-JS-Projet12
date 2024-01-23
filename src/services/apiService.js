export class ApiDataService {
  async getUserData(userId) {
    // HTTP GET request to the API
    const response = await fetch(`http://localhost:3000/user/${userId}`);
    if (!response.ok) {
      throw new Error('Unable to fetch user data from API');
    }
    const userData = await response.json();
    return userData.data;
  }
}

export const getUserData = async (userId) => {
  const url = `http://localhost:3000/user/${userId}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Error while retrieving user data from API');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error while retrieving user data from API', error);
  }
};

export const getUserActivity = async (userId) => {
  try {
    const response = await fetch(
      `http://localhost:3000/user/${userId}/activity`,
    );
    if (!response.ok) {
      throw new Error('Error while retrieving activity data from API');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error while retrieving activity data from API', error);
  }
};

export const getUserAverageSessions = async (userId) => {
  try {
    const response = await fetch(
      `http://localhost:3000/user/${userId}/average-sessions`,
    );
    if (!response.ok) {
      throw new Error('Error while retrieving average session data from API');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(
      'Error while retrieving average session data from API',
      error,
    );
  }
};

export const getUserPerformance = async (userId) => {
  try {
    const response = await fetch(
      `http://localhost:3000/user/${userId}/performance`,
    );
    if (!response.ok) {
      throw new Error('Error while retrieving performance data from API');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error while retrieving performance data from API', error);
  }
};
