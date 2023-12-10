'use client'

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Navigation(){
  const route = useRouter()
  
  const[value, setValue] = useState<string>('')

  function sendToPage(){
    if(value === ''){
      return alert('Adicione algo')
    }
    return route.push('/teste')
  }

  return (
    <div>
      <input data-testid='input_show' type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <button data-testid='button_show' onClick={sendToPage}>go</button>
    </div>
  )
}