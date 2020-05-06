
export const setArtPiece = (title, id) => dispatch =>{
    var artPieceObject = {}
    artPieceObject['title'] = title;
    artPieceObject['id'] = id;
    dispatch({
        type: "SET_ART_PIECE",
        payload: artPieceObject
    })
};

export const resetArtPiece = () => dispatch => {
    dispatch({
        type: "RESET_ART_PIECE"
    })
};
