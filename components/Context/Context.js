import React, {createContext} from 'react';


const movieContext = React.createContext();

const Context = () => {
    return (
        <div>
            <movieContext.Provider value={ }>
                {props.children}
            </movieContext.Provider>
        </div>
    );
}

export default Context;
