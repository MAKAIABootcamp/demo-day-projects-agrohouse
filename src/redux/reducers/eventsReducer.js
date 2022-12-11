import { eventsTypes } from "../types/eventsTypes"

export const eventsReducer = (state = [], action) => {
  switch (action.type) {
    case eventsTypes.CREATE_PRODUCT:
      return [
        ...action.payload,
      ]
    case eventsTypes.GET_OWN_EVENTS:
      return [
        ...action.payload
      ]

    default:
      return state
  }


}