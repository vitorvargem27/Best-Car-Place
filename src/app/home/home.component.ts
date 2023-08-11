import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [MatGridListModule, NgFor, NgIf, MatCardModule, MatIconModule, MatDividerModule, MatButtonModule,
    CommonModule, MatDialogModule],
})

export class HomeComponent {

  constructor(private router: Router) { }

  seeDetails(imovelId: string) {
    this.router.navigate(['/detalhes', imovelId]);
  }

  toogleFavorito(index: number): void {
    this.carros[index].favorito = !this.carros[index].favorito
  }

  rotateCard(id:any) {
    let frontCard = document.getElementById("flipCardFront" + id );
    let backCard = document.getElementById("flipCardBack" + id);
    let cardInner = document.getElementById("flipCardInner" + id);
    let buttonCard = document.getElementById("detailsButton" + id);
    if(frontCard !== null && backCard !== null && cardInner !== null && buttonCard !== null){
      frontCard?.style.display === "none"
      backCard?.style.display === "inline"
      cardInner?.style.transform === "rotateY(-180deg)"
      cardInner?.style.transition === "1s"

      buttonCard?.style.backgroundColor === "blue"
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
    fotoExterna: 'https://i.ibb.co/bPvZWqY/mustang-dianteira.jpg',
    fotoInterna: 'https://i.ibb.co/P6fZx6H/mustang-interno.jpg',
    fotoTraseira: 'https://i.ibb.co/jTyZ3ZY/mustang-traseira.jpg',
    ano: 2023,
    portas: 2 + ' portas',
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
    portas: 4 + ' portas',
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
    portas: 2 + ' portas',
    cor: 'Azul',
    valor: "R$300.000",
    favorito: false
  },

  {
    id: 4,
    titulo: 'Volkswagen Polo',
    fotoExterna: 'https://i.ibb.co/nwjm9ZT/polo-externo.jpg',
    fotoInterna: 'https://i.ibb.co/zGZHLM8/polo-interno.jpg',
    fotoTraseira: 'https://i.ibb.co/CH7Wncp/polo-traseira.jpg',
    ano: 2019,
    portas: 4 + ' portas',
    cor: 'Prata',
    valor: "R$" + 95 + ".000",
    favorito: true
  },

  {
    id: 5,
    titulo: 'Ford Fusion',
    fotoExterna: 'https://i.ibb.co/rszPn7g/fusion-dianteira.jpg',
    fotoInterna: 'https://i.ibb.co/m90MkmL/fusion-interno.jpg',
    fotoTraseira: 'https://i.ibb.co/266cDbh/fusion-traseira.jpg',
    ano: 2020,
    portas: 4 + ' portas',
    cor: 'Preto',
    valor: "R$" + 120 + ".000",
    favorito: false
  },

  {
    id: 6,
    titulo: 'New Beetle',
    fotoExterna: 'https://i.ibb.co/f2n1cKf/beetle-dianteira.jpg',
    fotoInterna: 'https://i.ibb.co/Gvy3gZ1/beetle-interno.jpg',
    fotoTraseira: 'https://i.ibb.co/yNZbQfL/beetle-traseira.jpg',
    ano: 2020,
    portas: 2 + ' portas',
    cor: 'Branco',
    valor: "R$" + 150 + ".000",
    favorito: true
  },
]

}