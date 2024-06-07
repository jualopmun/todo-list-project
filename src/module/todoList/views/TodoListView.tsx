import { useState } from "react";
import { FormTodoList } from "../components/FormTodoList";
import { STATUS, TodoDescription } from "../interfaces/TodoDescription";
import { TodoItem } from "../components/TodoItem";

export function TodoListView(){
  const [todoList, setTodoList] = useState<TodoDescription[]>([{
    status: STATUS.COMPLETED,
    description: 'test project'
  }]);

	const handleAddItem = (addTodo: TodoDescription) => {
		setTodoList([...todoList, addTodo]);
	};

    return (
        <>
          <div className="h-100 w-full flex items-center flex-col justify-center bg-teal-lightest font-sans">
            <h1 className="px-2 text-5xl text-green-950 flex mt-4">
              TODO List
            </h1>
            <div className="flex mb-4 items-center">
              <FormTodoList handleAddItem={handleAddItem} />
            </div>
            <div className="flex mb-4 items-center flex-col">
              {todoList.map((todo: TodoDescription) => <TodoItem  todoDescription={todo}/>)}
            </div>
          </div>
      </>
    )
}