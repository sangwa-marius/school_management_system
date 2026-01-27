function Add() {
  return (
    <div style={{textAlign:'center',marginTop:'200px'}}>
      <h2 style={{color: 'blue',marginTop: '80px',fontWeight: 'bold',}}>Add Student here</h2>
      <form action="">
        <input type="text" placeholder="Name"required/>
        <br/>
        <input type="number" placeholder="Math Score" required/>
        <br/>
        <input type="number" placeholder="Physics Score" required/>
        <br/>
        <input type="number" placeholder="Computer Science Score" required/>
        <br/>
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default Add;