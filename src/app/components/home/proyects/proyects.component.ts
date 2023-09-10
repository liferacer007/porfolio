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
    autoplayTimeout: 3000
  }

  @ViewChild('imgContainer') imgContainer: ElementRef;

  projects: any = []

  constructor(
  ) { }

  ngOnInit(): void {

    this.projects = [
      {
        "Title": "Portfolio Website",
        "Description": "Designed and developed a portfolio website using <span class='underline'>Angular 13</span>, showcasing a curated collection of projects and accomplishments. Leveraged Angular's powerful features to create a user-friendly and responsive platform that demonstrates technical skills, creativity, and a strong commitment to professionalism",
        "demoLink": "https://cafeweb.z13.web.core.windows.net/home",
        "date": "(Aug 2023 - Sept 2023)",
        "imgs": [
          "assets/images/portfolio/portfolio1.png",
          "assets/images/portfolio/portfolio2.png",
          "assets/images/portfolio/portfolio3.png",
        ],
        "Technologies": ["Angular", "SCSS", "Azure"]
      },
      {
        "Title": "Cafe Management App",
        "Description": "This project featured <span class='underline'>JWT token authentication</span>, <span class='underline'>role-based access</span> control, and <span class='underline'>Google OAuth2</span> for secure email capabilities. Integrated <span class='underline'>JQuery & Bootstrap</span> for a polished user interface & implemented <span class='underline'>lazy loading</span> for optimized performance. <span class='underline'>Router guards & animations</span> were used for a seamless user experience. Also developed <span class='underline'>reactive forms</span>, handled <span class='underline'>PDF generation & downloads</span>, & leveraged <span class='underline'>dependency injection & RxJS</span> for efficient asynchronous operations with <span class='underline'>Interceptors</span> for handling HTTP requests and responses. This project seamlessly integrated <span class='underline'>Angular</span> with <span class='underline'>Node.js</span> & <span class='underline'>PostgreSQL</span>, managing product categories, products, order, view-bill and user-mgmt components for streamlined cafe management.",
        "demoLink": "https://cafeweb.z13.web.core.windows.net/home",
        "date": "(May 2023 - Sept 2023)",
        "imgs": [
          "assets/images/cafe/cafe1.png",
          "assets/images/cafe/cafe2.png",
          "assets/images/cafe/cafe3.png",
          "assets/images/cafe/cafe4.png",
          "assets/images/cafe/cafe5.png",
          "assets/images/cafe/cafe6.png",
          "assets/images/cafe/cafe7.png",
        ],
        "Technologies": ["Angular", "Bootstrap", "JQuery", "RxJS", "NodeJs", "PostgreSQL", "Azure"]
      },
      // {
      //   "Title": "Proyexiot",
      //   "Description": "Data monitoring platform belonging to water wells, tugboats, and various installations made from scratch with auth module, <span class='underline'>configurable graphics</span>, <span class='underline'>configurable alarms</span>, <span class='underline'>user management</span>, and <span class='underline'>geolocation with openlayers.</span>",
      //   "imgs": [
        //       "assets/images/proyex/proyex1.png",
        //       "assets/images/proyex/proyex2.png",
        //       "assets/images/proyex/proyex3.png",
        //       "assets/images/proyex/proyex4.png",
        //       "assets/images/proyex/proyex5.png",
        //       "assets/images/proyex/proyex6.png",
        //       "assets/images/proyex/proyex7.png",
        //       "assets/images/proyex/proyex8.png",
        //       "assets/images/proyex/proyex9.png",
        //       "assets/images/proyex/proyex10.png",
        //       "assets/images/proyex/proyex11.png",
        //       "assets/images/proyex/proyex12.png"
        //   ],
        //   "Technologies": ["Laravel", "Angular", "SASS", "Angular Material", "RxJS"]
        // },
        {
          "Title": "CRM",
          "Description": "Significantly contributed to the development of an <span class='underline'>in-house webapp</span> for <span class='underline'>TankhaPay</span>, a product of <span class='underline'>Akal Infosys</span>, which successfully secured funding of <span class='underline'>2.7 million</span> from Japanese investors. The platform efficiently manages employer and employee profiles, catering to a diverse workforce, including gig workers, blue-collar, and white-collar employees, streamlining the registration process and enhancing workforce management",
          "demoLink": "https://theprint.in/ani-press-releases/tankhapay-developed-by-akal-information-systems-ltd-gets-2-7-million-usd-funding-from-japanese-investors/1638984/",
          "date": "Aug 2022 - Present",
          "imgs": [
            "assets/images/hands-game.png",
          ],
          // "ghLink": "https://github.com/andresjosehr/hands-game",
          "Technologies": ["Angular", "CSS", "Bootstrap", "JQuery", "NodeJs", "PostgreSQL"]
        },
        {
          "Title": "Solidity - Blogs",
          "Description": "A site that helps you learn solidity with Smart Contract examples.",
          "demoLink": "https://harshrathi0553.wixsite.com/solidity",
          "date": "(Dec 2021 - Feb 2022)",
          "imgs": [
            "assets/images/portfolio/portfolio1.png",
            "assets/images/portfolio/portfolio2.png",
            "assets/images/portfolio/portfolio3.png",
          ],
          "Technologies": ["Angular", "SCSS", "Azure"]
        },
      // {
      //   "Title": "Countries viewer",
      //   "Description": "An interface that consumes an API of countries with which you can view a list of countries, see details of each country, filter by name and region. It also has a dark mode to switch between dark and light themes.",
      //   "imgs": ["assets/images/countries-viewer.png"],
      //   "ghLink": "https://github.com/andresjosehr/countries-viewer",
      //   "demoLink": "https://projects.andresjosehr.com/countries-viewer",
      //   "Technologies": ["Angular", "RxJS", "SASS", "API"]
      // }
    ]

  }

  debug() {

    this.imgContainer.nativeElement.scroll({
      top: this.imgContainer.nativeElement.scrollHeight,
      left: 0,
      behavior: 'smooth',
    });
  }

}
