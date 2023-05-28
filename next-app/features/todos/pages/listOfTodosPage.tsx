import React from 'react'
import { useGetTodosQuery, useDeleteTodoMutation } from '@/features/todos/store/todos'
import CreateNewTodoButton from '@/features/todos/components/listOfTodosPageComponents/createNewTodoButton'
import ListOfTodosComponent from '@/features/todos/components/listOfTodosPageComponents/listOfTodos'

function ListOfTodosPage() {
    const { isFetching, isError, error, isSuccess, data, refetch } = useGetTodosQuery(undefined, {
        refetchOnMountOrArgChange: true
    });

    const [deleteTodo, {isSuccess: deleteSuccess}] = useDeleteTodoMutation();

    const deleteHandler = (id: number) => {
        const confirmed = confirm("Are you sure you want to delete this todo?");
        if (confirmed) {
            deleteTodo(id);
        }        
    }

    React.useEffect(() => {
        if (deleteSuccess) {
            refetch();
        }
    }, [deleteSuccess, refetch])

    return (
        <div>
            <h1 className="text-3xl">List of Todos</h1>
            {isFetching && <div>Loading...</div>}
            {isError && <div>{error.toString()}</div>}
            {isSuccess && data && data.data && (
                <>
                    <CreateNewTodoButton />
                    <ListOfTodosComponent todos={data.data} deleteHandler={deleteHandler} />
                </>
            )}
        </div>
    )
}

export default ListOfTodosPage
