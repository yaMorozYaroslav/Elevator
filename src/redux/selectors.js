export const getState = store => store.todos
export const getList = store => 
          store&&store.sides?store.sides.sides:[]
export const getSideById = (store, id) =>
             getState(store)?{...getState(store).byIds[id], id}:{}
export const getSides =(store)=> 
             getList(store).map((id)=>getSideById(store, id))