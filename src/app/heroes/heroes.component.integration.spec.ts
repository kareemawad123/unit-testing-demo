import { of } from "rxjs"
import { HeroService } from "../services/hero service/hero.service"
import { HeroesComponent } from "./heroes.component"
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { Component, Input } from "@angular/core";
import { Hero } from "../hero";
import { By } from "@angular/platform-browser";
@Component({
    selector:"app-hero",
    template:""
})
class mockChildHeroComponent{
    @Input() hero!: Hero;
}

describe("heroes component (integration):", () => {
    let component:HeroesComponent,mockService:jasmine.SpyObj<HeroService>,fixture: ComponentFixture<HeroesComponent>
    let mockHeores:Hero[]
   beforeEach(()=>{
    mockService=jasmine.createSpyObj("hero service",["deleteHero","getHeroes"])
    // mockService.getHeroes.and.callFake(function(){})
    mockHeores=[
        {
            id: 11,
            name: "Mr. Nice",
            strength: 10
        },
        {
            id: 12,
            name: "Narco",
            strength: 5
        },
        {
            id: 13,
            name: "Bombasto",
            strength: 8
        }
    ]
    mockService.getHeroes.and.returnValue( of(mockHeores) )
    TestBed.configureTestingModule({
        declarations:[HeroesComponent,mockChildHeroComponent],
        providers:[
            {provide:HeroService,useValue:mockService}
        ]
    })
    fixture=TestBed.createComponent(HeroesComponent)
    component=fixture.componentInstance
   })
    it("exepct heores[] to be empty",()=>{
        expect(component.heroes).toEqual([])
    })
    it("expect after call ngOninit to set heroes[] and call service.getHoroes and change templete",()=>{
        component.ngOnInit()

        expect(component.heroes.length).toBe(3)
        expect(mockService.getHeroes).toHaveBeenCalled()
        
    })
    it("expect after call ngOninit to change templete",()=>{
        component.ngOnInit()

        fixture.detectChanges()
        let li = fixture.nativeElement.querySelectorAll("li")

        expect(li.length).toBe(3)

    })
    it("expect after calling delete() to set heroes=[] and call service.deleteHero(hero) and change templete",()=>{
        component.ngOnInit()
        fixture.detectChanges()
        let mockHero={
            id: 13,
            name: "Bombasto",
            strength: 8
        }
        component.delete(mockHero)

        expect(mockService.deleteHero).toHaveBeenCalledWith(mockHero)
        expect(component.heroes.length).toBe(2)

        fixture.detectChanges()
        let li = fixture.nativeElement.querySelectorAll("li")

        expect(li.length).toBe(2)
    })
    it("expect to send hero to child component",()=>{
        // arrange
        component.ngOnInit()
        // act
        fixture.detectChanges()

        // access app-hero
        let childern= fixture.debugElement.queryAll( By.directive(mockChildHeroComponent) )
        expect(childern.length).toBe(3)
        // access child component
        for (let index = 0; index < childern.length; index++) {            
            //  child.hero
            expect(childern[index].componentInstance.hero.name).toBe(mockHeores[index].name)
        }
    })
})