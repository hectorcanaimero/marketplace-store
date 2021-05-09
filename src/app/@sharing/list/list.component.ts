import { Component, Input, OnInit } from '@angular/core';
import { List } from '@core/interfaces/list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  @Input() data = [ ];

  constructor() { }

  ngOnInit() {}

  trackByFunction = (index: number, items: any) => items[index];

}
