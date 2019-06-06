import { ModalActionsDetailDirective } from './modal-actions-detail.directive';
import { Component, DebugElement, ViewChild, ElementRef } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';


export const TEST_TEXT = 'TESTE TEXT';
@Component({
  template: `
    <div app-modal-actions-detail>
      TESTE TEXT
    </div>
  `
})
class TestActionsDetailComponent {
  @ViewChild(ModalActionsDetailDirective) directive: ModalActionsDetailDirective;
}

let component: TestActionsDetailComponent;
let fixture: ComponentFixture<TestActionsDetailComponent>;
let template: DebugElement;

describe('ModalActionsDetailDirective', () => {

  beforeEach( () => {
    TestBed.configureTestingModule({
      declarations: [TestActionsDetailComponent, ModalActionsDetailDirective]
    });
    fixture = TestBed.createComponent(TestActionsDetailComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
    template = fixture.debugElement.query(By.all());
    fixture.detectChanges();
  });

  it('should have default test text', () => {
    const context = component.directive.viewContainerRef.element.nativeElement.innerHTML;
    expect(context.match(new RegExp(TEST_TEXT))).toBeTruthy();
  });
});
