import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ClipboardModule } from '@angular/cdk/clipboard'
import { PrimeNgModule } from '../prime-ng/prime-ng.module'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { LogoComponent } from './components/logo/logo.component'
import { AvatarComponent } from './components/avatar/avatar.component'
import { SadFaceComponent } from './components/sad-face/sad-face.component'
import { CheckboxGroupComponent } from './components/inputs/checkbox-group/checkbox-group.component'
import { TypeIconComponent } from './components/type-icon/type-icon.component'
import { SpinnerComponent } from './components/spinner/spinner.component'
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
import { LongIdComponent } from './components/long-id/long-id.component';
import { CopyToClipboardDirective } from './directives/copy-to-clipboard/copy-to-clipboard.directive';
import { TdUploadComponent } from './components/inputs/td-upload/td-upload.component';
import { JsonEditorComponent } from './components/inputs/json-editor/json-editor.component';
import { ItemsTableComponent } from './components/tables/items-table/item-table.component'
import { PropsPreviewComponent } from './components/tables/items-table/props-preview/props-preview.component'
import { PropsTableComponent } from './components/tables/props-table/props-table.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { NewItemButtonComponent } from './components/buttons/new-item-button/new-item-button.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BottomSheetComponent } from './components/bottom-sheet/bottom-sheet.component';
import { QueryResultComponent } from './components/query-result/query-result.component';
import { QueryResultDialogComponent } from './components/query-result/query-result-dialog/query-result-dialog.component';
import { PlatformCopyComponent } from './components/platform-copy/platform-copy.component';
import { CreateItemButtonComponent } from './components/buttons/create-item-button/create-item-button.component';
import { ShowTdButtonComponent } from './components/buttons/show-td-button/show-td-button.component';
import { ShowTdDialogComponent } from './components/buttons/show-td-button/show-td-dialog/show-td-dialog.component';

@NgModule({
  declarations: [
    // Directives
    CopyToClipboardDirective,
    // Pipes
    // Components
    LogoComponent,
    AvatarComponent,
    PictogramComponent,
    SadFaceComponent,
    CheckboxGroupComponent,
    TypeIconComponent,
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
    JsonEditorComponent,
    ItemsTableComponent,
    PropsPreviewComponent,
    PropsTableComponent,
    TooltipComponent,
    NewItemButtonComponent,
    SidebarComponent,
    BottomSheetComponent,
    QueryResultComponent,
    QueryResultDialogComponent,
    PlatformCopyComponent,
    CreateItemButtonComponent,
    ShowTdButtonComponent,
    ShowTdDialogComponent,
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    ClipboardModule,
    RouterModule,
  ],
  exports: [
    // Modules
    PrimeNgModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    ClipboardModule,
    // Directives
    CopyToClipboardDirective,
    // Pipes
    // Components
    LogoComponent,
    AvatarComponent,
    PictogramComponent,
    SadFaceComponent,
    CheckboxGroupComponent,
    TypeIconComponent,
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
    JsonEditorComponent,
    ItemsTableComponent,
    PropsPreviewComponent,
    PropsTableComponent,
    TooltipComponent,
    NewItemButtonComponent,
    SidebarComponent,
    BottomSheetComponent,
    QueryResultComponent,
    QueryResultDialogComponent,
    PlatformCopyComponent,
    CreateItemButtonComponent,
    ShowTdButtonComponent,
  ],
})
export class SharedModule {}
