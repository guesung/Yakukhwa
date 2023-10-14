import { FIREBASE_CONFIG } from '@/constants';
import { initializeApp } from 'firebase/app';
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  query,
  setDoc,
} from 'firebase/firestore';

const getDB = () => {
  const firebaseDB = initializeApp(FIREBASE_CONFIG);
  return getFirestore(firebaseDB);
};

export const getData = async (table: string) => {
  const db = getDB();
  const q = query(collection(db, table));
  const querySnapshot = await getDocs(q);

  const data: any[] = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
};

export const postData = async (table: string, data: any) => {
  const db = getDB();
  const ref = collection(db, table);
  if (data.id) await setDoc(doc(ref, data.id), data);
  else await setDoc(doc(ref), data);
};

export const deleteData = async (table: string, key: string) => {
  const db = getDB();
  await deleteDoc(doc(db, table, key));
};

export const patchData = async (table: string, key: string, data: any) => {
  const db = getDB();
  const ref = collection(db, table);
  await setDoc(doc(ref, key), data);
};
