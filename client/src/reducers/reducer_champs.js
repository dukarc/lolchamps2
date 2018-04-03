import { GET_CHAMP_DATA, APPLY_TAG_FILTER } from '../actions/index';

const IMAGE_URL_BASE = 'http://ddragon.leagueoflegends.com/cdn/8.6.1/img/champion/';
const DETAILS_URL_BASE = 'http://beta.champion.gg/champion/';
const CHAMP_TYPES = ['All', 'Fighter', 'Mage', 'Support', 'Tank'];

const INITIAL_STATE = {
  champsAllData: {},
  champsList: [],
  champsTypes: CHAMP_TYPES,
};

//Sets the champsList to all Champs
//Also defines the champsList Object fields
function resetChampsList(champsObj) {
  return Object.keys(champsObj).map(key =>
    Object({
      id: champsObj[key].id,
      name: champsObj[key].name,
      image: `${IMAGE_URL_BASE}${champsObj[key].image.full}`,
      details: `${DETAILS_URL_BASE}${champsObj[key].name}`,
      tags: champsObj[key].tags,
    })
  );
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_CHAMP_DATA: {
      const champsObj = action.payload.data;
      //sets the champs list on the initial load
      const champsList = resetChampsList(champsObj);
      return {
        ...state,
        champsList,
        champsAllData: champsObj,
      };
    }
    case APPLY_TAG_FILTER: {
      if (action.payload === 'All') {
        return {
          ...state,
          champsList: resetChampsList(state.champsAllData),
        };
      }
      const allChamps = resetChampsList(state.champsAllData);
      const newChampsList = allChamps.filter((champ) =>
        champ.tags.includes(action.payload)
      );
      return {
        ...state,
        champsList: newChampsList,
      };
    }
    default:
      return state;
  }
}
