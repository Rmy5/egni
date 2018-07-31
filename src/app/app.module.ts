import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { EnsComponent } from './ens/ens.component';
import { CreationComponent } from './creation/creation.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';

const appRoutes: Routes = [
    { path: 'accueil', component: HomeComponent },
    { path: 'enseignement', component: EnsComponent },
    { path: 'creations', component: CreationComponent },
    { path: 'contact', component: ContactComponent },
    { path: '', component: HomeComponent },
];

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        EnsComponent,
        CreationComponent,
        ContactComponent,
        HomeComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
