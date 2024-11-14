import { Component } from "react";

//* ====================== CLASS COMPONENTS AND STATE ======================
//* React taki Class-Components  ES6 class yapısını temel alır.
//* çok fazla boilerplate code a sahipler.
//* fakat, state lere sahip olabilirler
//*  state component hakkında data veya bilgi içermek için kullanılan yerleşik bir React object tidir. component in durumu zamanla değişebilir ;
//* ne zaman değişse component re-render olur.
//* this.state ile constructor da state için bir initial value atayabiliriz. constructor  dışında, state i setState() metoduyla değiştirebiliriz,
//* =========================================================================

class Counter extends Component {
  constructor(props) {
    super(props);

    //!state e başlangıç değerleri atadık
    this.state = {
      sayac: 0,
      baslik: "merhaba",
      kisi: { isim: "muhterem", meslek: "developer" },
    };
  }

  arttir() {
    this.setState({ sayac: this.state.sayac + 1 });

    this.setState({ baslik: "HALLO" });
  }
  //!burada arrow function tercih ettiğimiz için button kısmında fonk. bind etmeye gerek kalmadı

  azalt = () => {
    this.setState({ sayac: this.state.sayac - 1 });
  };

  render() {
    return (
      <div className="text-center">
        <h1> SAYAC: {this.state.sayac} </h1>
        <h2>{this.state.baslik} </h2>

        <button onClick={this.arttir.bind(this)} className="btn btn-primary">
          ARTTIR
        </button>

        <button onClick={this.azalt} className="btn btn-danger">
          AZALT
        </button>
      </div>
    );
  }
}

export default Counter;
