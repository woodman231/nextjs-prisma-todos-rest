import React from 'react'
import TodoListItem from './todoListItem'
import { TodoPayload } from '@/features/todos/prismaPayloads/todoPayload'

interface ListOfTodosProps {
    todos: TodoPayload[],
    deleteHandler: (id: number) => void
}

function ListOfTodos(props: ListOfTodosProps) {
    return (
        <div className='flex flex-col p-6 bg-gray-400'>
            {props.todos.map((todo) => (
                <TodoListItem key={todo.id} todo={todo} deleteHandler={props.deleteHandler} />
            ))}
        </div>
    )
}

export default ListOfTodos