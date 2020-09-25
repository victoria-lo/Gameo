const initialState = {
    // holds the auth user data if not null
    userData: {
        name: "",
        email: "",
        games: [],
        wishlist: [],
    },
    users: [],
    games: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "USER_DATA":
            return {
                ...state,
                userData: action.payload,
            };
        case "USERS":
            return {
                ...state,
                users: action.payload,
            };
        case "GAMES":
            return {
                ...state,
                games: action.payload,
            };
        default:
            return state;
    }
};