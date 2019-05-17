import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemGastoComponent } from './item-gasto.component';

describe('ItemGastoComponent', () => {
  let component: ItemGastoComponent;
  let fixture: ComponentFixture<ItemGastoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemGastoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemGastoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
