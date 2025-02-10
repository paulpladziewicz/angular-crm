import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MenubarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items: any[] = [
    {
      label: 'Dashboard',
      icon: 'pi pi-home',
      routerLink: 'dashboard'
    },
    {
      label: 'Companies',
      icon: 'pi pi-home',
      routerLink: 'companies'
    },
    {
      label: 'Contacts',
      icon: 'pi pi-home',
      routerLink: 'create/company'
    }
  ]
}
