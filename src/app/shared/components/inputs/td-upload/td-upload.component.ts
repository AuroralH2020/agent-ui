import { Component, ContentChild, Input, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core'
import { FormGroup, FormControl } from '@angular/forms'
import { SnackBarService } from '@core/services/snack-bar/snack-bar.service'
import { FileUploadHandlerEvent } from 'primeng/fileupload'

@Component({
  selector: 'app-td-upload',
  templateUrl: './td-upload.component.html',
  styleUrls: ['./td-upload.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TdUploadComponent implements OnInit {

  @Input() control!: FormControl

  @ContentChild('actions') actions: TemplateRef<any> | undefined

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
      this._snackBar.showSuccess('TD File Uploaded')
    }
  }
}
