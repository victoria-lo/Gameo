import axios from "axios";

/* For local debugging set to 1 */
const DEBUG = 1;

/* Debug variables.*/
const PREFIX = DEBUG ? "http://localhost:80" : "";

//=============================== ASYNC ACTIONS ========================================================================

export const createUser = (email, displayName) => {
    return (dispatch) => {
        axios
            .post(PREFIX + "/user", {
                email: email,
                name: displayName,
            })
            .then((res) => {
                return res.data;
            })
            .then((data) => {
                dispatch({ type: "USER_DATA", payload: data });
            })
            .catch((err) => {
                console.log(err);
            });
    };
};


//================================== PROMISES =========================================================================

export const getUser = (email) => {
    return new Promise((resolve, reject) => {
        axios
            .get(PREFIX + "/user?email=" + email)
            .then((res) => {
                if (!res || !res.data)
                    reject({ stat: 500, msg: "Something went wrong" });
                resolve(res.data);
            })
            .catch((err) => {
                reject(err);
            });
    });
};