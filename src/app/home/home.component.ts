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

export class DialogContentExampleDialog{}

export class HomeComponent {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  toogleFavorito(index: number): void {
    this.imoveis[index].favorito = !this.imoveis[index].favorito
  }

  nome: string = 'Vitor';
  sobrenome: string = 'Barbosa';
  imoveis: Array<any> = [

    {
      id: 1,
      titulo: 'Casa Magnífica',
      foto: 'https://i.ibb.co/tmsG61R/apartamento.jpg',
      quartos: 4,
      banheiros: "3",
      tamanho: "1.000m²",
      valor: "R$" + 890 + ".000",
      favorito: true
    },

    {
      id: 2,
      titulo: 'Mansão Gigante',
      foto: 'https://i.ibb.co/JKzFtzj/casa.jpg',
      quartos: 6,
      banheiros: "4",
      tamanho: "1.000m²",
      valor: "R$1.000.000",
      favorito: false
    },

    {
      id: 3,
      titulo: 'Casa de Campo',
      foto: 'https://i.ibb.co/5h1XHzY/casa-de-campo.jpg',
      quartos: 7,
      banheiros: 5,
      tamanho: 800 + "m²",
      valor: "R$" + 150 + ".000",
      favorito: false
    },

    {
      id: 4,
      titulo: 'Flat Minimalista',
      foto:  'https://i.ibb.co/FqSpsYt/flat.jpg',
      quartos: 1,
      banheiros: "1",
      tamanho: 36 + "m²",
      valor: "R$" + 200 + ".000",
      favorito: true
    },

    {
      id: 5,
      titulo: 'Sala Comercial',
      foto: 'https://i.ibb.co/2nNsFkt/sala-comercial.jpg',
      quartos: 0,
      banheiros: 1,
      tamanho: 25,
      valor: "R$" + 250 + ".000",
      favorito: false
    },

    {
      id: 6,
      titulo: 'Cobertura Duplex',
      foto: 'https://i.ibb.co/pPHQfW2/cobertura.jpg',
      quartos: 3,
      banheiros: 3,
      tamanho: 200,
      valor: "R$" + 150 + ".000",
      favorito: true
    },
  ]

}