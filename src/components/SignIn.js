import React, { useContext } from "react";
import "../App.css";
import firebase from "firebase";
import { FirebaseAuth } from "react-firebaseui";
import { AuthContext } from "../Firebase/context";
import { Redirect} from "react-router-dom";

function SignIn() {
    const { user } = useContext(AuthContext);

    const uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
        ],
        credentialHelper: "none",
        callbacks: {
            signInSuccess: () => false,
        },
    };

    return (
        <div style={{ paddingTop: "4.5rem", minHeight: "80vh" }}>
            {!!user ? (
                <Redirect to={{ pathname: "/trending" }} />
            ) : (
                <div
                    style={{
                        padding: "2rem",
                        marginLeft: "5vw",
                        marginRight: "5vw",
                    }}
                >

                    <h4
                        style={{
                            marginBottom: "2rem",
                            color: 'white'
                        }}
                    >
                        Join the Gameo now!
                    </h4>

                    <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                </div>
            )}
        </div>
    );
}

export default SignIn;
