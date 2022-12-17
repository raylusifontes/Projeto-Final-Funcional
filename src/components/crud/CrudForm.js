import React, { useState } from 'react'
import {useNavigate, Link} from 'react-router-dom'
import '../crud/crud.css'

const CrudForm = () => {
  const [formData, setFormData] = useState({
      nome : '',
      email : '',
      telefone : '',
      serviços : '',
    })

    const navigator = useNavigate()

    const handleSubmit = async (event) => {
      event.preventDefault();
       
      const response = await fetch('http://localhost:3004/contatos/',
        { method: 'POST',
          body: JSON.stringify(formData),
          headers: {"Content-type": "application/json; charset=UTF-8"}    
        });
    
        if (response.ok) {
          setFormData({
            nome: '',
            telefone: '',
            email: '',
            serviços:'',
          });
          console.log("OKS", response.ok);
          navigator('/');
           
        }   
        else
          console.log('ERRO');   
        } 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return<>
  <form onSubmit={handleSubmit}>
    <div className="container-fluid formulario">
      <div className="row">
          <div className="row justify-content-center"> 
            <div className="col-10 col-sm-8 col-md-6 col-lg-4">             
              <h3 className="titulo-form">Bora agendar!</h3>
              <label className='form-label' htmlFor="nome">Nome:</label>
              <input placeholder='Rihanna' type="text" name="nome" onChange={handleChange} value={formData.nome} className='form-control'/>
              <label className='form-label' htmlFor="email">Email:</label>
              <input placeholder='Rihanna@' type="email" name="email" onChange={handleChange} value={formData.email} className='form-control'/>
              <label className='form-label' htmlFor="dia">Data:</label>
              <input placeholder=' dd/mm/ano' type="date" name="dia" onChange={handleChange} value={formData.dia} className='form-control'/>
              <label className='form-label' htmlFor="hora">Hora:</label>
              <input placeholder=' ' type="time" name="hora" onChange={handleChange} value={formData.hora} className='form-control'/>
              <label className='form-label' htmlFor="telefone">Telefone:</label>
              <input placeholder='(DD)-------' type="text" name="telefone" onChange={handleChange} value={formData.telefone} className='form-control'/>
              <label className='form-label' htmlFor="serviços">Serviços:</label>
              <select name="serviços" onChange={handleChange} value={formData.serviços} className='form-control'>
                <option value="design">Design de sobrancelha</option>
                <option value="toxina">Toxina botulínica</option>
                <option value="colágeno">Estímulo de colágeno</option>
                <option value="láser">Láser</option>
              </select>
              <input className='op2' type="submit" value="Agendar" />
              <Link className='link' to={'/'}>Cancelar</Link>
            </div>
        </div>
      </div>
    </div>
  </form>
  </>
}

export {CrudForm};