import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ROUTES } from "./layout.routes";
import { LayoutComponent } from "./layout.component";

@NgModule({
  imports: [CommonModule, ROUTES, FormsModule],
  declarations: [LayoutComponent]
})
export class LayoutModule {}
