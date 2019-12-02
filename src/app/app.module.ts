import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";
import { HttpClientModule, HttpClient } from "@angular/common/http";

import { IonicModule, IonicRouteStrategy, Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import HTTPService from "./services/http/http-service";
import HTTPWeb from "./services/http/http-web";
import HTTPCordova from "./services/http/http-cordova";
import TenantFeedAPIService from "./services/api/tenant/feed-api-service";
import LandlordFeedAPIService from "./services/api/landlord/feed-api-service";
import TenantBaseAPIService from "./services/api/tenant/tentant-base-api-service";
import LandlordBaseAPIService from "./services/api/landlord/landlord-base-api-service";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: HTTPService,
      useFactory: (platform: Platform, client: HttpClient) => {
        if (platform.is("cordova")) {
          return new HTTPCordova(client);
        }
        
        return new HTTPWeb();
      },
      deps: [ Platform, HttpClient ]
    },
    {
      provide: TenantFeedAPIService,
      deps: [ TenantBaseAPIService ]
    },
    {
      provide: LandlordFeedAPIService,
      deps: [ LandlordBaseAPIService ]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
