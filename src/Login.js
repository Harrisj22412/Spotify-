import {React } from "react";
import { Container } from "react-bootstrap";

const clientId = '05c21e4a07e947acbb0e80a13af6daf4';
const redirectUri = encodeURIComponent('http://localhost:3000');
const scopes = encodeURIComponent('streaming user-read-email user-read-private user-library-read user-library-modify user-read-playback-state user-modify-playback-state');

const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scopes}`;


export default function Login() {
  return <Container className="d-flex justify-content-center align-items-center" style= {{ minHeight: '110vh'}}>
    <a className="btn btn-success btn-lg" href={AUTH_URL}>
      Login With Spotify
    </a>
  </Container>
}