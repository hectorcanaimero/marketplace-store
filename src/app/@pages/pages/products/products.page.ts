import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  segment = 'categories';
  categories = [
    {
      uid: '122424efwwef',
      media: 'https://media.gazetadopovo.com.br/2020/05/27170034/villa.jpg',
      name: 'List ',
      url: '/media'
    },
    {
      uid: '122424efwwef',
      media: '',
      name: 'List ',
      url: '/media'
    },
    {
      uid: '122424efwwef',
      media: '',
      name: 'List ',
      url: '/media'
    },
    {
      uid: '122424efwwef',
      media: '',
      name: 'List ',
      url: '/media'
    },
    {
      uid: '122424efwwef',
      media: '',
      name: 'List ',
      url: '/media'
    },
    {
      uid: '122424efwwef',
      media: '',
      name: 'List ',
      url: '/media'
    },
    {
      uid: '122424efwwef',
      media: '',
      name: 'List ',
      url: '/media'
    },
    {
      uid: '122424efwwef',
      media: '',
      name: 'List ',
      url: '/media'
    },
    {
      uid: '122424efwwef',
      media: '',
      name: 'List ',
      url: '/media'
    },
    {
      uid: '122424efwwef',
      media: '',
      name: 'List ',
      url: '/media'
    },
    {
      uid: '122424efwwef',
      media: '',
      name: 'List ',
      url: '/media'
    },
    {
      uid: '122424efwwef',
      media: '',
      name: 'List ',
      url: '/media'
    },
    {
      uid: '122424efwwef',
      media: '',
      name: 'List ',
      url: '/media'
    },
    {
      uid: '122424efwwef',
      media: '',
      name: 'List ',
      url: '/media'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  segmentChanged = (ev: any) => this.segment = ev.detail.value;
}
