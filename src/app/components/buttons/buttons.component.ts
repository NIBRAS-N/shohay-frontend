import { NgClass, NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [NgStyle,NgClass],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css'
})
export class ButtonsComponent {
  @Input() label: string = 'Button';
  @Input() type: string = 'button';
  @Input() disabled: boolean = false;
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() defaultColor: string = 'rgba(0, 84, 166, 1)';
  @Input() hoverColor: string = 'rgba(255, 214, 2, 1)';
  @Input() disabledColor: string = 'rgba(179, 204, 228, 1)';


  @Output() buttonClick = new EventEmitter<void>();

  currentColor: string;
  currentTextColor: string;
  constructor() {
    this.currentColor = this.defaultColor;
    this.currentTextColor = this.hoverColor;
  }

  ngOnChanges() {
    this.currentColor = this.defaultColor;
  }

  onClick() {
    if (!this.disabled) {
      this.buttonClick.emit();
    }
  }

  onMouseEnter() {
    if (!this.disabled) {
      this.currentColor = this.hoverColor;
      this.currentTextColor = this.defaultColor; 
    }
  }

  onMouseLeave() {
    if (!this.disabled) {
      this.currentColor = this.defaultColor;
      this.currentTextColor = this.hoverColor; 
    }
  }
}
