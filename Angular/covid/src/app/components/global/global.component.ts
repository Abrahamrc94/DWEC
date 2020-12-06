import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.scss']
})
export class GlobalComponent implements OnInit {

  @Input() globalInfo;
  @Input() spainInfo;
  constructor() { }

  ngOnInit(): void {
  }

}
