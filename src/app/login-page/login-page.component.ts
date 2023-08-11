import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';

import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  standalone: true,
  imports: [MatGridListModule, MatCardModule, MatTabsModule, MatIconModule, MatTooltipModule, MatButtonModule, NgFor ],
})

export class LoginPageComponent {

  article: string = 'Somos um estabelecimento web que trabalha com vendas de automóveis através da web e entregas realizadas físicas diretamente em seu local de encontro ou moradia!!'

  vendaAutomovel: string = 'https://i.ibb.co/34x302x/negocios-venda.jpg'

  icones : Array<any> = [

    {
      nome : 'Whatsapp',
      icone : 'https://i.ibb.co/b1s7k05/whatsapp-logo-icone-1.png',
    }

  ]
}
