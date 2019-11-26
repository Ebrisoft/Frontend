import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy, Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import HTTPService from "./services/http/http-service";
import HTTPWeb from "./services/http/http-web";
import HTTPCordova from "./services/http/http-cordova";
import TenantFeedService from "./services/api/tenant/feed-service";
import LandlordFeedService from "./services/api/landlord/feed-service";
import TenantAPIService from "./services/api/tenant/tentant-api-service";
import LandlordAPIService from "./services/api/landlord/lanlord-api-service";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: HTTPService,
      useFactory: (platform: Platform) => {
        if (platform.is("cordova")) {
          return new HTTPCordova();
        }
        
        return new HTTPWeb();
      },
      deps: [ Platform ]
    },
    {
      provide: TenantFeedService,
      deps: [ TenantAPIService ]
    },
    {
      provide: LandlordFeedService,
      deps: [ LandlordAPIService ]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
