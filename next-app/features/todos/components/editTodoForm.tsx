import React from 'react'
import IdFormControl from './createOrEditFormControls/idFormControl'
import TitleFormControl from './createOrEditFormControls/titleFormControl'
import DueDateFormControl from './createOrEditFormControls/dueDateFormControl'
import DoneFormControl from './createOrEditFormControls/doneFormControl'
import SubmitButton from './createOrEditFormControls/submitButton'

interface EditTodoFormProps {
    defaultValues: {
        id: number,
        title: string,
        dueDate: string,
        done: boolean
    },
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

function EditTodoForm({ defaultValues, handleSubmit }: EditTodoFormProps) {
    return (
        <form className="flex flex-col" onSubmit={handleSubmit}>
            <IdFormControl defaultValue={defaultValues.id} />
            <TitleFormControl defaultValue={defaultValues.title} />
            <DueDateFormControl defaultValue={defaultValues.dueDate} />
            <DoneFormControl defaultValue={defaultValues.done} />
            <SubmitButton />
        </form>
    )
}

export default EditTodoForm