/* 
¿Qué es?
Una función pura que recibe un estado actual y una acción, y devuelve un nuevo estado.
*/

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}


interface TaskState {
    todos: Todo[];
    length: number;
    completed: number;
    pending: number;
}

export type TaskAction = { type: "ADD_TODO", payload: string } | { type: "TOGGLE_TODO", payload: number } | { type: "DELETE_TODO", payload: number };

const taskReducer = (state: TaskState, action: TaskAction): TaskState => {

    switch (action.type) {
        case 'ADD_TODO': {

            // se crea el nuevo todo
            const newTodo: Todo = {
                id: Date.now(), // no recomendado
                text: action.payload,
                completed: false,
            }

            // retorna un nuevo estado
            return {
                ...state,
                todos: [...state.todos, newTodo]
            }
        }

        case 'DELETE_TODO':

            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            };

        case 'TOGGLE_TODO':

            const updatedTodos = state.todos.map(todo => {
                if (todo.id === action.payload) return { ...todo, completed: !todo.completed }

                return todo;
            });

            return {
                ...state,
                todos: updatedTodos,
            };

        default:
            return state;
    }

    return state;
}