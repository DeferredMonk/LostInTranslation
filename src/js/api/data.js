/**
 * This function fetch data of ***
 * @returns {Array<Object>} Array of objects
 */
const fetchData = async () => {
  let response = await fetch(`${process.env.REACT_APP_API_URL}/translations`);
  const result = await response.json();
  return result;
};

/**
 * Mitä tämä tekee?
 * @param {String} userName Mikä tämä on?
 * @returns {Object} Palauttaa kirjautuneen käyttäjän
 */
const fetchUser = async (userName) => {
  let response = await fetch(`${process.env.REACT_APP_API_URL}/translations`)
  let result = await response.json()
  result = result.find(user => user.username==userName)
  return result;
}

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

const patchData = (userId, toPatch) => {
  fetch(`${process.env.REACT_APP_API_URL}/translations/${userId}`, {
    method: "PATCH", // NB: Set method to PATCH
    headers: {
      "X-API-Key": process.env.REACT_APP_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // Provide new translations to add to user with id 1
      translations: toPatch
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Could not update translations history");
      }
      return response.json();
    })
    .then((updatedUser) => {
      console.log(updatedUser);
    })
    .catch((error) => {});
};

export { fetchData, fetchUser, postData, patchData };
