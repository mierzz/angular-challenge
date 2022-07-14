import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PostsModule } from './screens/posts/posts.module';
import { AppRoutingModule } from './app-routing.module';
import { environment } from './environments/environment';
import { ENVIRONMENT } from './environments/enviroment.service';
import { AccessTokenInterceptor } from 'src/app/interceptors/access-token.interceptor';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatIconModule,
    HttpClientModule,
    PostsModule,
    AppRoutingModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
  	{ provide: ENVIRONMENT, useValue: environment },
	{ provide: HTTP_INTERCEPTORS, useClass: AccessTokenInterceptor, multi: true }
  ],
})
export class AppModule {}
