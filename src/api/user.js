import { basePath, apiVersion } from './config'

export function signUpApi(data) {
  const url = `${basePath}/${apiVersion}/signUp`
  const params = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  var responseClone
  return fetch(url, params)
    .then(response => {
      responseClone = response.clone()
      return response.json()
    })
    .then(
      result => {
        if (result.user) {
          return { ok: true, message: 'Usuario creado correctamente' }
        }
        return { ok: false, message: result.message }
      },
      function (rejectionReason) {
        // 3
        console.log('Error parsing JSON from response:', rejectionReason, responseClone) // 4
        responseClone
          .text() // 5
          .then(function (bodyText) {
            console.log('Received the following instead of valid JSON:', bodyText) // 6
          })
      }
    )
    .catch(err => {
      console.log(err)
      return { ok: false, message: err.message }
    })
}

export function signInApi(data) {
  const url = `${basePath}/${apiVersion}/signIn`
  const params = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  return fetch(url, params)
    .then(response => {
      return response.json()
    })
    .then(result => {
      console.log(result)

      return result
    })
    .catch(err => {
      return err.message
    })
}
