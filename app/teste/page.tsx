'use client'

import { AuthContextTest } from "context/context"
import { useContext } from "react"

export default function Teste(){
  const { addTodo, todos, setTodos } = useContext(AuthContextTest)
  
  return (
    <div>
      <button onClick={() => addTodo('tESTE')}>ADICIONAR</button>
      
    </div>
  )
}