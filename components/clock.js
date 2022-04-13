import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

function Clock() {
  const { data, error } = useSWR('/api/getTime', fetcher, {
                                            refreshInterval: 10,
                                            focusThrottleInterval: 0,
                                            dedupingInterval: 0
                                        })

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  console.log(data.time)
  return <div>{data.time}</div>
}

export default Clock