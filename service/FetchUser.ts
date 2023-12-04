export async function FetchUser(name: string) {
  if (!name) return null

  const response = await fetch(`https://api.github.com/users/${name}`)

  return response.json()
}