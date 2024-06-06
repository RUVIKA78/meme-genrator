import React, { useState } from 'react'
import Draggable from 'react-draggable'
import 'bootstrap/dist/css/bootstrap.min.css';

const Text = () => {
    const [edit, setEdit] = useState(false)
    const [value, setValue] = useState("Double click to edit")


    return (
        <Draggable>
            {
                edit ?
                    (<input
                        onDoubleClick={(e) => setEdit(false)}
                        value={value}
                        onChange={(e) => setValue(e.target.value)} />)
                    : (<h1 onDoubleClick={(e) => setEdit(true)}>{value}
                    </h1>
                    )
            }

        </Draggable>


    )
}

export default Text