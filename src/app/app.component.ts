import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./public/master-page/header/header.component";
import { FooterComponent } from "./public/master-page/footer/footer.component";
import { SideMenuComponent } from "./public/master-page/side-menu/side-menu.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, FooterComponent, SideMenuComponent]
})
export class AppComponent {
  title = 'frontendSoftware';
}
