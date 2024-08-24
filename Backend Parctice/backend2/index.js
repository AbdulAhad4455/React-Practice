require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000
const gitHub = {
    "login": "AbdulAhad4455",
    "id": 150322918,
    "node_id": "U_kgDOCPW-5g",
    "avatar_url": "https://avatars.githubusercontent.com/u/150322918?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/AbdulAhad4455",
    "html_url": "https://github.com/AbdulAhad4455",
    "followers_url": "https://api.github.com/users/AbdulAhad4455/followers",
    "following_url": "https://api.github.com/users/AbdulAhad4455/following{/other_user}",
    "gists_url": "https://api.github.com/users/AbdulAhad4455/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/AbdulAhad4455/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/AbdulAhad4455/subscriptions",
    "organizations_url": "https://api.github.com/users/AbdulAhad4455/orgs",
    "repos_url": "https://api.github.com/users/AbdulAhad4455/repos",
    "events_url": "https://api.github.com/users/AbdulAhad4455/events{/privacy}",
    "received_events_url": "https://api.github.com/users/AbdulAhad4455/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Abdul Ahad56",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 6,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2023-11-09T06:20:15Z",
    "updated_at": "2024-08-06T06:11:23Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/login',(req,res)=>{
    res.send('Abdul Ahad is Here ')
})
app.get('/about',(req,res)=>{
    res.send('<h1>This is About</h1>')
})
app.get('/gitHub',(req,res)=>{
    res.json(gitHub)
})
app.listen(process.env.PORT, () => {console.log(`Example app listening on port ${PORT}`)
})