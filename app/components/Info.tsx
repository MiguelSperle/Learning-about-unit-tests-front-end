'use client'

import { useState } from "react"
import User from "./User"

type User =  {
  id: string
  name: string
  login: string
  location: string
}

type UserProps = {
  user?: User | null
}

export default function Info({ user }: UserProps){
  const [show, setShow] = useState<boolean>(false)
  
  return (
    <button  data-testid='button_show'onClick={() => setShow(!show)}>
      {show ? (
        <div>
          <p data-testid='user_id'>{user?.id}</p>
          <p data-testid='user_name'>{user?.name}</p>
          <p data-testid='user_location'>{user?.location}</p>
          <p data-testid='user_login'>{user?.login}</p>
        </div>
      ) : 'Nada'}
    </button>
  )
} 