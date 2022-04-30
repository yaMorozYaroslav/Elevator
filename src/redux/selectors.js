export const selectAllSides = state => state.sides.sides

export const selectSideById =(state, sideId)=>
             state.sides.sides.find(side => side.id === sideId)
export const getAllSides = state =>
  selectAllSides(state).map(id => selectSideById(state, id));