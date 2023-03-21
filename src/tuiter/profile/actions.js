const UPDATE_LOCATION = 'UPDATE_LOCATION';
const updateLocation = (id, value) => {
  return {
    type: UPDATE_LOCATION,
    payload: {id, value}
  }
}
export default