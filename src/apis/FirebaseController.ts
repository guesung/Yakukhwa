import { config } from "@/constants";
import { initializeApp } from "firebase/app";
import { addDoc, collection, getDoc, getFirestore } from "firebase/firestore";

export class FirebaseController {
  firebaseDB;
  fireStore;
  constructor() {
    this.firebaseDB = initializeApp(config.firebase);
    this.fireStore = getFirestore(this.firebaseDB.firebaseApp);
  }
  async addValue({ value }: { value: string }) {
    await addDoc(collection(this.fireStore, `temp`), {
      value,
    });
  }
  async getValue() {
    const response = await getDoc(collection(this.fireStore, `temp`));
    return tempData;
  }
}
