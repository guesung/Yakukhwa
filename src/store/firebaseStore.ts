import { config } from "@/constants";
import { initializeApp } from "firebase/app";
import { getFireStore } from "firebase/firesStore";

const firebaseDB = initializeApp(config.firebase);
export const fireStore = getFireStore(firebaseDB, firebaseApp);
