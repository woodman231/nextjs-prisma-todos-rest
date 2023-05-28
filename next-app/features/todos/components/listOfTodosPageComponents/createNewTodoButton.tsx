import React from 'react'
import Link from 'next/link'

function CreateNewTodoButton() {
    return (
        <Link href="/todos/create" className='block p-2 m-2 text-white bg-green-500 rounded'>Create New Todo</Link>
    )
}

export default CreateNewTodoButton