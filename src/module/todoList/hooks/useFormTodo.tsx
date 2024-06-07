import { useState } from "react";
import { STATUS, TodoDescription } from "../interfaces/TodoDescription";

export function useFormTodo(props: { handleAddItem: (addTodo: TodoDescription) => void }) {
    const { handleAddItem } = props;
    const [description, setDescription] = useState("");
        const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();

            handleAddItem({
        description,
        status: STATUS.INPROGRESS
            });
            setDescription("");
        };

    return {
        description,
        setDescription,
        handleSubmit,
    }
}