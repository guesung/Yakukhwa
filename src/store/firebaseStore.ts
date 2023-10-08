import { config } from "@/constants";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseDB = initializeApp(config.firebase);
export const fireStore = getFirestore(firebaseDB.firebaseApp);
