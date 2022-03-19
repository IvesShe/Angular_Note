import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewsComponent } from './component/news/news.component';
import { FormsModule } from '@angular/forms';
import { IvesUppercasePipe } from './filter/ives-uppercase.pipe';
import { ChildComponent } from './views/child/child.component';
import { IvesstyleDirective } from './directive/ivesstyle.directive';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    IvesUppercasePipe,
    ChildComponent,
    IvesstyleDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
