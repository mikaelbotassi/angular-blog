import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  photoCover:string = "";
  contentDate:string = "";
  contentTitle:string = "";
  contentDescription:string = "";

}
