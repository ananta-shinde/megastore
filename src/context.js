import { createContext, useState } from "react";

const AppContext = createContext( );


const AppProvider = ({children})=>{

    const [users,setUsers] = useState([]);

    const [isloggedin,setIsloggedIn] = useState(false);
    const addUser = (data) =>{
             setUsers([...users,data]);
    }

    const loginUser =()=>{
      setIsloggedIn(true)
    }
    return(<AppContext.Provider value={ {users,isloggedin,addUser,loginUser}}>
            {children}
    </AppContext.Provider>)
  }

const AppConsumer =(Child)=>(props)=>{
    return(<AppContext.Consumer>
      {
        (value) => (<Child {...props} {...value}/>)
      }
    </AppContext.Consumer>)
  }

export { AppContext,AppProvider,AppConsumer}