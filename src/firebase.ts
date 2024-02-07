/* eslint-disable @typescript-eslint/no-explicit-any */
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, getDoc, getDocs, setDoc, deleteDoc } from 'firebase/firestore';

class FirebaseService {
  private database;

  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyAzN_WOFM8cWUoUgr4b5J2LuT0QjnuYhtw",
      authDomain: "viso-test-task-b2b9a.firebaseapp.com",
      projectId: "viso-test-task-b2b9a",
      storageBucket: "viso-test-task-b2b9a.appspot.com",
      messagingSenderId: "536366333860",
      appId: "1:536366333860:web:14b5ff7e88d241370f8b31"
    };

    const app = initializeApp(firebaseConfig);
    this.database = getFirestore(app);
  }

  async fetchData<T>(collectionPath: string, documentId: string): Promise<{ data: T | null; docId: string | null }> {
    try {
      const docRef = doc(this.database, collectionPath, documentId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return { data: docSnap.data() as T, docId: docSnap.id };
      } else {
        return { data: null, docId: null };
      }
    } catch (error) {
      console.error('Error fetching data from Firestore:', error);
      throw error;
    }
  }

  async fetchMarkersData(collectionPath: string): Promise<Array<any>> {
    try {
      const querySnapshot = await getDocs(collection(this.database, collectionPath));
      const markersData: Array<any> = [];

      querySnapshot.forEach((doc) => {
        markersData.push({ id: doc.id, data: doc.data() });
      });

      return markersData;
    } catch (error) {
      console.error('Error fetching markers data from Firestore:', error);
      throw error;
    }
  }

  async sendData<T>(collectionPath?: string, documentId?: string, data?: T): Promise<void> {
    try {
      const docRef = doc(collection(this.database, collectionPath || ''), documentId || '');
      await setDoc(docRef, data as any);
    } catch (error) {
      console.error('Error sending data to Firestore:', error);
      throw error;
    }
  }

  async deleteData(collectionPath: string, documentId: string): Promise<void> {
    try {
      const docRef = doc(this.database, collectionPath, documentId);
      await deleteDoc(docRef);
    } catch (error) {
      console.error('Error deleting data from Firestore:', error);
      throw error;
    }
  }
}

export default FirebaseService;
