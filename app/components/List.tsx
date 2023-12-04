'use client'

import { useState } from "react"

export default function List(){
  const [names, setNames] = useState<string[]>(['Miguel', 'Matheus', 'Marcelo', 'Marcelle'])
  const [value, setValue] = useState<string>('')

  function addToList(){
    setNames(state => [...state, value])
  }

  function removeFromList(item: string){
    const newValue = names.filter(name => name !== item)
    setNames(newValue)
  }

  return (
    <div style={{ padding: 20 }}>
      <input placeholder="Novo User" type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={addToList}>Adicionar</button>
      <ul>
        {names.map((name) => {
          return (
            <div key={name} style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
              <li>{name}</li>
              <button onClick={() => removeFromList(name)}>Remover</button>
            </div>
          )
        })}
      </ul>
    </div>
  )
}