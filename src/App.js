import React from 'react';
class App extends React.Component
{
  constructor()
  {
    super();
    this.state={
      taille:'',
      poid:'',
      indice:'',
      
    }
  }
  onChange= e=>{
    this.setState({[e.target.name]:e.target.value});
  };
calcule=event=>{
  event.preventDefault();
  let poid=this.state.poid;
  let taille=this.state.taille;
  if(this.state.poid !==''&&this.state.taille!=='')
  {
    let indice=Math.round(poid/Math.pow(taille,2));
    alert("votre état est: "+this.detection(indice));
    var index='';
    if(indice<35)
    {
     index=<span className="alert alert-info">votre IMC est: {indice}</span>
    }
    else
    {
      index=<span className="alert alert-danger">votre IMC est: {indice}</span>
     }

    this.setState({indice:index})
  }
  else
  {
    alert("veuillez remplir tout les champs!")
  }
}
detection(imc)
{
  if(imc<20)
  return "maigre";
  else if(imc<=25)
  return 'idéale';
  else
  return "surpoid";

}
  render()
  {return(<>
  
  <div className="container text-center">
  <div className="row">
    <div className="col">
      
    </div>
    <div className="col">
      <form onSubmit={this.calcule}>
        <h1 className='text-center'>Calcule IMC</h1>
        <div className="mb-3">
  <label  className="form-label">Taille</label>
  <input value={this.state.taille} name="taille" onChange={this.onChange} placeholder='taille' type="number" className="form-control" ></input>
</div>
        <div className="mb-3">
  <label  className="form-label">Poid</label>
  <input value={this.state.poid} name="poid" onChange={this.onChange} placeholder='poid' type="number" className="form-control" ></input>
</div>
        <div className="mb-3">
  <button className="btn btn-primary" type="submit">Calculer IMC</button>
  <br></br><br></br><br></br> {this.state.indice}
</div>


      </form>
    </div>
    <div className="col">
      
    </div>
  </div>
</div>
  
  
  </>)}
}
export default App;