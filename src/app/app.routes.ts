import { Routes } from '@angular/router';
import { Generic } from './generic/generic';
import { Home } from './home/home';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => Home
    },
];
