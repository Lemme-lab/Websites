import React, {UseState} from "react";
import "./App.css";
import { useEffect } from 'react';
import { useState } from 'react';

export function getkey(name,setbook) {

    var error = null;
    var isloaded = false;
    var books = [];
    var output = [];

    console.log("got here")
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + name)
    .then(res => res.json())
    .then(
        (result)=>{
        isloaded = false;
        //console.log(result);
        output = result
        setbook(output);

        },
        (error)=>{
        isloaded = true;
        error = true;
        }
        )

    return output;
}