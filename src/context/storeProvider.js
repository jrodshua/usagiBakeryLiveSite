import React, { useReducer, useContext, createContext } from "react"

const StateContext = createContext()
const DispatchContext = createContext()

export const useStateContext = () => useContext(StateContext)
export const useDispatchContext = () => useContext(DispatchContext)

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, addProduct(action.payload.cartObject)]
    case "decrease":
      return [
        ...state
          .map(s => {
            if (s.id === action.payload.id) {
              s.quantity -= 1
            }
            return s
          })
          .filter(s => s.quantity !== 0),
      ]
    case "increase":
      return [
        ...state.map(s => {
          if (s.id === action.payload.id) {
            s.quantity += 1
          }
          return s
        }),
      ]
    case "delete":
      return state.filter((_, index) => index !== action.index)
    default:
      return state
  }
}

const addProduct = cartObject => {
  return {
    id: cartObject.id,
    price: cartObject.price,
    currency: cartObject.currency,
    image: cartObject.image,
    name: cartObject.name,
    description: cartObject.description,
    quantity: cartObject.quantity,
  }
}

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, [])

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

export default StoreProvider
