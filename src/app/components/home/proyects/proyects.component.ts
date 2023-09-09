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
  "Technologies": ["Angular", "SCSS", "Azure" ]
},
{
  "Title": "Cafe App",
  "Description": "This project featured <span class='underline'>JWT token authentication</span>, <span class='underline'>role-based access</span> control, and <span class='underline'>Google OAuth2</span> for secure email capabilities. I integrated <span class='underline'>JQuery & Bootstrap</span> for a polished user interface and implemented <span class='underline'>lazy loading</span> for optimized performance. <span class='underline'>Router guards and animations</span> were used for a seamless user experience. I also developed <span class='underline'>reactive forms</span>, handled <span class='underline'>PDF generation and downloads</span>, and leveraged <span class='underline'>dependency injection and RxJS</span> for efficient asynchronous operations with <span class='underline'>Interceptors</span> for handling HTTP requests and responses. This project seamlessly integrated <span class='underline'>Angular</span> with <span class='underline'>Node.js</span> and <span class='underline'>PostgreSQL</span>, managing product categories, products, order, view-bill and user-mgmt components for streamlined cafe management.",
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
  "Technologies": ["Angular", "NodeJs", "PostgreSQL", "RxJS", "Bootstrap", "JQuery", "Azure"]
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
