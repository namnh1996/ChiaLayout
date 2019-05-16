import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MsiComponent } from './msi.component';
import { MsiHeaderComponent } from './msi-header/msi-header.component';
import { MsiSlideComponent } from './msi-slide/msi-slide.component';
import { MsiContentComponent } from './msi-content/msi-content.component';
import { MsiFooterComponent } from './msi-footer/msi-footer.component';
import { ItemsComponent } from './msi-content/items/items.component';

@NgModule({
  declarations: [MsiComponent, MsiHeaderComponent, MsiSlideComponent, MsiContentComponent, MsiFooterComponent, ItemsComponent],
  imports: [
    CommonModule
  ],
  exports:[MsiComponent, MsiHeaderComponent, MsiSlideComponent, MsiContentComponent, MsiFooterComponent,ItemsComponent]
})
export class MsiModule { }
