const host = 'http://localhost:3000';

export const environment = {
  production: false,
  demo: false,
  app: {
    title: 'Unicorn Highscore'
  },
  api: {
    players: `${host}/highscore/players`,
    auth: `${host}/auth`,
    archive: `${host}/highscore/archive`
  }
};
