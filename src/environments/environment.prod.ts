const apiUrl = 'https://highscore.grollmus.local/api';

export const environment = {
  production: true,
  demo: false,
  app: {
    title: 'Grollmus Highscore'
  },
  api: {
    players: `${apiUrl}/highscore/players`,
    auth: `${apiUrl}/auth`
  }
};
