import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactWrapper } from './react-wrapper';

describe('ReactWrapper', () => {
  let component: ReactWrapper;
  let fixture: ComponentFixture<ReactWrapper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactWrapper],
    }).compileComponents();

    fixture = TestBed.createComponent(ReactWrapper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
