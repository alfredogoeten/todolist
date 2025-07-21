import { Component, Input, Output, EventEmitter } from "@angular/core";

type ButtonType = "button" | "submit" | "reset";
type ButtonVariant = "primary" | "danger";

@Component({
  selector: "app-button",
  standalone: true,
  templateUrl: "./button.component.html",
  styleUrl: "./button.component.scss",
})
export class ButtonComponent {
  @Input() type: ButtonType = "button";
  @Input() variant: ButtonVariant = "primary";
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;

  @Output() clicked = new EventEmitter<Event>();

  onClick(event: Event): void {
    if (!this.disabled && !this.loading) {
      this.clicked.emit(event);
    }
  }

  get buttonClasses(): string {
    const variantClassMap = {
      primary: "uk-button-primary",
      danger: "uk-button-danger",
    };
    return `uk-button ${variantClassMap[this.variant]}`;
  }
}
