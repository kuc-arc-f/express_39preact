import { useState } from 'preact/hooks'
import Head from '../../components/Head';
//
export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Head />
      <div>
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
/*
<a href="/">[ home ]</a>
<hr />
*/