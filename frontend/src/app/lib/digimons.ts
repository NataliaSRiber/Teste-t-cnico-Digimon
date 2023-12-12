import { api } from '../services/api'

export async function getDigimons(context: any) {
  const { search, setApiCall, setSearch, selectedLevel, setSelectedLevel } =
    context

  try {
    const { data } = await api.get(
      `/digimons?name=${search}&level=${selectedLevel}`,
    )
    setApiCall(false)
    setSelectedLevel('')
    setSearch('')

    return data
  } catch (error) {
    console.error(error)
  }
}
