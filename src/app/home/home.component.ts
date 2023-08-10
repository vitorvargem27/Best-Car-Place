import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [MatGridListModule, NgFor, NgIf, MatCardModule, MatIconModule, MatDividerModule, MatButtonModule,
    CommonModule, MatDialogModule],
})

export class HomeComponent {

  constructor(private router: Router){}

  seeDetails(imovelId : string){
    this.router.navigate(['/detalhes', imovelId]);
  }

  toogleFavorito(index: number): void {
    this.carros[index].favorito = !this.carros[index].favorito
  }

  rotateCard(){
    let cardContentRotate = document.getElementById("flipCardInner")
    let frontCard = document.getElementById("flipCardFront");
    let backCard = document.getElementById("flipCardBack");
    let buttonRotate = document.getElementById("detailsButton")

    if(frontCard?.style.display === "inline"){
      backCard?.style.display === "inline"
      cardContentRotate?.style.transform === "rotateY(-180deg)"
      
    }
  }

  title: string = 'Casa Magnífica'
  fotoExterna: string = 'https://i.ibb.co/JKzFtzj/casa.jpg'


  modalDetalhes: Array<any> = [

  ]

  nome: string = 'Vitor';
  sobrenome: string = 'Barbosa';
  carros: Array<any> = [

    {
      id: 1,
      titulo: 'Ford Mustang',
      fotoExterna:  'https://i.ibb.co/bPvZWqY/mustang-dianteira.jpg',
      fotoInterna: 'https://i.ibb.co/P6fZx6H/mustang-interno.jpg',
      fotoTraseira: 'https://i.ibb.co/jTyZ3ZY/mustang-traseira.jpg',
      ano: 2023,
      cor: 'Vermelho',
      valor: "R$" + 600 + ".000",
      favorito: true,
    },

    {
      id: 2,
      titulo: 'Tesla Model 3',
      fotoExterna: 'https://i.ibb.co/tMq21LV/tesla-dianteira.jpg',
      fotoInterna: 'https://i.ibb.co/2WKQYd8/tesla-interior.jpg',
      fotoTraseira: 'https://i.ibb.co/LhVjJy1/tesla-traseira.jpg',
      ano: 2020,
      cor: 'Vermelho',
      valor: "R$" + 1 + ".000.000",
      favorito: false
    },

    {
      id: 3,
      titulo: 'Camaro Sport',
      fotoExterna: 'https://i.ibb.co/ssTZf5T/camaro-frente.jpg',
      fotoInterna: 'https://i.ibb.co/dKyfJqd/camaro-interno.jpg',
      fotoTraseira: 'https://i.ibb.co/472j0LN/camaro-traseira.jpg',
      ano: 2022,
      cor: 'Azul',
      valor: "R$300.000",
      favorito: false
    },

    {
      id: 4,
      titulo: 'Volkswagen Polo',
      fotoExterna:  'https://i.ibb.co/nwjm9ZT/polo-externo.jpg',
      fotoInterna: 'https://i.ibb.co/zGZHLM8/polo-interno.jpg',
      fotoTraseira: 'https://i.ibb.co/CH7Wncp/polo-traseira.jpg',
      ano: 2019,
      cor: 'Prata',
      valor: "R$" + 95 + ".000",
      favorito: true
    },

    {
      id: 5,
      titulo: 'Ford Fusion',
      fotoExterna: 'https://i.ibb.co/2nNsFkt/sala-comercial.jpg',
      fotoInterna: '',
      fotoTraseira: '',
      ano: 2020,
      cor: '',
      valor: "R$" + 120 + ".000",
      favorito: false
    },

    {
      id: 6,
      titulo: 'New Beetle',
      fotoExterna: 'https://i.ibb.co/pPHQfW2/cobertura.jpg',
      fotoInterna: '',
      fotoTraseira: '',
      ano: 2020,
      cor: '',
      valor: "R$" + 150 + ".000",
      favorito: true
    },
  ]

}