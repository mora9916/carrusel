import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Splide from "@splidejs/splide";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'carrusel';
  // Definiciones iniciales
  footerDate:number = new Date().getFullYear();
  //Inicialización de imagenes
  img1:string = "";
  img2:string = "";
  img3:string = "";
  img4:string = "";
  img5:string = "";
  img6:string = "";
  //Inicialización de textos
  information1:string = "";
  information2:string = "";
  information3:string = "";
  information4:string = "";
  information5:string = "";
  information6:string = "";
  ngOnInit(): void {
  //llamar a metodo carrusel this.carrusel(1);
    this.carrusel(1);
  }
  carrusel(op: number): void {
    new Splide(".mycarousel", { 
    perPage: 3,
    perMove: 1,
    padding: "5%",
    rewind: true, 
}).mount();

  switch (op) { 
    case 1:
      this.img1 = "/mexicana.jpg";
      this.information1 = "Pizza Mexicana <br> $230.00"; 
      this.img2 = "/romana.jpg";
      this.information2 = "Pizza Romana <br> $180.00"; 
      this.img3 = "/hawayana.jpg";
      this.information3 = "Pizza Hawayana <br> $120.00"; 
      this.img4 = "/peperoni.jpg";
      this.information4 = "Pizza Peperoni <br> $190.00"; 
      this.img5 = "/queso.jpg";
      this.information5 = "Pizza Queso <br> $100.00"; 
      this.img6 = "/atun.jpg";
      this.information6 = "Pizza Atun <br> 125.00"; 
      break;

    case 2:
      this.img1 = "/polloking.jpg";
      this.information1 = "Hamburguesa de pollo <br> $75.00";
      this.img2 = "/baconking.jpg";
      this.information2 = "Hamburguesa bacon <br> $95.00";
      this.img3 = "/clasicaking.jpg";
      this.information3 = "Hamburguesa clasica <br> $60.00";
      this.img4 = "/doblecarneking.jpg";
      this.information4 = "Hamburguesa doble carne <br> $130.00";
      this.img5 = "/quesoking.jpg";
      this.information5 = "Hamburguesa de queso <br> $50.00";
      this.img6 = "/whopperking.jpg";
      this.information6 = "Hamburguesa whopper <br> $160.00";
      break;
    
    case 3:
      this.img1 = "/caramelo.jpg";
      this.information1 = "capuchino caramelo <br> $85.00";
      this.img2 = "/clasico.jpg";
      this.information2 = "cafe clasico <br> $55.00";
      this.img3 = "/moka.jpg";
      this.information3 = "cafe Moka <br> $80.00";
      this.img4 = "/unicornio.jpg";
      this.information4 = "cafe unicornio <br> $90.00";
      this.img5 = "/cafehelado.jpg";
      this.information5 = "capuchino caramelo <br> $60.00";
      this.img6 = "/cafefrio.jpg";
      this.information6 = "capuchino caramelo <br> $65.00";
      break;
    }//fin swith
  }//fin del metodo carrusel
}
