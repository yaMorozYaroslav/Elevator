export const getState = store => store.sides
export const getList = store => 
          getState(store)?getState(store).sides:[]
export const getSideById = (store, id) =>
             getState(store)?{...getState(store).byIds[id], id}:{}
export const getSides =(store)=> 
             getList(store).map((id)=>getSideById(store, id))