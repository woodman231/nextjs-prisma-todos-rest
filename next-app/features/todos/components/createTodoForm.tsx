import React from 'react'
import TitleFormControl from './createOrEditFormControls/titleFormControl'
import DueDateFormControl from './createOrEditFormControls/dueDateFormControl'
import DoneFormControl from './createOrEditFormControls/doneFormControl'
import SubmitButton from './createOrEditFormControls/submitButton'

interface CreateTodoFormProps {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

function CreateTodoForm({ handleSubmit }: CreateTodoFormProps) {
    return (
        <form className="flex flex-col" onSubmit={handleSubmit}>
            <TitleFormControl defaultValue="" />
            <DueDateFormControl defaultValue="" />
            <DoneFormControl defaultValue={false} />
            <SubmitButton />
        </form>
    )
}

export default CreateTodoForm
