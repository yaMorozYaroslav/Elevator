export const getTodoList = store =>
  store && store.todos ? store.todos.allIds : [];

export const getTodoById = (store, id) =>
  store && store.todos && store.todos.byIds
    ? { ...store.todos.byIds[id], id }
    : {};


export const getTodos = store =>
  getTodoList(store).map(id => getTodoById(store, id));
export const selectAllSides = state => state.sides.sides

export const selectSideById =(state, sideId)=>
             state.sides.sides.find(side => side.id === sideId)
             