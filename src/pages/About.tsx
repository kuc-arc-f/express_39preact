export function AboutApp() {
  return (
  <html>
    <head>
        <title>welcome</title>
    </head>
    <body>
      <div className="container mx-auto my-2 px-8 bg-white">
        <div id="app"></div>
        {(process.env.NODE_ENV === "develop") ? (
          <script type="module" src="/static/About.js"></script>
        ): (
          <script type="module" src="/public/static/About.js"></script> 
        )}
      </div>           
    </body>
  </html>
  );
}
