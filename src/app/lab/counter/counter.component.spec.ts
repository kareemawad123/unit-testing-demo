import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CounterComponentForLab } from "./counter.component";
import { By } from "@angular/platform-browser";


fdescribe('Counter Component for lab', () => {
  let fixture: ComponentFixture<CounterComponentForLab>;
  let component: CounterComponentForLab;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponentForLab],
    });
    fixture = TestBed.createComponent(CounterComponentForLab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })
  it("when click btn event trigger increse fun expect the interpolation detect the change", () => {
    let span = fixture.nativeElement.querySelector("span");
    let btnInc = fixture.debugElement.queryAll(By.css("button"))[0];
    let btndec = fixture.debugElement.queryAll(By.css("button"))[1];
    // console.log(btnInc);
    // console.log(btndec);

    expect(span.textContent).toContain("0");

    btnInc.triggerEventHandler('click');
    expect(component.counter).toBe(1);

    fixture.detectChanges();
    expect(span.textContent).toContain("1");
  })
  it("when click btn event trigger decrease fun expect the interpolation detect the change", () => {
    let span = fixture.nativeElement.querySelector("span");
    let btnInc = fixture.debugElement.queryAll(By.css("button"))[0];
    let btndec = fixture.debugElement.queryAll(By.css("button"))[1];
    // console.log(btnInc);
    // console.log(btndec);

    component.counter = 5;
    fixture.detectChanges();

    expect(span.textContent).toContain("5");

    btndec.triggerEventHandler('click');
    expect(component.counter).toBe(4);

    fixture.detectChanges();
    expect(span.textContent).toContain("4");

  })
});
