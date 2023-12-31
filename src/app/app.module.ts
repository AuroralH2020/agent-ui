import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CoreModule } from '@core/core.module'
import { HTTPReqResInterceptor } from '@core/services/http-req-res.interceptor'
import { environment } from '@env'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FakeBackendInterceptor } from '@core/services/fake-backend.interceptor'
import { JwtInterceptor } from '@core/services/jwt.interceptor'
import { MessageService } from 'primeng/api'
import { FaIconLibrary } from '@fortawesome/angular-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { SharedModule } from '@shared/shared.module'
import { RouteReuseStrategy } from '@angular/router'
import { CacheRouteReuseStrategy } from '@core/route-strategy/cache-route-reuse.strategy';
import { PartnershipModule } from './features/partnership/partnership.module';
import { CommunityModule } from './features/community/community.module';
import { MyOrgModule } from './features/my-org/my-org.module';
import { SettingsModule } from './features/settings/settings.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    SharedModule,
    PartnershipModule,
    CommunityModule,
    MyOrgModule,
    SettingsModule,
  ],
  providers: [
    { provide: 'BASE_URL', useValue: environment.baseurl },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HTTPReqResInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FakeBackendInterceptor,
      multi: true,
    },
    {
      provide: RouteReuseStrategy,
      useClass: CacheRouteReuseStrategy,
    },
    MessageService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far)
  }
}
