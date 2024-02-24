# basic_auth

 Version: 0.9.1

 Author  : Kouji Nakashima / kuc-arc-f.com

 date    : 2024/02/20

 update :

***

basic auth sample, Preact.js + express

***
* src/index.ts

```
app.use(basicAuth({
  users: { "test": "1111" },
  challenge: true,
}));
```
***

