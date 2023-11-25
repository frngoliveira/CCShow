import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() isOpen: boolean = false;
  @Output() fecharModal = new EventEmitter<void>();

  close() {
    this.isOpen = false;
    this.fecharModal.emit();
  }

}
