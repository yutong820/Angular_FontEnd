import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './Container.component.html',
  styleUrls: ['./Container.component.css']
})
export class ContainerComponent {
  listOfString: string[] = ['Maek', 'Steve', 'Merry', 'John', 'Sarah']
}
