import { Context, DispatchContext } from "./context";
import { useContext,useState } from 'react'

export default function EventContextWrapper({children}) {
    const [ event,setEvent ] = useState([])
    return(
        <Context.Provider value={{event,setEvent}}>
            {children}
        </Context.Provider>
    )
}

export function useEvent(){
    return useContext(Context)
}

export function useEventDispatch() {
  return useContext(DispatchContext);
}