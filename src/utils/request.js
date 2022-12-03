const b_url = "http://127.0.0.1:5000/"
export const getRequest = (ep) => {
  const url = b_url + ep
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  }
  fetch(url, options).then((response) => console.log(response))
  // .then((data) => {
  //   return data
  // })
  return true
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
