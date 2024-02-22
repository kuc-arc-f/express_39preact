import { useState } from 'preact/hooks'
//
export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="/">[ home ]</a>
        <hr />
      </div>
      <h1 class="text-4xl font-bold">About</h1>
      <hr />
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          [ count ]  is {count}
        </button>
      </div>
      <hr />
    </>
  )
}
