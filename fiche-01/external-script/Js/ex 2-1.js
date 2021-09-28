"use strict";

function init(){
    addDateTime("Hello");
}

function addDateTime(message){
    const dateTimeNow = new Date();
    console.log(dateTimeNow.toLocaleDateString());
    console.log(dateTimeNow.toLocaleTimeString());
    alert(message+" "+dateTimeNow.toLocaleDateString()+" "+dateTimeNow.toLocaleTimeString())
}