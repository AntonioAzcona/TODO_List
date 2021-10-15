
export const MotoReducer = (state = { motos: [] }, action) => {
    switch (action.type) {
        case "AddMoto":
            return { motos: action.payload };
        
        case "DeleteMoto":
            return { motos: action.payload };
    
        default:
            return state;
    }
};