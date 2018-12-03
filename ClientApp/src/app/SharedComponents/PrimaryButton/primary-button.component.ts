import { Component, Input } from '@angular/core';

@Component({
  selector: 'primary-button',
  templateUrl: './primary-button.component.html'
})


export class PrimaryButtonComponent {
  @Input() label: string;

}
