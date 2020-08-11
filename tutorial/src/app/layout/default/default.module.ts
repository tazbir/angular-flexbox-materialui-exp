import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { PostsComponent } from './../../components/posts/posts.component';
import { HomeComponent } from './../../components/home/home.component';
import { DefaultComponent } from './default.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';



@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule
  ]
})
export class DefaultModule { }
