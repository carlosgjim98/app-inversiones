import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/cover-page/cover-page.module').then( m => m.CoverPagePageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'cover-page',
    loadChildren: () => import('./pages/cover-page/cover-page.module').then( m => m.CoverPagePageModule)
  },
  {
    path: 'chats',
    loadChildren: () => import('./pages/chats/chats.module').then( m => m.ChatsPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'idiomas',
    loadChildren: () => import('./pages/idiomas/idiomas.module').then( m => m.IdiomasPageModule)
  },
  {
    path: 'interior-chat',
    loadChildren: () => import('./pages/interior-chat/interior-chat.module').then( m => m.InteriorChatPageModule)
  },
  {
    path: 'interior-chat/:chat_id',
    loadChildren: () => import('./pages/interior-chat/interior-chat.module').then( m => m.InteriorChatPageModule)
  },
  { 
    path: 'interior-chat/:id_chat/:nombre_chat/:ultimo_mensaje', 
    //canActivate: [AuthGuard], 
    loadChildren: () => import('./pages/interior-chat/interior-chat.module').then(m => m.InteriorChatPageModule) },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'test-plugins',
    loadChildren: () => import('./pages/test-plugins/test-plugins.module').then( m => m.TestPluginsPageModule)
  },
  {
    path: 'photo-crop',
    loadChildren: () => import('./pages/utils/photo-crop/photo-crop.module').then( m => m.PhotoCropPageModule)
  },
  {
    path: 'image-view',
    loadChildren: () => import('./pages/utils/image-view/image-view.module').then( m => m.ImageViewPageModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('./pages/calendar/calendar.module').then( m => m.CalendarPageModule)
  },
  {
    path: 'reminder',
    loadChildren: () => import('./pages/reminder/reminder.module').then( m => m.ReminderPageModule)
  },
  {
    path: 'configuration',
    loadChildren: () => import('./pages/configuration/configuration.module').then( m => m.ConfigurationPageModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('./pages/privacy-policy/privacy-policy.module').then( m => m.PrivacyPolicyPageModule)
  },
  {
    path: 'eulas',
    loadChildren: () => import('./pages/eulas/eulas.module').then( m => m.EulasPageModule)
  },
  {
    path: 'terms',
    loadChildren: () => import('./pages/terms/terms.module').then( m => m.TermsPageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./pages/contact-us/contact-us.module').then( m => m.ContactUsPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'fondos-inversion',
    loadChildren: () => import('./pages/fondos-inversion/fondos-inversion.module').then( m => m.FondosInversionPageModule)
  },
  {
    path: 'fondos-inversion-details',
    loadChildren: () => import('./pages/fondos-inversion-details/fondos-inversion-details.module').then( m => m.FondosInversionDetailsPageModule)
  },
  {
    path: 'categorias',
    loadChildren: () => import('./pages/categorias/categorias.module').then( m => m.CategoriasPageModule)
  },
  {
    path: 'categorias-turistico',
    loadChildren: () => import('./pages/categorias-turistico/categorias-turistico.module').then( m => m.CategoriasTuristicoPageModule)
  },
  {
    path: 'categorias-inmobiliaria',
    loadChildren: () => import('./pages/categorias-inmobiliaria/categorias-inmobiliaria.module').then( m => m.CategoriasInmobiliariaPageModule)
  },
  {
    path: 'categorias-empleados',
    loadChildren: () => import('./pages/categorias-empleados/categorias-empleados.module').then( m => m.CategoriasEmpleadosPageModule)
  },
  {
    path: 'categorias-inquilinos',
    loadChildren: () => import('./pages/categorias-inquilinos/categorias-inquilinos.module').then( m => m.CategoriasInquilinosPageModule)
  },
  {
    path: 'categorias-proyectos-a-futuro',
    loadChildren: () => import('./pages/categorias-proyectos-a-futuro/categorias-proyectos-a-futuro.module').then( m => m.CategoriasProyectosAFuturoPageModule)
  },
  {
    path: 'categorias-facturas',
    loadChildren: () => import('./pages/categorias-facturas/categorias-facturas.module').then( m => m.CategoriasFacturasPageModule)
  },
  {
    path: 'detalles-turistico',
    loadChildren: () => import('./pages/detalles-turistico/detalles-turistico.module').then( m => m.DetallesTuristicoPageModule)
  },
  {
    path: 'detalles-inmobiliaria',
    loadChildren: () => import('./pages/detalles-inmobiliaria/detalles-inmobiliaria.module').then( m => m.DetallesInmobiliariaPageModule)
  }




  

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
