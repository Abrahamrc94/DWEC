import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.scss'],
})
export class GlobalComponent implements OnInit {
  /* Lista global, para datos globales */
  @Input() listGlobal;

  /* Lista spain, para datos de España */
  @Input() listSpain;

  constructor() {}

  ngOnInit(): void {}
}