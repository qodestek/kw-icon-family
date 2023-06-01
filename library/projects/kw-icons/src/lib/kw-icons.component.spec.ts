import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KwIconsComponent } from './kw-icons.component';

describe('KwIconsComponent', () => {
  let component: KwIconsComponent;
  let fixture: ComponentFixture<KwIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KwIconsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KwIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
