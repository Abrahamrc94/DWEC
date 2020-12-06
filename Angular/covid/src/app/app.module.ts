import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { GlobalComponent } from './components/global/global.component';

@NgModule({
  declarations: [
    AppComponent,
    InformacionComponent,
    GlobalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
