import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';

import { AppComponent } from './app.component';
import { AwesomeTooltipComponent } from './awesome-tooltip/awesome-tooltip.component';
import { AwesomeTooltipDirective } from './awesome-tooltip.directive';

@NgModule({
  declarations: [
    AppComponent,
    AwesomeTooltipComponent,
    AwesomeTooltipDirective
  ],
  imports: [
    BrowserModule,
    OverlayModule
  ],
  entryComponents: [ AwesomeTooltipComponent ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
