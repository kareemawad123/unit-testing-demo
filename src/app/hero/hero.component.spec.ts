
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { HeroComponent } from "./hero.component"
import { By } from "@angular/platform-browser"

describe("hero component integration:", () => {
    let fixture: ComponentFixture<HeroComponent>, component: HeroComponent
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HeroComponent]
        })
        fixture = TestBed.createComponent(HeroComponent)
        component = fixture.componentInstance
    })
    it('should create component successfully', () => {
        expect(component).toBeDefined();
    });
    it("expect to detect changes in templete after setting hero", () => {
        component.hero = {
            id: 13,
            name: "Bombasto",
            strength: 8
        }
        fixture.detectChanges()
        // access templete
        //    let div= fixture.nativeElement.querySelector("div")
        let div = fixture.debugElement.query(By.css("div")).nativeElement
        expect(div.textContent).toContain("Bombasto")

        component.hero.id=22
        fixture.detectChanges()

        let span= fixture.nativeElement.querySelector(".badge")
        expect(span.textContent).withContext("check id after change it").toBe("22")
    })
})