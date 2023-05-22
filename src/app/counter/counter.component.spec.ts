import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CounterComponent } from "./counter.component";
import { By } from "@angular/platform-browser";

describe('CounterComponent', () => {
  let fixture: ComponentFixture<CounterComponent>, component: CounterComponent
  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations:[
        CounterComponent
      ]
    })
    fixture=TestBed.createComponent(CounterComponent)
    component=fixture.componentInstance
  })
  it('should create component successfully', () => {
    expect(component).toBeDefined();
});
  it("expect counter =0 and in templete",()=>{
    expect(component.counter).toBe(0)
    fixture.detectChanges()
    let p= fixture.nativeElement.querySelector("p")
    expect(p.textContent).toContain("0")
  })
  it("expect after click increase btn to change counter and templete",()=>{
    // access btn
    let btn= fixture.debugElement.query( By.css("#inc") )
    // click
    btn.triggerEventHandler("click")
    // counter++
    expect(component.counter).toBe(1)
    // temeplete ++
    fixture.detectChanges()
    let p= fixture.nativeElement.querySelector("p")
    expect(p.textContent).toContain("1")
  })
  it("expect after click decrease btn to change counter and templete",()=>{
    let btn= fixture.debugElement.query( By.css("#dec") )

    btn.triggerEventHandler("click")
    expect(component.counter).toBe(-1)

    fixture.detectChanges()
    let p= fixture.nativeElement.querySelector("p")
    expect(p.textContent).toContain("-1")
  })
});
