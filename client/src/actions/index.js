export const GET_CHAMP_DATA = 'GET_CHAMP_DATA';
export const APPLY_TAG_FILTER = 'APPLY_TAG_FILTER';
export const CLEAR_CHAMP_LIST = 'CLEAR_CHAMP_LIST';

const callApi = async (path) => {
  const response = await fetch(path);
  const body = await response.json();
  if (response.status !== 200) throw Error(body.message);
  return body;
};

export function getChampsData() {
  return dispatch => {
    callApi('api/champions')
    // Async action succeeded...
    .then(res => {dispatch({ type: GET_CHAMP_DATA, payload: res.data })})
    // Async action failed...
    .catch(err => console.log(err));
  }
}

export function setFilterTypes(tag) {
  return (dispatch) => {
    dispatch({ type: APPLY_TAG_FILTER, payload: tag });
  };
}
