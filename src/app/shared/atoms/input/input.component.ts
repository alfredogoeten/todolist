import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() placeholder: string = '';
  @Input() value: string = '';
  
  @Output() valueChange = new EventEmitter<string>();
  @Output() inputChange = new EventEmitter<Event>();

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.valueChange.emit(this.value);
    this.inputChange.emit(event);
  }
}
