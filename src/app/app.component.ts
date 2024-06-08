import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./public/master-page/footer/footer.component";
import { HeaderComponent } from "./public/master-page/header/header.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, FooterComponent, HeaderComponent]
})
export class AppComponent {
  title = 'frontendSoftware';
}
