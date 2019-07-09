import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListapelisComponent } from './listapelis.component';

describe('ListapelisComponent', () => {
  let component: ListapelisComponent;
  let fixture: ComponentFixture<ListapelisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListapelisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListapelisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
