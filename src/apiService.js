export const getUserData = async (userId) => {
  const url = `http://localhost:3000/user/${userId}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        'Erreur réseau lors de la récupération des données utilisateur',
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(
      'Erreur lors de la récupération des données utilisateur:',
      error,
    );
  }
};

export const getUserActivity = async (userId) => {
  try {
    const response = await fetch(
      `http://localhost:3000/user/${userId}/activity`,
    );
    if (!response.ok) {
      throw new Error(
        "Erreur réseau lors de la récupération des données d'activité",
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des données d'activité:",
      error,
    );
  }
};

export const getUserAverageSessions = async (userId) => {
  try {
    const response = await fetch(
      `http://localhost:3000/user/${userId}/average-sessions`,
    );
    if (!response.ok) {
      throw new Error(
        'Erreur réseau lors de la récupération des données de sessions moyennes',
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(
      'Erreur lors de la récupération des données de sessions moyennes:',
      error,
    );
  }
};
