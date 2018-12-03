import { Component, Input } from '@angular/core';

@Component({
  selector: 'default-button',
  templateUrl: './default-button.component.html'
})


export class DefaultButtonComponent {
  @Input() label: string;

}
