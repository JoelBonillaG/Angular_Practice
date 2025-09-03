import { Routes } from '@angular/router';
import { Login } from './auht/components/login/login';
import { ListClients } from './clients/components/list-clients/list-clients';
import { ListInvoices } from './invoice/components/list-invoices/list-invoices';

export const routes: Routes = [
  {path:'login',component:Login},
  {path:'clients',component:ListClients},
  {path:'invoices',component:ListInvoices},
  {path:'**',redirectTo:'/login'},

];
