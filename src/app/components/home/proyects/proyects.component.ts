import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.scss']
})
export class ProyectsComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    navSpeed: 700,
    items: 1,
    autoplay: true,
    autoplayTimeout:3000
  }

  @ViewChild('imgContainer') imgContainer: ElementRef;

  projects:any =[]

  constructor(
  ) { }

  ngOnInit(): void {

this.projects=[{
  "Title": "Portfolio Website",
  "Description": "Designed and developed a portfolio website using <span class='underline'>Angular 13</span>, showcasing a curated collection of projects and accomplishments. Leveraged Angular's powerful features to create a user-friendly and responsive platform that demonstrates technical skills, creativity, and a strong commitment to professionalism",
  "imgs": [
      "assets/images/portfolio/portfolio1.png",
      "assets/images/portfolio/portfolio2.png",
      "assets/images/portfolio/portfolio3.png",
  ],
  "Technologies": ["Angular", "SCSS", ]
},
{
  "Title": "Cafe App",
  "Description": "Health plan quote that has a search engine with which advanced queries are made. Plans are displayed based on the user's age, monthly income, and location. It has <span class='underline'>online chat</span, <span class='underline'>contact form</span>, <span class='underline'>notification system by whatsapp and mail</span>, <span class='underline'>auth</span>, and <span class='underline'>internet information management through the role of administrator.</span>",
  "demoLink": "https://cafeweb.z13.web.core.windows.net/home",
  "imgs": [
      "assets/images/cafe/cafe1.png",
      "assets/images/cafe/cafe2.png",
      "assets/images/cafe/cafe3.png",
      "assets/images/cafe/cafe4.png",
      "assets/images/cafe/cafe5.png",
      "assets/images/cafe/cafe6.png",
      "assets/images/cafe/cafe7.png",
  ],
  "Technologies": ["Angular", "NodeJs", "PostgreSQL", "RxJS", "Bootstrap", "JQuery"]
},
{
  "Title": "Proyexiot",
  "Description": "Data monitoring platform belonging to water wells, tugboats, and various installations made from scratch with auth module, <span class='underline'>configurable graphics</span>, <span class='underline'>configurable alarms</span>, <span class='underline'>user management</span>, and <span class='underline'>geolocation with openlayers.</span>",
  "imgs": [
      "assets/images/proyex/proyex1.png",
      "assets/images/proyex/proyex2.png",
      "assets/images/proyex/proyex3.png",
      "assets/images/proyex/proyex4.png",
      "assets/images/proyex/proyex5.png",
      "assets/images/proyex/proyex6.png",
      "assets/images/proyex/proyex7.png",
      "assets/images/proyex/proyex8.png",
      "assets/images/proyex/proyex9.png",
      "assets/images/proyex/proyex10.png",
      "assets/images/proyex/proyex11.png",
      "assets/images/proyex/proyex12.png"
  ],
  "Technologies": ["Laravel", "Angular", "SASS", "Angular Material", "RxJS"]
},
{
  "Title": "Hands game",
  "Description": "The rock-paper-scissors game extended. A personal project developed in angular in which you play randomly against the machine. It has the use of services, interfaces, and components.",
  "imgs": [
    "assets/images/hands-game.png",
  ],
  "ghLink": "https://github.com/andresjosehr/hands-game",
  "demoLink": "https://projects.andresjosehr.com/hands-game",
  "Technologies": ["Angular", "CSS GRID", "SASS", "Angular animations"]
},
{
  "Title": "Countries viewer",
  "Description": "An interface that consumes an API of countries with which you can view a list of countries, see details of each country, filter by name and region. It also has a dark mode to switch between dark and light themes.",
  "imgs": ["assets/images/countries-viewer.png"],
  "ghLink": "https://github.com/andresjosehr/countries-viewer",
  "demoLink": "https://projects.andresjosehr.com/countries-viewer",
  "Technologies": ["Angular", "RxJS", "SASS", "API"]
}
]

  }

debug(){

  this.imgContainer.nativeElement.scroll({
    top: this.imgContainer.nativeElement.scrollHeight,
    left: 0,
    behavior: 'smooth',
  });
}

}
