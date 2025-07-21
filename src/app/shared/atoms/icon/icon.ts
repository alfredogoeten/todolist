import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-icon',
  standalone: true,
  templateUrl: './icon.html',
  styleUrl: './icon.css'
})
export class IconComponent {
  @Input() name: string = '';
  @Input() title: string = '';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  
  get iconClasses(): string {
    return `icon icon-${this.name} icon-${this.size}`;
  }
}
