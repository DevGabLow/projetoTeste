import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditListProductComponent } from './edit-list-product.component';

describe('EditListProductComponent', () => {
  let component: EditListProductComponent;
  let fixture: ComponentFixture<EditListProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditListProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditListProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
