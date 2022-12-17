import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import './crud.css'

const CrudTable = () => {
  
  const [contactos, setContactos] = useState([]);

  function TableContato() {
    fetch('http://localhost:3004/contatos')
    .then((r) => r.json())
    .then((data) => setContactos(data));

  }
  useEffect(() => {
    TableContato()

  },[] )

  const handleDelete = async (contactosId) => {

    const response = await fetch(`http://localhost:3004/contatos/${contactosId}`,
      { method: 'DELETE'});
  
      if (response.ok) {
        alert('Deseja cancelar o agendamento?')
        TableContato();
      }   
      else
        console.log('ERRO');     
      } 

  return(
  <div>
    <h3 className='titulo'>Agendamento</h3>
      <div className='container-table'>
        <Table striped bordered hover>
          <thead className='thead'>
            <tr>
              <td className='negrita'>Nro.</td>
              <td className='negrita'>Nome</td>
              <td className='negrita'>Email</td>
              <td className='negrita'>Telefone</td>
              <td className='negrita'>Data</td>
              <td className='negrita'>Hora</td>
              <td className='negrita'>Serviços</td>
              <td className='negrita'>Opçoes</td>
            </tr>
          </thead>
          <tbody className='tbody'>
          {contactos.map((contactos,id) => {
            return (
              <tr key={id}>
                <td>{id+1}</td>
                <td>{contactos.nome}</td>
                <td>{contactos.email}</td>
                <td>{contactos.telefone}</td>
                <td>{contactos.dia}</td>
                <td>{contactos.hora}</td>
                <td>{contactos.serviços}</td>
                <td className='opcoes'>
                  <Link className='link' to={`/CrudUpdate/${contactos.id}`}>Atualizar</Link>
                  <button className='op2' onClick={()=> handleDelete(contactos.id)}>Cancelar</button>
                </td>
              </tr>
            )
          }) 
  }
          </tbody>        
        </Table>
      </div>
  </div>)
}

export {CrudTable};