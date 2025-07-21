import { Component, Input, Output, EventEmitter } from '@angular/core';

type ButtonType = 'button' | 'submit' | 'reset';
type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'text';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.html',
  styleUrl: './button.css'
})
export class ButtonComponent {
  @Input() type: ButtonType = 'button';
  @Input() variant: ButtonVariant = 'primary';
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  
  @Output() clicked = new EventEmitter<Event>();

  onClick(event: Event): void {
    if (!this.disabled && !this.loading) {
      this.clicked.emit(event);
    }
  }
  
  get buttonClasses(): string {
    return `btn btn-${this.variant} ${this.loading ? 'btn-loading' : ''}`;
  }
}
