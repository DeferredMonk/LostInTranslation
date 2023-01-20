/**
 * This function fetch data of ***
 * @returns {Array<Object>} Array of objects
 */
const fetchData = async () => {
    let response = await fetch(`${process.env.REACT_APP_API_URL}/translations`)
    const result = await response.json()
    return result

}
export default fetchData