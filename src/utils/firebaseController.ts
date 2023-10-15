import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  query,
  setDoc,
} from 'firebase/firestore';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';

const FIREBASE_CONFIG = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

export const app = initializeApp(FIREBASE_CONFIG);
export const db = getFirestore(app);
export const auth = getAuth(app);

export const getData = async (table: string) => {
  const q = query(collection(db, table));
  const querySnapshot = await getDocs(q);

  const data: any[] = [];
  querySnapshot.forEach((doc: any) => data.push({ id: doc.id, ...doc.data() }));
  return data;
};

export const postData = async (table: string, data: any) => {
  const ref = collection(db, table);

  if (data.id) await setDoc(doc(ref, data.id), data);
  else {
    delete data.id;
    await setDoc(doc(ref), data);
  }
};

export const deleteData = async (table: string, key: string) => {
  await deleteDoc(doc(db, table, key));
};

export const patchData = async (table: string, key: string, data: any) => {
  const ref = collection(db, table);
  await setDoc(doc(ref, key), data);
};

export const uploadImage = async (title: string, file: File) => {
  const storageRef = ref(getStorage(), title);
  const snapshot = await uploadBytes(storageRef, file);
  const imageUrl = await getDownloadURL(snapshot.ref);
  return imageUrl;
};
