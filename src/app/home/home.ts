import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIcon } from '@angular/material/icon';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { MatOption, MatSelect } from '@angular/material/select';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { MatButton, MatIconButton } from '@angular/material/button';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    MatInput,
    MatIcon,
    MatSlideToggleModule,
    MatFormField, MatLabel,
    MatSelect,
    MatOption,
    MatTabGroup,
    MatTab,
    MatButton,
    MatIconButton,
    NgFor
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  cards = [
    {
      name: 'Name',
      email: 'ninfo.palanis@bluechildco.com',
      phone: '(525) 827-6387'
    },
    {
      name: 'Name',
      email: 'ninfo.palanis@bluechildco.com',
      phone: '(525) 827-6387'
    },
    {
      name: 'Name',
      email: 'ninfo.palanis@bluechildco.com',
      phone: '(525) 827-6387'
    },
    {
      name: 'Name',
      email: 'ninfo.palanis@bluechildco.com',
      phone: '(525) 827-6387'
    },
    {
      name: 'Name',
      email: 'ninfo.palanis@bluechildco.com',
      phone: '(525) 827-6387'
    },
    {
      name: 'Name',
      email: 'ninfo.palanis@bluechildco.com',
      phone: '(525) 827-6387'
    },
    {
      name: 'Name',
      email: 'ninfo.palanis@bluechildco.com',
      phone: '(525) 827-6387'
    },
    {
      name: 'Name',
      email: 'ninfo.palanis@bluechildco.com',
      phone: '(525) 827-6387'
    },
    {
      name: 'Name',
      email: 'ninfo.palanis@bluechildco.com',
      phone: '(525) 827-6387'
    },
    {
      name: 'Name',
      email: 'ninfo.palanis@bluechildco.com',
      phone: '(525) 827-6387'
    },
    {
      name: 'Name',
      email: 'ninfo.palanis@bluechildco.com',
      phone: '(525) 827-6387'
    },
    {
      name: 'Name',
      email: 'ninfo.palanis@bluechildco.com',
      phone: '(525) 827-6387'
    },
    {
      name: 'Name',
      email: 'ninfo.palanis@bluechildco.com',
      phone: '(525) 827-6387'
    },
    {
      name: 'Name',
      email: 'ninfo.palanis@bluechildco.com',
      phone: '(525) 827-6387'
    },
    {
      name: 'Name',
      email: 'ninfo.palanis@bluechildco.com',
      phone: '(525) 827-6387'
    }
  ];
}