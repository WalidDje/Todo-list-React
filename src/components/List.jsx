import { useState } from "react"
import { nanoid } from "nanoid"
import ListItem from "./ListItem";

export default function List() {

    const [ todoList, setTodoList ] = useState([
        { id: nanoid(8), content: "item 1"},
        { id: nanoid(8), content: "item 2"},
        { id: nanoid(8), content: "item 3"},
    ]);
    
    function deleteTodo(id){
        setTodoList(todoList.filter(todo => todo.id !== id))
    }

    const [ todo, setTodo ] = useState("")
    const [ showValidation, setShowValidation ] = useState(false)

    function handleSubmit(e){
        e.preventDefault()

        if(todo === ""){
            setShowValidation(true)
            return
        }

        setTodoList([...todoList, {id: nanoid(), content: todo}])
        setTodo("")
        setShowValidation(false)
    }

  return (
    <>
    <form onSubmit={handleSubmit} className="mb-10">
        <label htmlFor="Todo-item" className="text-slate-50">
        Ajouter une chose à faire
        </label>
        <input
        value={todo}
        onChange={e => setTodo(e.target.value)}
        type="text"
        className="mt-1 py-2 block w-full rounded" />
        {showValidation && (
            <p className="text-red-400">
                Ajoutez d&apos;abord du contenu à votre tâche
            </p>
        )}
        <button className="mt-4 px-2 py-2 bg-slate-50 rounded min-w-[115px]">Ajouter</button>
        <ul>
        {todoList.length === 0 && (
            <li className="text-slate-50 text-md">
                Aucun item à afficher
            </li>
        )}
          {todoList.length > 0 &&
            todoList.map(item => (
            <ListItem key={item.id} itemData={item} deleteTodo={deleteTodo} />
            ))}
        </ul>
    </form>
    </>
  )
}
