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

  icones : Array<any> = [

    {
      nome : 'Whatsapp',
      imagem : 'https://i.ibb.co/k3fV0pf/whatsapp-logo-icone-1.png',
    }

  ]

}
