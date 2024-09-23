const express = require('express');
const cors = require('cors');
const SpotifyWebApi = require('spotify-web-api-node');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/login', (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri: encodeURIComponent('http://localhost:3000'),
        clientId: '1c518f7e6def4ecf86d46e7438dba0de',
        clientSecret: '3ecd016e0f104485b5f433032ce9b9ca',
        
})
    spotifyApi.authorizeCodeGrant(code).then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    }).catch((err) => {
        console.error(err)
        res.sendStatus(400)
    })
})

app.listen(3001)