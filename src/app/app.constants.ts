// It holds all constants related to app
export const constants = {

  baseUrl: 'http://localhost:3000',

  apiUrl: {
    signin: '/signin',
    signup: '/signup',

    disasters: {
      all:  '/disasters',
      save: '/disaster',
      update: '/disaster/',
      delete: '/disaster/',
      get: '/disaster/',
      topFiveByDeaths: '/topFiveDisastersByDeath'
    }
  },

  pageUrl: {
    signin: 'signin',
    signup: 'signup',
    disasters: 'disasters',
    disasterDetails: 'disaster-detail/:id',
    disasterEdit: 'disaster-edit/:id',
    disasterCreate: 'disaster-create',
    topFiveDisastersByDeath: 'top-five-disasters-by-death'
  },

  errors: {
    unExpected: "An unexpected Error Occurred"
  }

};
