import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {

  @Input() id:number = 0;
  @Input() photoCover:string = "";
  @Input() cardTitle:string = "";
  @Input() cardDate:string = "";
  @Input() cardDescription:string = "";

}
