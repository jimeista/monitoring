export const fetchData = async (url) =>
  await fetch(url).then((res) => res.json())

export const postData = async (data, url) => {
  const rawResponse = await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  const content = await rawResponse.json()
  console.log(content)
}

export const updateData = async (obj, url) => {}

export const deleteData = async (obj, url) => {}
