import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {datafake} from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover: string = "https://cdn2.storyasset.link/307b4648-19c4-4b93-bb44-34dd4ec9af14/horizon%20capa-ms-pxrxrmsciw.jpg"
  contentTitle: string = "Minha Noticia"
  contentDescription: string = "Olá Mundo"

  private id:string | null = "0"

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )

  }

  setValuesToComponent(id:string) {
    const result = datafake.filter(article => article.id = id)[0]

    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover = result.photoCover
  }

}
