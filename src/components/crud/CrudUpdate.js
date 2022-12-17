import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import '../crud/crud.css'

function ContactoUpdate() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [dia, setDia] = useState('')
    const [hora, setHora] = useState('')
    const [serviços, setServiços] = useState('')
    const navigator = useNavigate()
    const {id}= useParams()
    const datos= {
        nome: nome,
        email: email,
        telefone: telefone,
        dia: dia,
        hora: hora,
        serviços: serviços,
    }

    useEffect (() =>
    {
        axios.get(`http://localhost:3004/contatos/${id}`)
               .then((r) => { 
                 setNome(r.data.nome);
                 setTelefone(r.data.telefone);
                 setEmail(r.data.email);
                 setDia(r.data.dia);
                 setHora(r.data.hora);
                 setServiços(r.data.serviços);
                }) 
    }, [id]);

    function Update(e){
        e.preventDefault();
        axios.put(`http://localhost:3004/contatos/${id}`, datos)
        .then(navigator('/'))
    }
    return (
    <form className='container-update'>
      <label htmlFor="nome">Nome:</label>
      <input type="text" name="nome" onChange={(e)=>setNome(e.target.value)} value={nome}/>
      <label htmlFor="email">Email:</label>
      <input type="email" name="email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
      <label htmlFor="telefone">Telefone:</label>
      <input type="text" name="telefone" onChange={(e)=>setTelefone(e.target.value)} value={telefone}/>
      <label htmlFor="dia">Data:</label>
      <input type="date" name="dia" onChange={(e)=>setDia(e.target.value)} value={dia}/>
      <label htmlFor="hora">Hora:</label>
      <input type="time" name="hora" onChange={(e)=>setHora(e.target.value)} value={hora}/>
      <label htmlFor="serviços">Serviços:</label>
      <select name="serviços" onChange={(e)=>setServiços(e.target.value)} value={serviços}>
        <option value="design">Design de sobrancelha</option>
        <option value="toxina">Toxina botulínica</option>
        <option value="colágeno">Estímulo de colágeno</option>
        <option value="láser">Láser</option>
      </select>
      <button className="Edi" onClick={Update}>Atualizar</button>
    </form>) 
    }
export {ContactoUpdate}