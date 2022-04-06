import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { FormStylesComponent } from './form-styles.component';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { ReactiveComponentModule } from '@ngrx/component';

describe('FormStylesComponent', () => {
  let component: FormStylesComponent;
  let fixture: ComponentFixture<FormStylesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        CdkAccordionModule,
        ReactiveComponentModule],
      declarations: [ FormStylesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
