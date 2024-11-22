import React,{Component}  from "react";

class Selamlama extends Component{
    render(){
        return <h2>Merhaba {this.props.isim}</h2>
    }
}

export default Selamlama;