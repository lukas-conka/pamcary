import { Component, OnInit } from '@angular/core';

import { Menu } from '../shared/menu.model'
import { MENUS } from './menu-mock' 

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.sass']
})
export class TopoComponent implements OnInit {

  public menus: Menu[] = MENUS;

  constructor() { console.log(this.menus)}

  ngOnInit() {
  }

}
