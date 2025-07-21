import { Component, Input } from '@angular/core';

type IconName = 'add' | 'delete' | 'edit' | 'confirm' | 'search';

@Component({
  selector: 'app-icon',
  standalone: true,
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class IconComponent {
  @Input() name: IconName = 'add';
  
  get uikitIcon(): string {
    const iconMap = {
      add: 'plus',
      delete: 'trash',
      edit: 'pencil',
      confirm: 'check',
      search: 'search'
    };
    return `icon: ${iconMap[this.name]}`;
  }
}
