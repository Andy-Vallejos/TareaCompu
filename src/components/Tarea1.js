import React, { useState } from 'react';
import './Tarea1.css';

export default function Tarea1(){

    const[form, setForm] = useState({});
    const[resultado, setResultado] = useState(0);
    
    const handleChange = (e) => {
        setForm({
            ...form, [e.target.name]:e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        let resultado = 0, num1 = 0, num2 = 0;
        num1 = form.num1;
        num1 = parseInt(num1);
        num2 = form.num2;
        num2 = parseInt(num2);

        if(form.op === "suma"){
            resultado = num1 + num2;
            setResultado(resultado);
        } else if(form.op === "resta"){
            resultado = num1 - num2;
            setResultado(resultado);
        } else if(form.op === "mult"){
            resultado = num1 * num2;
            setResultado(resultado);
        } else if(form.op === "div"){
            resultado = num1 / num2;
            setResultado(resultado);
        } else {
            alert('Elige una opcion')
        }

        
    }

    return(
        <div className="container">
            <div className="title">
                <h1>Tarea Computacion</h1>
            </div>
            <form onSubmit={handleSubmit} className="form">
                    <div className="formL">
                        <input type="text" name="num1" id="num1" value={form.num1} onChange={handleChange} placeholder="Ingrese el numero 1"/>
                        <input type="text" name="num2" id="num2" value={form.num2} onChange={handleChange} placeholder="Ingrese el numero 2"/>
                        <input type="submit" value="Calcular"/>
                    </div>
                    <div className="formL">
                        <div className="radios">
                            <input type="radio" name="op" id="suma" value="suma" onChange={handleChange}/><label htmlFor="suma">Suma</label>
                        </div>
                        <div className="radios">
                            <input type="radio" name="op" id="resta" value="resta" onChange={handleChange}/><label htmlFor="resta">Resta</label>
                        </div>
                        <div className="radios">
                            <input type="radio" name="op" id="mult" value="mult" onChange={handleChange}/><label htmlFor="mult">Multiplicacion</label>
                        </div>
                        <div className="radios">
                            <input type="radio" name="op" id="div" value="div" onChange={handleChange}/><label htmlFor="div">Division</label>
                        </div>
                    </div>
            </form>
            <div className="resultado">
                <h1>El resultador es: {resultado}</h1>
            </div>
        </div>
    )
}