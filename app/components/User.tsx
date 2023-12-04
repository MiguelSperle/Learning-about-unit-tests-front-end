import { FetchUser } from "service/FetchUser"
import Info from "./Info"

export default async function User(){
  const user = await FetchUser('MiguelSperle')

  return (
    <Info user={user} />
  )
} 