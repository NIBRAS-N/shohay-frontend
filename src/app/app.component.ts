import { Component , inject, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { HeroComponent } from './components/hero/hero.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { NgoToolsComponent } from './components/ngo-tools/ngo-tools.component';
import { ArticlesNewsComponent } from './components/articles-news/articles-news.component';
import { ServicesComponent } from './components/services/services.component';
import { UspComponent } from './components/usp/usp.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormComponent } from './components/form/form.component';
import { PartnersComponent } from './components/partners/partners.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ButtonsComponent,TopMenuComponent,HeroComponent,SignUpComponent,NgoToolsComponent,ArticlesNewsComponent,ServicesComponent,UspComponent,FooterComponent,FormComponent,PartnersComponent,TestimonialsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'shohay-landing-page';
  // handleButtonClick(){
  //   console.log("ok");
  // }

  renderer = inject(Renderer2);
  ngOnInit():void{
    // const script = this.renderer.createElement('script');
    // script.type = 'text/javascript';
    // script.id = 'hs-script-loader';
    // script.async = true;
    // script.defer = true;
    // script.src = '//js-na1.hs-scripts.com/46479739.js';
    // this.renderer.appendChild(document.head, script);
  }
}
