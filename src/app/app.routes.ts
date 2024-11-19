import { Routes } from '@angular/router';
import { CartComponent } from './features/cart/components/cart/cart.component';
import { MainLayoutComponent } from './core/components/main-layout/main-layout.component';
import { CheckoutComponent } from './features/checkout/components/checkout/checkout.component';

export const routes: Routes = [
    { path: '', component: MainLayoutComponent },
    { path: 'cart', component: CartComponent },
    { path: 'checkout', component: CheckoutComponent },
];
