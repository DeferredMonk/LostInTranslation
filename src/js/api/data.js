/**
 * This function fetch data of ***
 * @returns {Array<Object>} Array of objects
 */
const fetchData = async () => {
  let response = await fetch(`${process.env.REACT_APP_API_URL}/translations`);
  const result = await response.json();
  return result;
};
const postData = async (toPost) => {
  fetch(`${process.env.REACT_APP_API_URL}/translations`, {
    method: "POST",
    headers: {
      "X-API-Key": process.env.REACT_APP_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(toPost),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Could not create new user");
      }
      return response.json();
    })
    .then((newUser) => {
      console.log(newUser);
    })
    .catch((error) => console.log(error));
};
export { fetchData, postData };
