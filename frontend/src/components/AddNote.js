import {React, useState} from "react";

const AddNote = () => {

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async(e) => {
    e.preventDefault();
    const note = {title, desc, category}

    const response = await fetch('/api/notes', {
      method: 'POST',
      body: JSON.stringify(note),
      headers: {'Content-Type': 'application/json'}
    })

    const json = await response.json();
    if(!response.ok){
      setError(json.error);
    }
    if(response.ok){
      setError(null);
      setTitle('');
      setCategory('');
      setDesc('');
    }
  }

  return (
    <form className="create sticky-top p-3" onSubmit={handleSubmit}>
      <h3>Add New Note</h3>
      <div className="form-floating mb-3">
        <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} className="form-control focus-ring focus-ring-light" id="exampleFormControlInput" />
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Note Title:
        </label>
      </div>
      <div className="form-floating mb-3">
        <textarea onChange={(e) => setDesc(e.target.value)} value={desc} className="form-control focus-ring focus-ring-light" id="exampleFormControlTextarea1" rows="3"></textarea>
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Descrption:
        </label>
      </div>

      <div className="mb-3">
      <select onChange={(e)=> setCategory(e.target.value)} value={category} className="form-select focus-ring focus-ring-light">
        <option defaultValue>Select Category</option>
        <option value="college">College</option>
        <option value="office">Office</option>
        <option value="personal">Personal</option>
      </select>
      </div>

      <button type="submit" className="btn btn-outline-add">Add Note</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
}

export default AddNote;
