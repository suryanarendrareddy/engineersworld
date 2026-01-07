export const applyForJob = async (formData) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/api/jobs/apply`, {
    method: 'POST',
    body: formData,
  })

  const data = await res.json()
  if(!res.ok) throw new Error(data.message)
  return data
}
