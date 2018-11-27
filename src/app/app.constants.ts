export const constants = {

  localStorageUserLoginKey: 'ng-spring-login',
  baseUrl: 'http://localhost:3000',

  apiUrl: {
    signin: '/signin',
    signup: '/signup',

    disasters: {
      all:  '/disasters',
      save: '/disaster',
      update: '/disaster/',
      delete: '/disaster/',
      get: '/disaster/'
    }
  },

  pageUrl: {
    signin: 'signin',
    signup: 'signup',
    disasters: 'disasters',
    disasterDetails: 'disaster-detail/:id',
    disasterEdit: 'disaster-edit/:id',
    disasterCreate: 'disaster-create'
  },

  apiRequestHeaders: {
    default: {
      contentType: 'application/json',
      source: 'Web',
      ifModifiedSince: '0',
      cacheControl: 'no-cache',
      pragma: 'no-cache'
    }
  },

  apiRequestHeaderKeys: {
    contentType: 'Content-Type',
    authorization: 'Authorization',
    xAuthorization: 'X_AUTHORIZATION',
    source: 'X_SOURCE',
    authToken: 'x_auth_token',

    ifModifiedSince: 'If-Modified-Since',
    cacheControl: 'Cache-Control',
    pragma: 'Pragma'
  },

  errors: {
    unExpected: "An unexpected Error Occurred"
  }

};
