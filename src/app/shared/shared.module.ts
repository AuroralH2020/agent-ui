import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ClipboardModule } from '@angular/cdk/clipboard'
import { PrimeNgModule } from '../prime-ng/prime-ng.module'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { HyperlinkComponent } from './components/misc/hyperlink/hyperlink.component'
import { LogoComponent } from './components/misc/logo/logo.component'
import { AvatarComponent } from './components/misc/avatar/avatar.component'
import { SadFaceComponent } from './components/misc/sad-face/sad-face.component'
import { CheckboxGroupComponent } from './components/inputs/checkbox-group/checkbox-group.component'
import { ItemIconComponent } from './components/misc/item-icon/item-icon.component'
import { SpinnerComponent } from './components/misc/spinner/spinner.component'
import { MenuComponent } from './components/menu/menu/menu.component'
import { MenuLabelComponent } from './components/menu/menu-label/menu-label.component'
import { MenuContentComponent } from './components/menu/menu-content/menu-content.component'
import { MenuItemComponent } from './components/menu/menu-item/menu-item.component'
import { SparqlEditorComponent } from './components/inputs/sparql-editor/sparql-editor.component'
import { PictogramComponent } from './components/pictograms/pictogram/pictogram.component'
import { ItemPictogramComponent } from './components/pictograms/item-pictogram/item-pictogram.component'
import { NodePictogramComponent } from './components/pictograms/node-pictogram/node-pictogram.component'
import { OrgPictogramComponent } from './components/pictograms/org-pictogram/org-pictogram.component'
import { CommunityPictogramComponent } from './components/pictograms/community-pictogram/community-pictogram.component'
import { LongIdComponent } from './components/display/long-id/long-id.component';
import { CopyToClipboardDirective } from './directives/copy-to-clipboard/copy-to-clipboard.directive';
import { TdUploadComponent } from './components/inputs/td-upload/td-upload.component';
import { JsonldEditorComponent } from './components/inputs/jsonld-editor/jsonld-editor.component';

@NgModule({
  declarations: [
    // Directives
    CopyToClipboardDirective,
    // Pipes
    // Components
    HyperlinkComponent,
    LogoComponent,
    AvatarComponent,
    PictogramComponent,
    SadFaceComponent,
    CheckboxGroupComponent,
    ItemIconComponent,
    SpinnerComponent,
    MenuComponent,
    MenuLabelComponent,
    MenuContentComponent,
    MenuItemComponent,
    SparqlEditorComponent,
    PictogramComponent,
    ItemPictogramComponent,
    NodePictogramComponent,
    OrgPictogramComponent,
    CommunityPictogramComponent,
    LongIdComponent,
    TdUploadComponent,
    JsonldEditorComponent,

  ],
  imports: [
    PrimeNgModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ClipboardModule,
    FontAwesomeModule,
  ],
  exports: [
    // Modules
    FontAwesomeModule,
    PrimeNgModule,
    FormsModule,
    ReactiveFormsModule,
    ClipboardModule,
    // Directives
    CopyToClipboardDirective,
    // Pipes
    // Components
    HyperlinkComponent,
    LogoComponent,
    AvatarComponent,
    PictogramComponent,
    SadFaceComponent,
    CheckboxGroupComponent,
    ItemIconComponent,
    SpinnerComponent,
    MenuComponent,
    MenuLabelComponent,
    MenuContentComponent,
    MenuItemComponent,
    SparqlEditorComponent,
    PictogramComponent,
    ItemPictogramComponent,
    NodePictogramComponent,
    OrgPictogramComponent,
    CommunityPictogramComponent,
    LongIdComponent,
    TdUploadComponent,
    JsonldEditorComponent,
  ],
})
export class SharedModule {}
