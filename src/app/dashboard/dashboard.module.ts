import { PokemonCardComponent } from './dashboard-components/pokemon-card/pokemon-card.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from '../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import { NgApexchartsModule } from 'ng-apexcharts';
import { PokeListComponent } from './dashboard-components/poke-list/poke-list.component';

@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    NgApexchartsModule,
    RouterModule.forChild(DashboardRoutes)
  ],
  declarations: [DashboardComponent, PokeListComponent, PokemonCardComponent]
})
export class DashboardModule {}
