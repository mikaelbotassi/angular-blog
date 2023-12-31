import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {

  @Input() id:number = 0;
  @Input() photoCover:string = "";
  @Input() photoLegend:string = "";
  @Input() cardTitle:string = "";
  @Input() cardDate:string = "";
  @Input() cardDescription:string = "";

}
