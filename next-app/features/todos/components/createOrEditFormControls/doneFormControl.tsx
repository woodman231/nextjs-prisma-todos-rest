import React from 'react'

interface DoneFormControlProps {
    defaultValue: boolean
}

function DoneFormControl({ defaultValue }: DoneFormControlProps) {

    const [done, setDone] = React.useState(defaultValue);

    return (
        <>
            <label
                className="p-2 m-2 text-white bg-green-500 rounded"
                htmlFor="done">
                Done
            </label>
            <input
                className="p-2 m-2 text-black border border-gray-500 rounded"
                type="checkbox"
                name="done"
                id="done"
                checked={done}
                onChange={(e) => setDone(e.currentTarget.checked)}
            />
        </>
    )
}

export default DoneFormControl