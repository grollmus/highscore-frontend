const apiUrl = 'https://highscore.grollmus.local/api';

export const environment = {
  production: true,
  app: {
    title: 'Demo Highscore'
  },
  api: {
    players: `${apiUrl}/highscore/players`,
    auth: `${apiUrl}/auth`
  }
};
