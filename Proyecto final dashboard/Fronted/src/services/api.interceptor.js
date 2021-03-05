function request(config) {
  config.headers['Authorization'] = localStorage.getItem('token') || '';
  return config
}

function response(error) {
  let status = error.response.status
  if (status === 401) logout()
  return Promise.reject(error)
}

function logout() {
  localStorage.clear();
  if (window.location.pathname !== '/auth/login') {
    location.reload()
  }
}

export { request, response }

// localStorage.setItem([key], [valor])
// localStorage.getItem([key])