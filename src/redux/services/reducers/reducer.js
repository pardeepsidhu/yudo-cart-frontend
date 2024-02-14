
export const  search=(data="",action)=>{
    switch(action.type){
        case "SEARCH":
            return {data:action.data}
            default:
                return data
    }
}

