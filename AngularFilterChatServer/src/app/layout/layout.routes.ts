import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "./layout.component";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      { path: "task1", loadChildren: "./task1/task1.module#Task1Module" },
      { path: "task2", loadChildren: "./task2/task2.module#Task2Module" },
      { path: "task3", loadChildren: "./task3/task3.module#Task3Module" },
      //{ path: "task4", loadChildren: "./task4/task4.module#Task4Module" }
      // lazy loading bypass
      {
        path: "task4",
        loadChildren: () =>
          new Promise(resolve => {
            (require as any).ensure([], require => {
              resolve(require("./task4/task4.module").Task4Module);
            });
          })
      }
    ]
  }
];

export const ROUTES = RouterModule.forChild(routes);
