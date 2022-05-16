export async function searchUser (username) {
  const url = `https://api.github.com/users/${username}`
  const response = await fetch(url)
  if (response.ok) return await response.json()
  else return { error: 'Not Found' }
}
