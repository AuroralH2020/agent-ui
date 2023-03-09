import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSnackBarModule
  ],
  exports: [],
  providers: [],
})
export class CoreModule {
  /* make sure CoreModule is imported only by the AppModule and noone else */
  constructor(@Optional() @SkipSelf() presentInParent: CoreModule) {
    if (presentInParent) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
