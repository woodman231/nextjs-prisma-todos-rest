import { getTodoDetailsRequestHandler } from "@/features/todos/restRequestHandlers/getTodoDetailsRequestHandler"
import { updateTodoRequestHandler } from "@/features/todos/restRequestHandlers/updateTodoRequestHandler"
import { deleteTodoRequestHandler } from "@/features/todos/restRequestHandlers/deleteTodoRequestHandler"

export {
    getTodoDetailsRequestHandler as GET,
    updateTodoRequestHandler as PUT,
    deleteTodoRequestHandler as DELETE
}
