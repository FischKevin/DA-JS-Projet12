import mockData from '/src/services/mockData.json';

export class MockDataService {
  async getUserData(userId) {
    if (mockData[userId]) {
      return mockData[userId].userInfo;
    } else {
      throw new Error('Utilisateur introuvable dans les données mockées');
    }
  }

  async getUserActivity(userId) {
    if (mockData[userId] && mockData[userId].userActivity) {
      // Encapsulate activity data in a 'data' object to match API format
      return { data: mockData[userId].userActivity };
    } else {
      throw new Error(
        "Données d'activité introuvables dans les données mockées",
      );
    }
  }

  async getUserAverageSessions(userId) {
    if (
      mockData[userId] &&
      mockData[userId].averageSessions &&
      mockData[userId].averageSessions.sessions
    ) {
      // Encaspulate average sessions data in a 'data' object to match API format
      return { data: { sessions: mockData[userId].averageSessions.sessions } };
    } else {
      throw new Error(
        'Données de sessions moyennes introuvables dans les données mockées',
      );
    }
  }

  async getUserPerformance(userId) {
    if (mockData[userId] && mockData[userId].performance) {
      // Encapsuate performance data in a 'data' object to match API format
      return { data: mockData[userId].performance };
    } else {
      throw new Error(
        'Données de performance introuvables dans les données mockées',
      );
    }
  }
}
