import { Component, Input, OnInit } from '@angular/core'
import { FormGroup, FormControl } from '@angular/forms'
import { SnackBarService } from '@core/services/snack-bar/snack-bar.service'
import { FileUploadHandlerEvent } from 'primeng/fileupload'

@Component({
  selector: 'app-td-upload',
  templateUrl: './td-upload.component.html',
  styleUrls: ['./td-upload.component.scss'],
})
export class TdUploadComponent implements OnInit {

  @Input() control!: FormControl

  uploaded: boolean = false
  protected form!: FormGroup

  over: boolean = false

  constructor(private _snackBar: SnackBarService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      td: this.control,
    })
  }

  async onFileUpload(event: FileUploadHandlerEvent) {
    const files = event.files
    if (files.length > 0) {
      const file = files.at(0)
      const td = await file?.text()
      this.uploaded = true
      this.control.setValue(td)
      this._snackBar.showMessage('TD File Uploaded')
    }
  }
}
