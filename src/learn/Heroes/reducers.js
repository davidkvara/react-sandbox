export function heroesReducer(state, action) {
  switch (action.type) {
    case "addHero":
      return { ...state, editingMode: false, selectedHero: action.hero };
    case "editHero":
      return { ...state, editingMode: true, selectedHero: action.hero };
    case "deleteHero":
      return {
        ...state,
        heroes: state.heroes.filter(hero => hero.id !== action.heroID),
        selectedHero: null
      };
    case "cancelAddHero":
      return { ...state, selectedHero: null, editingMode: false, hint: "" };
    case "saveEditedHero":
      return {
        ...state,
        heroes: action.editedHeros,
        selectedHero: null,
        hint: ""
      };
    case "saveNewHero":
      return {
        ...state,
        heroes: state.heroes.concat(state.selectedHero),
        selectedHero: null,
        hint: ""
      };
    case "handleChange":
      const { name, value } = action;
      return {
        ...state,
        selectedHero: { ...state.selectedHero, [name]: value }
      };
    case "displayHint":
      return { ...state, hint: "don't leave an empty input!!" };

    default:
      break;
  }
  return state;
}
