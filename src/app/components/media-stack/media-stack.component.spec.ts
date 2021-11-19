import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaStackComponent } from './media-stack.component';

describe('MediaStackComponent', () => {
  let component: MediaStackComponent;
  let fixture: ComponentFixture<MediaStackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaStackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
