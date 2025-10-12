import React, { createContext } from 'react';

export const WizardContext = createContext();

const WizardProvider =({ children }) =>{
    return(
               <WizardContext.Provider value={{}}>
            {children}
        </WizardContext.Provider>
    )
}

export default WizardProvider

