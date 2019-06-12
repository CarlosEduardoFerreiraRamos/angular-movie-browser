import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { BrowserModule, By } from '@angular/platform-browser';
import { NgModule, DebugElement } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MainModule } from './components/main/main.module';
import { ListModule } from './components/list/list.module';
import { FormModule } from './components/form/form.module';
import { ModalModule } from './components/modal/modal.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatInputModule, MatDialogContainer, MatDialogContent } from '@angular/material';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ToolbarModule } from './components/toolbar/toolbar.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PopupMessageModule } from './components/popup-message/popup-message.module';
import { ListComponent } from './components/list/list.component';
import { MockHttpsModule } from 'src/tests/mock-services/mock-https/mock-https.module';
import { ModalComponent } from './components/modal/modal.component';
import { finalize, take, tap, share, first } from 'rxjs/operators';

const displayedColumns = ['robot', 'space', 'rock'];
let listFixture;
let list: ListComponent;

let app: AppComponent;
let appFixture: ComponentFixture<AppComponent>;

function generateMokData() {
  const data = [];
  for ( let x = 0; x < 20; x ++) {
    data.push({name: `Robot_${x}`, space: `Sobot_${x}`, email: `Rock_${x}`});
  }
  return data;
}


fdescribe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        HttpClientModule,
        ModalModule,
        MainModule,
        ListModule,
        FormModule,
        ToolbarModule,
        FlexLayoutModule,
        PopupMessageModule,
        MatButtonModule,
        MatInputModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MockHttpsModule
      ],
      declarations: [
        AppComponent
      ]
    }).compileComponents().then( () => {
      listFixture = TestBed.createComponent(ListComponent);
      list = listFixture.debugElement.componentInstance;
      list.displayedColumns = displayedColumns;
      list.list = generateMokData();
      listFixture.detectChanges();

      appFixture = TestBed.createComponent(AppComponent);
      app = appFixture.componentInstance;
      appFixture.detectChanges();
    });
  }));

  it('VIEW layer: should render the App List', () => {
    expect(list).toBeTruthy();
  });

  it('VIEW layer: should have columns', () => {
    const html: string = listFixture.debugElement.nativeElement.innerHTML;
    const hasAllcolummns = displayedColumns.reduce( (value, column) => value && html.indexOf(column) > -1 , true);
    expect(hasAllcolummns).toBeTruthy();
  });

  it('VIEW layer: should respond to user input', () => {
    spyOn(list, 'onClick');
    listFixture.debugElement.nativeElement.querySelectorAll('tr').forEach( e => e.click());
    listFixture.whenStable().then( () => expect(list.onClick).toHaveBeenCalled());
  });

  it('shoud hender app component', () => {
    expect(app).toBeTruthy();
  });

  it('shoud open modal', async () => {
    const debugModal: DebugElement = appFixture.debugElement.query(By.directive(ModalComponent));
    const movie$ = app.onOpenDetail('tt1343727').pipe(first(), share());
    debugModal.componentInstance.onOpen(movie$);
    await movie$.toPromise();
    expect(appFixture.debugElement.nativeElement.offsetParent.querySelector('mat-dialog-container')).toBeTruthy();

    // });
    //     app.onOpenDetail('tt1343727').pipe( finalize( () => {
    //     console.log('finalizy');
    //     appFixture.detectChanges();
    //     setTimeout(() => {
    //       appFixture.detectChanges();
    //       console.log(appFixture.debugElement.nativeElement.offsetParent.querySelector('mat-dialog-container'))
    //       // console.log(appFixture.debugElement.nativeElement.offsetParent.querySelector('app-modal-overlay'))
    //     }, 500);
    //     // console.log(appFixture.debugElement.nativeElement.offsetParent.querySelector('mat-dialog-container'))
    //     // console.log(appFixture.debugElement.nativeElement.offsetParent.querySelector('app-modal-overlay'))
    //     // console.log(appFixture.debugElement.nativeElement);
    //     // console.log(appFixture.debugElement.query(By.directive(MatDialogContainer)));
    //     // console.log(appFixture.debugElement.nativeElement);
    //     // console.log(debugModal.nativeElement);
    //   }))
    // );
    // appFixture.detectChanges();
    // console.log(appFixture.nativeElement);
    // console.log(appFixture.debugElement.query(By.directive(MatDialogContainer)));
    // console.log(debugModal.nativeElement);
    // expect(app).toBeTruthy();
  });

  fit('should load modal content', async () => {
    const debugModal: DebugElement = appFixture.debugElement.query(By.directive(ModalComponent));
    const movie$ = app.onOpenDetail('tt1343727').pipe(tap( () => appFixture.detectChanges()), first(), share());
    debugModal.componentInstance.onOpen(movie$);
    await movie$.toPromise();
    expect(appFixture.debugElement.nativeElement.offsetParent.querySelector('mat-dialog-content')).toBeTruthy();
  });

  // it('should load modal image content', async() => {
  //   const debugModal: DebugElement = appFixture.debugElement.query(By.directive(ModalComponent));
  //   const movie$ = app.onOpenDetail('tt1343727').pipe(tap( () => appFixture.detectChanges()), first(), share());
  //   debugModal.componentInstance.onOpen(movie$);
  //   const movie = await movie$.toPromise();

  //   expect(appFixture.debugElement.nativeElement.offsetParent.querySelector('mat-dialog-content')).toBeTruthy();
  // });

  // it('should load modal description content', async() => {

  // });



});
