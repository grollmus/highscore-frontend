const apiUrl = 'https://highscore.grollmus.local/api';

export const environment = {
  production: true,
  demo: true,
  app: {
    title: 'Demo Highscore'
  },
  api: {
    players: `${apiUrl}/highscore/players`,
    auth: `${apiUrl}/auth`
  }
};
