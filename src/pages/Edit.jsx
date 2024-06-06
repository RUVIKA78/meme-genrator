import React, { createRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Text from '../components/Text'
import { Button } from 'react-bootstrap'
import { exportComponentAsJPEG } from 'react-component-export-image'


const Edit = () => {
    const [params] = useSearchParams()
    console.log(params.get("url"));

    const [count, setCount] = useState(0)

    const memeRef = createRef()
    const addText = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <div style={{ width: "600px", border: '1px solid' }} ref={memeRef} className='mt-5 mb-5'>

                <img src={params.get("url")} alt="meme" width="250px" />
                {
                    Array(count).fill(0).map(e => <Text />)
                }

            </div>

            <div>
                <Button onClick={addText}>Add Text</Button>
                <Button variant='success' onClick={(e) => exportComponentAsJPEG(memeRef)}>Save </Button>

            </div>
        </div>
    )
}

export default Edit