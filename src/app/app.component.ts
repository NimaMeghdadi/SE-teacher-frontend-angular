import { Component } from '@angular/core';
import { Theme } from 'src/themes/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  theme: Theme = "light-theme";
  title = 'SE-teacher-frontend-angular';
}
