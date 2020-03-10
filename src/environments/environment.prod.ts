const apiUrl = 'https://highscore.grollmus.local/api';

export const environment = {
  production: true,
  app: {
    title: 'Grollmus Highscore'
  },
  api: {
    players: `${apiUrl}/highscore/players`,
    auth: `${apiUrl}/auth`,
    archive: `${apiUrl}/highscore/archive`,
    score: `${apiUrl}/highscore/score`
  }
};
