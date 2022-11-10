import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDiUooNcLR9kv6m9D3I_92XEyvsPlS5Er4",
  authDomain: "raags-2f24f.firebaseapp.com",
  projectId: "raags-2f24f",
  storageBucket: "raags-2f24f.appspot.com",
  messagingSenderId: "439500326054",
  appId: "1:439500326054:web:def5bc289c6ed8e69e6067"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


