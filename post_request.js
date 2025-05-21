fetch("https://apply-to-avantos.dev-sandbox.workload.avantos-ai.net", {
  method: "POST",
  body: JSON.stringify({
    email:"albert.martinez.cs@gmail.com"
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
})
  .then((response) => response.json())
  .then((json) => console.log(json));
