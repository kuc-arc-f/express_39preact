//console.log("env=", process.env.NODE_ENV)
//
export function App() {
  return (
  <html>
    <head>
        <title>welcome</title>
    </head>
      <body>
      <div className="container mx-auto my-2 px-8 bg-white">
        <a href="/">[ home ]</a>
        <a href="/about">[ about ]</a>
        <a href="/test">[ test ]</a>
        <hr />
        <h1 className="text-4xl font-bold">Hello!</h1>
        <div id="app"></div>
      </div>           
      </body>
    </html>
  );
}
/*
<a href="/">[ home ]</a>
<a href="/about">[ about ]</a>
<a href="/test">[ test ]</a>
<hr />
*/
