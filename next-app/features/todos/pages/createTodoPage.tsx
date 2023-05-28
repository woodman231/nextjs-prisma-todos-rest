"use client";
import React from 'react'
import CreateTodoForm from '@/features/todos/components/createTodoForm'
import { useCreateTodoMutation } from '@/features/todos/store/todos'
import { useRouter } from 'next/navigation';

function CreateTodoPage() {

    const router = useRouter();
    const [createTodo, { isError, isSuccess }] = useCreateTodoMutation();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const title = formData.get('title') as string;
        const dueDate = formData.get('dueDate') as string;
        const done = formData.get('done') as string;
        createTodo({
            title,
            dueDate,
            done: done === 'on'
        })
    }

    React.useEffect(() => {
        if (isError) {
            alert('Error creating todo');
        }
        if (isSuccess) {
            router.push("/todos");
        }
    }, [isError, isSuccess, router])

    return (
        <div>
            <h1 className="text-3xl">Create Todo</h1>
            <CreateTodoForm handleSubmit={handleSubmit} />
        </div>
    )
}

export default CreateTodoPage
