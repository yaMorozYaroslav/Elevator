import axios from "axios";

export function loadColor(){
	return(dispatch)=>{
        return axios.get("http://localhost:8080/elevators")
                    .then((response)=>{
          dispatch(seeFloor(response.data.floor))
                    })
	}
}
export function seeFloor(floor){
	return{
		type: "SEE_FLOOR",
		floor:floor
	}
}