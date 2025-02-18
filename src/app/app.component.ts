import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsideComponent } from "./aside/aside.component";
import { MainComponent } from "./main/main.component";

@Component({
  selector: 'app-root',
  imports: [AsideComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ListadeTareas';
}
