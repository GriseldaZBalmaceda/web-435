/*
============================================
; Title: App.ts
; Author: Griselda Balmaceda
;description: hooking up our angular application with a server
;===========================================
*/
import * as express from "express";
const app = express();

interface Composer{
    id:number,
    firstName:string,
    lastName:string
}
const composers:Composer[]=[
    {id:1,firstName:'Johann',lastName:'Bach'},
    {id:2,firstName:'Wolfgang',lastName:'Mozart'},
    {id:3,firstName:'Ludwig',lastName:'Beethoven'},
    {id:4,firstName:'Giuseppe',lastName:'Verdi'},
    {id:5,firstName:'Frederic',lastName:'Chopin'},
];

function getComposers():Composer[]{
    return composers;
}

app.get('/',(request,response)=>{
    response.send('The URL for compsers is http://localhost:3000/api/composers');
});

app.get('/api/composers',(request,response)=>{
    response.json(getComposers())
});

function getComposerById(composerId:number):Composer{
    return composers.find(c=>c.id==composerId);
}

app.get('/api/composers/:id',(request,response)=>{
    response.json(getComposerById(Number(request.params.id)))
});

const server = app.listen(3000,"localhost",()=>{
    console.log('listening on port 3000')
})