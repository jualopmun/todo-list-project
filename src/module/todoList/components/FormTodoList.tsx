import { TodoDescription } from "../interfaces/TodoDescription";
import { useFormTodo } from "../hooks/useFormTodo";

export function FormTodoList(props: { handleAddItem: (addTodo: TodoDescription) => void }){
  const {description, setDescription, handleSubmit} = useFormTodo(props);

    return (
        <>
          <form onSubmit={handleSubmit} className="flex border border-green-300 rounded">
            <input
              type="text"
              className="block w-full px-4 py-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="write TODO Here..."
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
            <button className="px-4 text-white bg-green-300 border-l rounded ml-2">
              Add TODO
            </button>
          </form>
        </>
    )
}