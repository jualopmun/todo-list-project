import { STATUS, TodoDescription } from "../interfaces/TodoDescription";

export function TodoItem(props: {todoDescription: TodoDescription}) {
    const {todoDescription} = props;
    return (
        <>
            <div className="flex mb-4 items-center">
                <div className="bg-white p-4 rounded-lg shadow-lg mt-2 sm:flex lg:items-end group">
                    <div className="flex-shrink-0 mb-4 pl-4 sm:mb-0 sm:mr-4">
                                {todoDescription?.description}
                    </div>
                            |
                        {
                            todoDescription.status === STATUS.COMPLETED  && 
                            <div className="flex-shrink-0 mb-4 pl-4 sm:mb-0 sm:mr-4 text-green-400">
                                {todoDescription?.status}
                            </div>
                        }
                        {
                            todoDescription.status === STATUS.INPROGRESS  && 
                            <div className="flex-shrink-0 mb-4 pl-4 sm:mb-0 sm:mr-4 text-yellow-400">
                                {todoDescription?.status}
                            </div>
                        }
                </div>
            </div>
        </>
    )
}