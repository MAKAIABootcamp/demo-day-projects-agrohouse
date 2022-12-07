import { eventsTypes } from "../types/eventsTypes"

export const eventsReducer = (state = [], action) => {
  switch (action.type) {
    case eventsTypes.CREATE_PRODUCT:
      return [
        ...action.payload,
      ]

    default:
      return state
  }


}