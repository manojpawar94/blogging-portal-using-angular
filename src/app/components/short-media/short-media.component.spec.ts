import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortMediaComponent } from './short-media.component';

describe('ShortMediaComponent', () => {
  let component: ShortMediaComponent;
  let fixture: ComponentFixture<ShortMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortMediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
