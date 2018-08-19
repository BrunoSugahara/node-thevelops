export function getData(path) {

  let url = 'http://localhost:3001';
  return new Promise((resolve, reject) => {
    fetch(url+path, {
        method: 'GET',
        headers: { "Content-Type": "application/json" },
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
