import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { database } from "../../firebase/firebaseConfig";
import { eventsTypes } from "../types/eventsTypes";

const collectionName = 'events'

export const addEventAsync = (event) => {
  console.log(event);
  return async (dispatch) => {
    try {
      const eventsCollection = collection(database, collectionName);
      const docs = await addDoc(eventsCollection, event);
    } catch (error) {
      console.log(error);
    }
  }
}

export const getOwnEventsAsync = (uid) => {
  return async (dispatch) => {
    const eventsCollection = collection(database, collectionName);
    const querySnapshot = await getDocs(eventsCollection)
    const events = []
    try {
      querySnapshot.forEach(element => {
        if (element.data().organizerUid === uid) {
          const product = {
            id: element.id,
            ...element.data()
          }
          events.push(product)
        }
      })
    } catch (error) {

    } finally {
      dispatch(getOwnEventsSync(events))
    }
  }
}

const getOwnEventsSync = (events) => {
  return {
    type: eventsTypes.GET_OWN_EVENTS,
    payload: events
  }
}

