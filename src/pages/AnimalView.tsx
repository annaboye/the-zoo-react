import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar"
import { IAnimal } from "../models/IAnimal";
import { useParams } from "react-router";
import { Animal } from "../components/Animal";



export const AnimalView = () =>{

    const animals: IAnimal[]= (JSON.parse(localStorage.getItem("animals")|| "[]"));
    const params = useParams();
    const currentAnimal = animals.find((animal)=> animal.id.toString() === params.id)

    return(<>
    <Navbar></Navbar>
    {currentAnimal &&<Animal animal={currentAnimal}fullDesc={true} animalList={animals}></Animal>}
    </>)
}

