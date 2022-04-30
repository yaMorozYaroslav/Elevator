export const getTodos = store =>
  getTodoList(store).map(id => getTodoById(store, id));
export const selectAllSides = state => state.sides.sides

export const selectSideById =(state, sideId)=>
             state.sides.sides.find(side => side.id === sideId)
             