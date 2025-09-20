import {Component, inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-dialog-box',
  imports: [MatButton, MatDialogContent, MatDialogTitle, MatDialogActions],
  templateUrl: './dialog-box.html',
  styleUrl: './dialog-box.scss'
})
export class DialogBox {
  matDialogData = inject(MAT_DIALOG_DATA);
  matDialogRef = inject<MatDialogRef<DialogBox>>(MatDialogRef);

  confirmSelection(data: any): void {
    this.matDialogRef.close(data);
  }

}
