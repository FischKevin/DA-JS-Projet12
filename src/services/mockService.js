import mockData from '/src/services/mockData.json';

export class MockDataService {
  async getUserData(userId) {
    if (mockData[userId]) {
      return mockData[userId].userInfo;
    } else {
      throw new Error('Utilisateur introuvable dans les données mockées');
    }
  }
}
