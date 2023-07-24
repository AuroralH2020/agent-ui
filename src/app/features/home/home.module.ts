import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SharedModule } from '@shared/shared.module'

import { HomeRoutingModule } from './home-routing.module'
import { HomeComponent } from './home.component'
import { HomeNavComponent } from './components/home-nav/home-nav.component'
import { NavButtonComponent } from './components/home-nav/nav-button/nav-button.component'
import { EuContribComponent } from './components/eu-contrib/eu-contrib.component'
import { NavSectionComponent } from './components/home-nav/nav-section/nav-section.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeNavComponent,
    NavButtonComponent,
    EuContribComponent,
    NavSectionComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
  ],
  providers: [],
})
export class HomeModule {}