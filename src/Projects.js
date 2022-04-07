import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useState} from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaGlobe } from "react-icons/fa";

export function Projects() {
   const [opt,setopt]=useState(0);
  return (
    <div className="projects">
      <div className="card">
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="coding pic"
        height="140"
        image="/screen.jpg"
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          URL Shortener
        </Typography>
        <Typography variant="body2" color="text.secondary">
          A simple URL shortener
        </Typography>
      </CardContent>
      <CardActions className="cardbuttons">
        <div className="code">
        <Button size="small" onClick={() => {if(opt===1)setopt(0);
          else setopt(1); }}><h3><AiFillGithub/></h3></Button>
          <div className="code2">
        {(opt===1)?(<Button size="small" onClick={() => {window.location.replace("https://github.com/sathwic-jain/URL-shortener") }}>Backend</Button>):<div></div>}
        {(opt===1)?(<Button size="small" onClick={() => {window.location.replace("https://github.com/sathwic-jain/URL-shortener-frontend") }}>Frontend</Button>):<div></div>}
        </div>
        </div>
        <Button size="small" onClick={() => {window.location.replace("https://flamboyant-snyder-59307d.netlify.app/") }}><h3><FaGlobe/></h3></Button>
      </CardActions>
    </Card>
    </div>
    <div className="card">
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/screen.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Password Reset Flow
        </Typography>
        <Typography variant="body2" color="text.secondary">
          A simple Password reset app
        </Typography>
      </CardContent>
      <CardActions className="cardbuttons">
        <div className="code">
        <Button size="small" onClick={() => {if(opt===2)setopt(0);
          else setopt(2); }}><h3><AiFillGithub/></h3></Button>
          <div className="code2">
        {(opt===2)?(<Button size="small" onClick={() => {window.location.replace("https://github.com/sathwic-jain/Password") }}>Backend</Button>):<div></div>}
        {(opt===2)?(<Button size="small" onClick={() => {window.location.replace("https://github.com/sathwic-jain/Password-reset-flow") }}>Frontend</Button>):<div></div>}
        </div>
        </div>
        <Button size="small" onClick={() => {window.location.replace("https://nervous-pare-98939b.netlify.app/") }}><h3><FaGlobe/></h3></Button>
      </CardActions>
    </Card>
      </div>
      <div className="card">
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/screen.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          CRM APP
        </Typography>
        <Typography variant="body2" color="text.secondary">
          A basic CRM app
        </Typography>
      </CardContent>
      <CardActions className="cardbuttons">
        <div className="code">
        <Button size="small" onClick={() => {if(opt===3)setopt(0);
          else setopt(3); }}><h3><AiFillGithub/></h3></Button>
          <div className="code2">
        {(opt===3)?(<Button size="small" onClick={() => {window.location.replace("https://github.com/sathwic-jain/Hackathon-2-CRM") }}>Backend</Button>):<div></div>}
        {(opt===3)?(<Button size="small" onClick={() => {window.location.replace("https://github.com/sathwic-jain/CRM") }}>Frontend</Button>):<div></div>}
        </div>
        </div>
        <Button size="small" onClick={() => {window.location.replace("https://objective-wozniak-8e7e8e.netlify.app/") }}><h3><FaGlobe/></h3></Button>
      </CardActions>
    </Card>
      </div>
      <div className="card">
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/screen.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Shopping cart
        </Typography>
        <Typography variant="body2" color="text.secondary">
          A simple frontend working shopping cart
        </Typography>
      </CardContent>
      <CardActions className="cardbuttons">
        <div className="code">
        <Button size="small" onClick={() => {if(opt===4)setopt(0);
          else setopt(4); }}><h3><AiFillGithub/></h3></Button>
          <div className="code2">
        {(opt===4)?(<Button size="small" onClick={() => {window.location.replace("https://github.com/sathwic-jain/Cart_add") }}>Frontend</Button>):<div></div>}
        </div>
        </div>
        <Button size="small" onClick={() => {window.location.replace("https://ecstatic-haibt-4a0606.netlify.app/") }}><h3><FaGlobe/></h3></Button>
      </CardActions>
    </Card>
      </div>
      <div className="card">
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/screen.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          User CRUD app
        </Typography>
        <Typography variant="body2" color="text.secondary">
          A basic User CRUD app
        </Typography>
      </CardContent>
      <CardActions className="cardbuttons">
        <div className="code">
        <Button size="small" onClick={() => {if(opt===5)setopt(0);
          else setopt(5); }}><h3><AiFillGithub/></h3></Button>
          <div className="code2">
        {(opt===5)?(<Button size="small" onClick={() => {window.location.replace("https://github.com/sathwic-jain/CRUD-USERS-using-api") }}>Frontend</Button>):<div></div>}
        </div>
        </div>
        <Button size="small" onClick={() => {window.location.replace("https://frosty-benz-75e937.netlify.app/") }}><h3><FaGlobe/></h3></Button>
      </CardActions>
    </Card>
      </div>
      <div className="card">
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/screen.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Tic Tac Toe game
        </Typography>
        <Typography variant="body2" color="text.secondary">
          A simple Tic Tac Toe game
        </Typography>
      </CardContent>
      <CardActions className="cardbuttons">
        <div className="code">
        <Button size="small" onClick={() => {if(opt===6)setopt(0);
          else setopt(6); }}><h3><AiFillGithub/></h3></Button>
          <div className="code2">
        {(opt===6)?(<Button size="small" onClick={() => {window.location.replace("https://github.com/sathwic-jain/Game") }}>Frontend</Button>):<div></div>}
        </div>
        </div>
        <Button size="small" onClick={() => {window.location.replace("https://nifty-euclid-d5bcda.netlify.app/") }}><h3><FaGlobe/></h3></Button>
      </CardActions>
    </Card>
      </div>
    </div>
  );
}
