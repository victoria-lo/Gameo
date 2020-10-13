export const initialState = {
    // holds the auth user data if not null
    userData: {
        name: "",
        email: "",
        games: [],
        wishlist: [],
    },
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "USER_DATA":
            return {
                ...state,
                userData: action.payload,
            };
        case "GAMES":
            return {
                ...state,
                userData: { ...state.userData, games: action.payload },
            }
        case "WISHLIST":
            return {
                ...state,
                userData: { ...state.userData, wishlist: action.payload },
            }
        default:
            return state;
    }
};