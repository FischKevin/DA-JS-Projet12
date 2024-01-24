import { ApiDataService } from '/src/services/apiService';
import { MockDataService } from '/src/services/mockService';
import { useMockData } from '/src/config';

export class UserDataModel {
  constructor() {
    this.dataService = useMockData
      ? new MockDataService()
      : new ApiDataService();
  }

  async getUserInfo(userId) {
    try {
      const userData = await this.dataService.getUserData(userId);
      return userData;
    } catch (error) {
      console.error(
        'Error while retrieving user data from data service:',
        error,
      );
      throw error;
    }
  }
  async getUserActivity(userId) {
    try {
      const userActivity = await this.dataService.getUserActivity(userId);
      return userActivity;
    } catch (error) {
      console.error(
        'Error while retrieving user activity from data service:',
        error,
      );
      throw error;
    }
  }

  async getUserAverageSessions(userId) {
    try {
      const userAverageSessions =
        await this.dataService.getUserAverageSessions(userId);
      return userAverageSessions;
    } catch (error) {
      console.error(
        'Error while retrieving user average sessions from data service:',
        error,
      );
      throw error;
    }
  }

  async getUserPerformance(userId) {
    try {
      const userPerformance = await this.dataService.getUserPerformance(userId);
      return userPerformance;
    } catch (error) {
      console.error(
        'Error while retrieving user performance from data service:',
        error,
      );
      throw error;
    }
  }
}
