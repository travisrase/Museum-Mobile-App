const initialState = {
    title: '',
    id: null
};

export const artPieceScreenReducer = (state = initialState, action) => {
    switch(action.type) {
        case('SET_ART_PIECE'):
            return {
                title: action.payload.title,
                id: action.payload.id
            }
        case("RESET_ART_PIECE"):
            return initialState;
        default:
            return state;
    }
}