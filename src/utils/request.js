const b_url = "http://127.0.0.1:5000/"
// const b_url = "https://cloud-computing-group47.azurewebsites.net/"
export const getRequest = async (ep) => {
  const url = b_url + ep
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  }
  const result = await fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      if (data.result) {
        return data.result
      } else {
        throw data
      }
    })
    .catch((error) => error)

  return result
}

export const postRequest = async (ep, values) => {
  const url = b_url + ep
  const options = {
    method: "POST",
    headers: {
      //   Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify(values),
  }

  const result = await fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      if (data.result) {
        return data.result
      } else {
        throw data
      }
    })
    .catch((error) => error)

  return result
}

export const postUploadRequest = async (ep, fileBody) => {
  console.log(fileBody)
  const url = b_url + ep
  const options = {
    method: "POST",
    // headers: {
    //   // Accept: "application/json",
    //   "Content-Type": "multipart/form-data",
    // },
    body: fileBody,
  }

  const result = await fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      if (data.result) {
        return data.result
      } else {
        throw data
      }
    })
    .catch((error) => error)

  return result
}
