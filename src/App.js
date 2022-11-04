import React from "react";
import { getAuth, signInAnonymously } from "firebase/auth";
import { messaging } from "./firebase";
import { getToken, onMessage } from "firebase/messaging";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const logIn = () => {
    signInAnonymously(getAuth()).then((user) => {
      console.log(user);
    });
  };

  const activateMessages = async() => {
    const token = await getToken(messaging, {
        vapidKey: 'BFWEG9oxrGXBinkRgo7LTre8vhsMmtAiEsmFNIm_rLDcLwdocZPWiZjPsn0jS-nRq1B07tTkfuAfjNy9vp4q8NM'
    }).catch(err => console.log("error al generar el token"))

    if (token) console.log(token)
    if (!token) console.log("no hay error token")
  }

  React.useEffect(() => {
    onMessage(messaging, (message) => {
        console.log(message)

        toast(message.notification.title)
    })
  }, [])

  return (
    <div>
      <h1>Notificaciones</h1>
      <ToastContainer />
      <button onClick={logIn}>Log In</button>
      <button onClick={activateMessages}>Generar Token</button>
    </div>
  );
}

export default App;
