/*
¿Qué es?
Una función pura que recibe un estado actual y una acción, y devuelve un nuevo estado.
*/

import * as z from "zod";

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

export type TaskAction =
  | { type: "ADD_TODO"; payload: string }
  | { type: "TOGGLE_TODO"; payload: number }
  | { type: "DELETE_TODO"; payload: number };

const TodoSchema = z.object({
  id: z.number(),
  text: z.string(),
  completed: z.boolean(),
});

const TaskStateSchema = z.object({
  todos: z.array(TodoSchema),
  length: z.number(),
  completed: z.number(),
  pending: z.number(),
});

// estado inicial (state)
export const getTaskInitialState = (): TaskState => {
  // leer del localstorage
  const localStorageState = localStorage.getItem("tasks-state");

  if (!localStorageState) {
    return {
      todos: [],
      length: 0,
      completed: 0,
      pending: 0,
    };
  }

  // validar mediante zod
  const result = TaskStateSchema.safeParse(JSON.parse(localStorageState)); // safeParse() -> valida que el objeto cumpla con el schema

  if (result.error) {
    console.error(result.error);
    return {
      todos: [],
      length: 0,
      completed: 0,
      pending: 0,
    };
  }

  return result.data;
};

export const taskReducer = (
  state: TaskState,
  action: TaskAction,
): TaskState => {
  switch (action.type) {
    case "ADD_TODO": {
      // se crea el nuevo todo
      const newTodo: Todo = {
        id: Date.now(), // no recomendado
        text: action.payload,
        completed: false,
      };

      // retorna un nuevo estado
      return {
        ...state,
        todos: [...state.todos, newTodo],
        length: state.todos.length + 1,
        pending: state.length + 1,
      };
    }

    case "DELETE_TODO": {
      //  se obtiene los todos actuales.
      const currentTodos = state.todos.filter(
        (todo) => todo.id !== action.payload,
      );

      // se devuelve los todos actuales.
      return {
        ...state,
        todos: currentTodos,
        length: currentTodos.length,
        completed: currentTodos.filter((todo) => todo.completed).length,
        pending: currentTodos.filter((todo) => !todo.completed).length,
      };
    }

    case "TOGGLE_TODO": {
      // se actualiza el todo seleccionado
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === action.payload)
          return { ...todo, completed: !todo.completed };

        return todo;
      });

      // se retorna los todos
      return {
        ...state,
        todos: updatedTodos,
        completed: updatedTodos.filter((todo) => todo.completed).length,
        pending: updatedTodos.filter((todo) => !todo.completed).length,
      };
    }

    default:
      return state;
  }
};
