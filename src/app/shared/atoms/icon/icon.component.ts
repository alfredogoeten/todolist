import { Component, Input } from '@angular/core';
import { NgSwitch, NgSwitchCase } from '@angular/common';

type IconName = 'add' | 'delete' | 'edit' | 'confirm' | 'search';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [NgSwitch, NgSwitchCase],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class IconComponent {
  @Input() name: IconName = 'add';
  
  get iconClasses(): string {
    return `icon icon-${this.name}`;
  }
}
