import * as React from 'react';
import './App.css';

//import logo from './logo.svg';

class List extends React.Component<any,any>{

    constructor(props:any){
        super(props);

    }



    public render(){
        return(
            <ul >
                {this.props.stavke.map((value:any,ind:any)=><li id={ind} >{value}</li>)}


            </ul>
        );



    }



}


class App extends React.Component<any,any> {

    constructor(props:any){
        super(props);
        this.state={
            stavka:'',
            stavke:[]
        }

    }
    public menjaj(e:any):void{
        this.setState({stavka:e.target.value});
    }
    public submituj(e:any):void {
        e.preventDefault();

        this.setState({stavka: '', stavke: [...this.state.stavke, this.state.stavka]});
    }
    public obrisi(e:any):void{
        e.preventDefault();

        this.setState({stavke:this.state.stavke.filter((value:any,index:number)=>value!=this.state.stavka),stavka:''});


}


  public render() {
      return <form >
          <div>
              <input value={this.state.stavka} onChange={e => this.menjaj(e)}/><br/>
              <button onClick={(e)=>this.submituj(e)}>Sacuvaj</button>
              <button onClick={e =>this.obrisi(e)}>Obrisi</button>
              <List stavke={this.state.stavke}/>

          </div>

      </form>;
  }
}

export default App;
