import { addDoc, collection, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { database } from "../../firebase/firebaseConfig";
import { eventsTypes } from "../types/eventsTypes";

const collectionName = 'events'

export const addEventAsync = (event) => {
  console.log(event);
  return async (dispatch) => {
    try {
      const productsCollection = collection(database, collectionName);
      const docs = await addDoc(productsCollection, event);
    } catch (error) {
      console.log(error);
    }
  }
}

