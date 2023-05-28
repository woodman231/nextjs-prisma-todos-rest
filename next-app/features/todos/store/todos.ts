import { Prisma } from '@prisma/client'
import { api } from '@/features/common/store/api'
import { TodoDetailsResponseModel } from '@/features/todos/restResponseModels/todoDetailsResponseModel'
import { TodosListResponseModel } from '@/features/todos/restResponseModels/todosListResponseModel'

type TodoUpdateInputWithId = Prisma.TodoUpdateInput & {
    id: number
}

export const todosApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getTodos: builder.query<TodosListResponseModel, void>({
            query: () => 'todos',
        }),
        getTodo: builder.query<TodoDetailsResponseModel, number>({
            query: (id) => `todos/${id}`,
        }),
        createTodo: builder.mutation<TodoDetailsResponseModel, Prisma.TodoCreateInput>({
            query: (body) => ({
                url: 'todos',
                method: 'POST',
                body
            })
        }),
        updateTodo: builder.mutation<TodoDetailsResponseModel, TodoUpdateInputWithId>({
            query: (data) => {
                const { id } = data;
                const dataToPut: Prisma.TodoUpdateInput = {
                    title: data.title,
                    dueDate: data.dueDate,
                    done: data.done
                }
                return {
                    url: `todos/${id}`,
                    method: 'PUT',
                    body: dataToPut
                }
            }
        }),
        deleteTodo: builder.mutation<undefined, Number>({
            query: (id) => {
                return {
                    url: `todos/${id}`,
                    method: 'DELETE'
                }
            }
        })
    }),
})

export const {
    useGetTodosQuery,
    useGetTodoQuery,
    useCreateTodoMutation,
    useUpdateTodoMutation,
    useDeleteTodoMutation,
} = todosApi

export const {
    endpoints: { 
        getTodos,
        getTodo,
        createTodo,
        updateTodo,
        deleteTodo
    }
} = todosApi
