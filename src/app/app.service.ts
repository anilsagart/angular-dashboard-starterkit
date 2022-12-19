import { Injectable, TemplateRef, ViewContainerRef } from '@angular/core';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root',
})
export class AppService {

  private drawer: MatDrawer;
  private vcf: ViewContainerRef ;

  constructor(
    private spinner: NgxSpinnerService,
  ) { }

  setDrawer(sidenav: MatDrawer) {
    this.drawer = sidenav;
  }

  setContentVcf(viewContainerRef: ViewContainerRef) {
    this.vcf = viewContainerRef;
  }

  private createView(template: TemplateRef<any>) {
    this.vcf.clear();
    this.vcf.createEmbeddedView(template);
  }

  open(template: TemplateRef<any>) {
    this.createView(template);
    return this.drawer.open();
  }

  close() {
    return this.drawer.close();
  }

  toggle() {
    return this.drawer.toggle();
  }

  public showPinnerService(){
    this.spinner.show();
    setTimeout( ()=> {
      this.spinner.hide();
    },1000);
  }
  
}
