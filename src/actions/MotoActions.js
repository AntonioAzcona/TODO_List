
export const AddActions = (moto) => (dispatch, getState) => {
    const {
        Moto: { motos },
    } = getState();

    const hasMoto = motos.find(element => element.moto === moto);

    if(!hasMoto && moto !== ''){
        dispatch({
            type: "AddMoto",
            payload: [{ id: moto, moto }, ...motos]
        });
    }
};

export const RemoveActions = (moto) => (dispatch, getState) => {
    const {
        Moto: { motos },
    } = getState();

    dispatch({
        type: "DeleteMoto",
        payload: motos.filter((elemento) => elemento.id !== moto.id),
    });
};