import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneratorComponent } from './pages/generator/generator.component';
import { HomeComponent } from './home/home.component';
import { NewQrComponent } from './pages/new-qr/new-qr.component';
import { ShowQrComponent } from './pages/show-qr/show-qr.component';
import { CarouselComponent } from './component/carousel/carousel.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  { path: 'generator', component: GeneratorComponent },
  { path: 'new', component: NewQrComponent },
  { path: 'show', component: ShowQrComponent },
  { path: 'show/:id', component: ShowQrComponent },

  { path: 'carousel', component: CarouselComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
