

//ejercicio 2
const yo={
    nombre:"franklyn",
    apellido:"sierra",
    edad:15,
    altura:1.72,
    eresDesarrollador:true,
}
const gabriel={
    nombre:"gabriel",
    apellido:"duarte",
    edad:15,
    altura:1.70,
    eresDesarrollador:false,
}
const francisco={
    nombre:"francisco",
    apellido:"delgado",
    edad:15,
    altura:1.69,
    eresDesarrollador:false,
}


let edad=yo.edad
console.log(edad)



const amigos=[{...yo},
{   
nombre:"francisco",
apellido:"delgado",
edad:15,
altura:1.69,
eresDesarrollador:false,

},{ nombre:"gabriel",
apellido:"duarte",
edad:14,
altura:1.70,
eresDesarrollador:false,
}]


console.log(amigos)


amigos.sort((a,b)=>a.edad+b.edad)


console.log(amigos)















