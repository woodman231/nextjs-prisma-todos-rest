import React from 'react'

interface DueDateFormControlProps {
    defaultValue: string
}

function DueDateFormControl({ defaultValue }: DueDateFormControlProps) {

    const [dueDate, setDueDate] = React.useState(defaultValue);

    return (
        <>
            <label
                className="p-2 m-2 text-white bg-green-500 rounded"
                htmlFor="dueDate">
                Due Date
            </label>
            <input
                className="p-2 m-2 text-black border border-gray-500 rounded"
                type="date"
                name="dueDate"
                id="dueDate"
                value={dueDate}
                onChange={(e) => setDueDate(e.currentTarget.value)}
            />
        </>
    )
}

export default DueDateFormControl