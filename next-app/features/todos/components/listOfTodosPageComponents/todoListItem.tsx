import React from 'react'
import Link from 'next/link'
import { TodoPayload } from '@/features/todos/prismaPayloads/todoPayload'

interface TodoListItemProps {
    todo: TodoPayload,
    deleteHandler: (id: number) => void
}

function TodoListItem({todo, deleteHandler}: TodoListItemProps) {
    return (
        <div className='flex-1 m-1 p-2 bg-teal-400'>
            <div className='grid p-4 gap-2 grid-rows-2 bg-white rounded'>
                <div>
                    <div className='text-xl font-bold'>{todo.title}</div>
                    <div>Due: {todo.dueDate.toString().split("T")[0]}</div>
                    <div>Done: {todo.done.valueOf().toString()}</div>
                </div>
                <div>
                    <div className='grid grid-cols-2 gap-2 bg-white'>
                        <Link href={`/todos/edit/${todo.id}`} className='block p-2 m-2 text-white bg-blue-500 rounded'>Edit</Link>
                        <button className='p-2 m-2 text-white bg-red-500 rounded' onClick={() => deleteHandler(todo.id)}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoListItem
