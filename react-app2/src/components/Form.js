import React, { useState } from 'react'

const Form = () => {

  const [form, setForm] = useState({model:'', price:'', year:''});

  const formHander = (e) => {
    const eventData = {...form, [e.target.name]:e.target.value}
    setForm({...form, ...eventData})
  }

  const onSubmit = (e) =>{
    e.preventDefault()
  }

  return (
    <div>
      <form>
        <label>Model: <input type='text' name={'model'} value={form.model} onChange={formHander}/></label>
        <label>Price: <input type='text' name={'price'} value={form.price} onChange={formHander}/></label>
        <label>Year: <input type='text' name={'year'} value={form.year} onChange={formHander}/></label>
        <button onClick={onSubmit}>Send</button>
      </form>
    </div>
  )
}

export {Form}