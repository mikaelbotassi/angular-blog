import { Component, OnInit } from '@angular/core';
import { dataFake } from 'src/app/data/dataFaker';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  pubs:any[] = dataFake.filter(data => data.id !== 1);
  mainPub:any = dataFake[0];

  ngOnInit(): void {}

  shortenString(text: string, maxlenght: number): string {
    if (text.length <= maxlenght) {
      return text;
    }

    // Substring para pegar apenas os caracteres até o comprimento máximo
    const textPiece = text.substring(0, maxlenght);

    // Adicionar "..." no final
    const textEncurtado = `${textPiece}...`;

    return textEncurtado;
  }


}
