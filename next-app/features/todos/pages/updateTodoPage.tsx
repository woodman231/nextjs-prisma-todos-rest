import React from 'react'
import EditTodoForm from '../components/editTodoForm';
import { useUpdateTodoMutation, useGetTodoQuery } from '@/features/todos/store/todos'
import { useRouter } from 'next/navigation';
import { IDParams } from '@/features/common/params/idParams';
import { idParamaterValidator } from '@/features/common/paramValidators/idParamaterValidator';

function UpdateTodoPage({ params }: IDParams) {

    const validationResult = idParamaterValidator({ params });
    if (!validationResult.isValid) {
        throw new Error("Invalid id parameter");
    }

    const router = useRouter();
    const [updateTodo, { isError, isSuccess }] = useUpdateTodoMutation();
    const { data, isFetching } = useGetTodoQuery(Number(params.id), {
        refetchOnMountOrArgChange: true
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const id = formData.get('id') as string;
        const title = formData.get('title') as string;
        const dueDate = formData.get('dueDate') as string;
        const done = formData.get('done') as string;
        updateTodo({
            id: Number(id),
            title,
            dueDate,
            done: done === 'on'
        })
    }

    React.useEffect(() => {
        if (isError) {
            alert('Error updating todo');
        }
        if (isSuccess) {
            router.push("/todos");
        }
    }, [isError, isSuccess, router])

    return (
        <div>
            <h1 className="text-3xl">Update Todo</h1>
            {
                isFetching ? <p>Loading...</p> : (
                    data && data.data &&
                    <EditTodoForm
                        defaultValues={{
                            id: Number(params.id),
                            title: data.data.title,
                            dueDate: new Date(data.data.dueDate.toString()).toISOString().split('T')[0],
                            done: data.data.done
                        }}
                        handleSubmit={handleSubmit} />
                )
            }
        </div>
    )
}

export default UpdateTodoPage
