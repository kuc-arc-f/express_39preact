export function AboutApp() {
  return (
  <html>
  <head>
    <title>welcome</title>
    {(process.env.NODE_ENV === "production") ? (
      <link href="/public/static/main.css" rel="stylesheet"/>
    ): (
      <link href="/static/main.css" rel="stylesheet"/>
    )} 
  </head>
  <body>
    <div id="app"></div>
    {(process.env.NODE_ENV === "production") ? (
      <script type="module" src="/public/static/About.js"></script> 
    ): (
      <script type="module" src="/static/About.js"></script>
    )}
  </body>
  </html>
  );
}
