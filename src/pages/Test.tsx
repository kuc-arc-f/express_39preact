export function TestApp() {
  return (
  <html>
    <head>
        <title>welcome</title>
    </head>
    <body>
      <div className="container mx-auto my-2 px-8 bg-white">
        <div id="app"></div>
        {(process.env.NODE_ENV === "develop") ? (
          <script type="module" src="/static/Test.js"></script>
        ): (
          <script type="module" src="/public/static/Test.js"></script> 
        )}
      </div>           
    </body>
  </html>
  );
}