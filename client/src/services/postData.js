export function postData(path, userData) {

  let url = 'http://localhost:3001';
  return new Promise((resolve, reject) => {
    fetch(url+path, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData)
    })
    .then((res) => res.json())
    .then((resJson) => {
      console.log(resJson);
      return resJson;
    })
    .catch((error) => {
      reject(error);
    })
  });
}
