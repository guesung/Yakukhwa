import { FIREBASE_CONFIG } from "@/constants";
import { initializeApp } from "firebase/app";
import {
  collection,
  getDocs,
  getFirestore,
  query
} from "firebase/firestore";

interface GetDataProps {
  document: string;
}

export const queryData = async ({ document }: GetDataProps) => {
  const firebaseDB = initializeApp(FIREBASE_CONFIG);
  const db = getFirestore(firebaseDB);
  const q = query(collection(db, document));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
}