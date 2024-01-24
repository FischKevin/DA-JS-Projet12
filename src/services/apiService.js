export class ApiDataService {
  async getUserData(userId) {
    try {
      const response = await fetch(`http://localhost:3000/user/${userId}`);
      if (!response.ok) {
        throw new Error('Unable to fetch user data from API');
      }
      const userData = await response.json();
      return userData.data;
    } catch (error) {
      console.error('Error while retrieving user data from API', error);
      throw error;
    }
  }

  async getUserActivity(userId) {
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
      throw error;
    }
  }

  async getUserAverageSessions(userId) {
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
  }

  async getUserPerformance(userId) {
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
  }
}
