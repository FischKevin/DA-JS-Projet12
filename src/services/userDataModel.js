export class UserDataModel {
  constructor(dataService) {
    this.dataService = dataService;
  }

  async getUserInfo(userId) {
    try {
      // Use the dataService to retrieve the user data from the API
      const userData = await this.dataService.getUserData(userId);
      return userData;
    } catch (error) {
      throw new Error('Unable to fetch user data from API');
    }
  }
}
