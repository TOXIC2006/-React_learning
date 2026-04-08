import React from 'react'

import { createContext } from 'react'

export const Themedatacontext = createContext()
const Themecontezt = (props) => {

    return (
        <div>

            <Themedatacontext.Provider value='siddharth'>
                {props.children}
            </Themedatacontext.Provider>
        </div>
    )
}

export default Themecontezt