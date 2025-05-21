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


/*{
    Challenge_link: "https://fluttering-atmosphere-1b5.notion.site/Journey-Builder-React-Coding-Challenge-190d5fe264fa80cba39ec21afc6d42ec",
    Instructions: "Submit your solutions as a link to a github repo named `5471cd` to the following email address: challenge-request-sub-aaaapriy22ktilybsd6gv7beiq@avantos.slack.com. 
    Questions can be sent to challenge-help-aaaaprjeraoxiaa2wlnlda7vsi@avantos.slack.com"
}*/