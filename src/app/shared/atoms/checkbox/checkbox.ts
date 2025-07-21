import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-checkbox',
  standalone: true,
  templateUrl: './checkbox.html',
  styleUrl: './checkbox.css'
})
export class CheckboxComponent {
  @Input() checked: boolean = false;
  @Input() disabled: boolean = false;
  
  @Output() checkedChange = new EventEmitter<boolean>();

  onChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.checked = target.checked;
    this.checkedChange.emit(this.checked);
  }
}
