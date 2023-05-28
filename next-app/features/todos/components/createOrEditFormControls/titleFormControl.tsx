import React from 'react'

interface TitleFormControlProps {
    defaultValue: string
}

function TitleFormControl({ defaultValue }: TitleFormControlProps) {

    const [title, setTitle] = React.useState(defaultValue);

    return (
        <>
            <label
                className="p-2 m-2 text-white bg-green-500 rounded"
                htmlFor="title">
                Title
            </label>
            <input
                className="p-2 m-2 text-black border border-gray-500 rounded"
                type="text"
                name="title"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.currentTarget.value)}
            />
        </>
    )
}

export default TitleFormControl