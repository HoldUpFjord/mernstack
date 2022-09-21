import { createContext, useReducer } from 'react'

export const WorkoutsContext = createContext()

export const workoutsReducer = (state, action) =>{
    switch(action.type) {
        case 'SET_WORKOUTS' :
            return {
                workouts: action.payload
            }
        case 'CREATE_WORKOUT':
            return {
                //action.payload NEW workout, ',,,state.workouts is the previous state/ old workouts
                workouts: [action.payload, ...state.workouts]
            }
            default:
                return state
    }
}

export const WorkoutsContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(workoutsReducer, {
        workouts:null
    })

//type = State change being made || payload = any data needed to make change
    /*dispatch({type : 'CREATE_WORKOUTS', payload} : [{}, {}])*/
    return (
        <WorkoutsContext.Provider value = {{...state, dispatch}} > 
             { children }
        </WorkoutsContext.Provider>
    )
}