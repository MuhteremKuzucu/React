// React'te bileşenlerin iki kez render edilmesi, genellikle React Strict Mode kullanıldığında görülen bir durumdur. Bu davranış, React'in geliştirme modunda belirli işlemleri iki kez çalıştırarak potansiyel sorunları tespit etmesine olanak tanır. Bu durum, production (yayınlama) modunda meydana gelmez.

// LifeCycle Methods
// ComponentDidMount 
// ComponentDidUpdate 
// ComponentWillUnmount


import React,{Component} from "react";

class LifeCycle extends Component{
    constructor(props){
        super(props);
        console.log("state oluştur. Constructor çalıştı")
        this.state={
            count:0
        }
    }

//! Component DOM'a yerleştiğinde çalışır. API çağrıları veya başlangıç işlevlerini burada yapabilirsiniz.

 componentDidMount(){
    console.log("component Dom'a yerleşti")
 }

 componentDidUpdate(){
    console.log("Update çalıştı")
 }

 componentWillUnmount(){
    console.log("Component öldu. MEvlüdüne davetlisiniz")
 }

increment=()=>{
    this.setState((prevState)=>({count:prevState.count+1}))
}
decrement=()=>{
    this.setState((prevState)=>({count:prevState.count-1}))
}

reset=()=>{
    this.setState(()=>({count:0}))

}
render(){
    return(
        <div>
        <div className="container mt-5 ">
               <div className="card text-center shadow w-50 m-auto">
                 <div className="card-header bg-primary text-white">
                   <h2>Counter</h2>
                 </div>
                 <div className="card-body">
                   <h1 className="display-4 mb-4">{this.state.count}</h1>
                   <div className="btn-group">
                     <button
                       className="btn btn-success"
                       onClick={this.increment}
                     >
                       <i className="bi bi-plus-circle"></i> Artır
                     </button>
                     <button
                       className="btn btn-danger"
                       onClick={this.decrement}
                     >
                       <i className="bi bi-dash-circle"></i> Azalt
                     </button>
                     <button
                       className="btn btn-warning"
                       onClick={this.reset}
                     >
                       <i className="bi bi-arrow-counterclockwise"></i> Sıfırla
                     </button>
                   </div>
                 </div>
                
               </div>
             </div>
               </div>
    )
}




}

export default LifeCycle;