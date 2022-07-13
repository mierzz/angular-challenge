import { Component } from '@angular/core';
import { IconRegistryService } from './services/icon-registry.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private iconRegistryService: IconRegistryService) {
    this.iconRegistryService.init();
  }
}
