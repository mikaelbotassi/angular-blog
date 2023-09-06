import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFaker';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{

  id: number = 0;
  photoCover:string = "";
  contentDate:string = "";
  contentTitle:string = "";
  contentDescription:string = "";

  constructor(
    private route:ActivatedRoute
  ){}

  ngOnInit(): void{

    this.route.paramMap.subscribe(value =>
      this.id = Number(value.get('id'))
    );

    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id:number){
    const result = dataFake.filter(article => article.id === id)[0];

    this.contentTitle = result.title;
    this.contentDescription = result.description;
    this.contentDate = result.date;
    this.photoCover = result.photoCover;

  }


}
