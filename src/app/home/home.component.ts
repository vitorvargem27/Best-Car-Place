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

  title: string = 'Casa Magnífica'
  fotoExterna: string = 'https://i.ibb.co/JKzFtzj/casa.jpg'


  modalDetalhes: Array<any> = [

  ]

  nome: string = 'Vitor';
  sobrenome: string = 'Barbosa';
  carros: Array<any> = [

    {
      id: 1,
      titulo: 'Mustang 2023',
      fotoExterna:  'https://i.ibb.co/nwjm9ZT/polo-externo.jpg',
      fotoInterna: 'https://i.ibb.co/zGZHLM8/polo-interno.jpg',
      fotoTraseira: 'https://i.ibb.co/CH7Wncp/polo-traseira.jpg',
      ano: 2023,
      cor: '',
      valor: "R$" + 600 + ".000",
      favorito: true,
    },

    {
      id: 2,
      titulo: 'Camaro Sport 2022',
      fotoExterna: 'https://i.ibb.co/JKzFtzj/casa.jpg',
      fotoInterna: '',
      fotoTraseira: '',
      ano: 2022,
      cor: '',
      valor: "R$300.000",
      favorito: false
    },

    {
      id: 3,
      titulo: 'Tesla Model 3',
      fotoExterna: 'https://i.ibb.co/5h1XHzY/casa-de-campo.jpg',
      fotoInterna: '',
      fotoTraseira: '',
      ano: 2020,
      cor: '',
      valor: "R$" + 1 + ".000.000",
      favorito: false
    },

    {
      id: 4,
      titulo: 'Volkswagen Polo',
      fotoExterna:  'https://i.ibb.co/nwjm9ZT/polo-externo.jpg',
      fotoInterna: 'https://i.ibb.co/zGZHLM8/polo-interno.jpg',
      fotoTraseira: 'https://i.ibb.co/CH7Wncp/polo-traseira.jpg',
      ano: 2019,
      cor: '',
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