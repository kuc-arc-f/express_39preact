
import { useState } from 'preact/hooks'
import { render } from 'preact'
import Head from '../components/Head';
import Footer from '../components/Footer';

export function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    <div class="main_body_wrap h-dvh bg-gray-100">
      <Head />
      <div>
      </div>
      <h1 class="text-4xl font-bold">About!!!</h1>
      <hr />
    </div>
  </>
  )
}

render(<App />, document.getElementById('app')!);
