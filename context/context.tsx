'use client'

import { createContext, useState } from "react";

interface PropsContextTest {
  addTodo: (newTodo: string) => void
  removeTodo: (item: string) => void
  todos: string[]
  setTodos: React.Dispatch<React.SetStateAction<string[]>>
}

export const AuthContextTest = createContext<PropsContextTest>({
  addTodo: () => {},
  removeTodo: () => {},
  setTodos: () => [],
  todos: [],
  
})

export const ContextTestProvider = ({
  children,
  initialTodos
}: {
  children: React.ReactNode,
  initialTodos?: string[]
   
}) => {
  const [todos, setTodos] = useState<string[]>(initialTodos || [])


  function addTodo(newTodo: string){
    setTodos(todo => [...todo, newTodo])
  }

  function removeTodo(item: string){
    const newValue = todos.filter(todo => todo !== item)
    setTodos(newValue)
  }

  return (


    <AuthContextTest.Provider value={{ addTodo, removeTodo, todos, setTodos}}>
      {children}
    </AuthContextTest.Provider>
  )
}



