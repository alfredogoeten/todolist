import { Component, Input, Output, EventEmitter, HostBinding } from "@angular/core";
import {
  trigger,
  style,
  transition,
  animate,
  keyframes,
} from "@angular/animations";
import { CheckboxComponent } from "../../atoms/checkbox/checkbox.component";
import { Task, TaskStatus } from "../../models/task.model";

@Component({
  animations: [
        trigger("taskAnimation", [
      transition(":enter", [
        style({ height: 0, opacity: 0, transform: "translateY(-20px)" }),
        animate(
          "300ms ease-out",
          style({ height: "*", opacity: 1, transform: "translateY(0)" })
        ),
      ]),
    ]),
    trigger("glowAnimation", [
      transition("void => added", [
        animate(
          "1200ms ease-in-out",
          keyframes([
            style({ boxShadow: "0 0 0 0 rgba(59, 130, 246, 0.7)", offset: 0 }),
            style({
              boxShadow: "0 0 8px 3px rgba(59, 130, 246, 0.7)",
              offset: 0.3,
            }),
            style({ boxShadow: "0 0 0 0 rgba(59, 130, 246, 0)", offset: 1.0 }),
          ])
        ),
      ]),
    ]),
  ],

  selector: "app-task-item",
  standalone: true,
  imports: [CheckboxComponent],
  templateUrl: "./task-item.component.html",
  styleUrl: "./task-item.component.scss",
})
export class TaskItemComponent {
  @HostBinding("@taskAnimation")
  public animateOnEnter = true;

  @HostBinding("@glowAnimation")
  get glowAnimation() {
    return this.state;
  }

  taskStatus = TaskStatus;
  @Input() task!: Task;
  @Input() state!: string | null;

  @Output() toggleComplete = new EventEmitter<string>();


  onToggleComplete(): void {
    this.toggleComplete.emit(this.task.id);
  }
}
