import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { BannerComponent } from './components/banner/banner.component';
import { SharedModule } from '../../shared/shared.module';




@NgModule({
  declarations: [BannerComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
