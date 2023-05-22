import { of } from "rxjs"
import { HeroService } from "../services/hero service/hero.service"
import { HeroesComponent } from "./heroes.component"

describe("heroes component (isolation):", () => {
    let component:HeroesComponent,mockService:jasmine.SpyObj<HeroService>
   beforeEach(()=>{
    mockService=jasmine.createSpyObj("hero service",["deleteHero","getHeroes"])
    let mockHeores=[
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
    // mockService.getHeroes.and.callFake(function(){retrun of(mockHeores)})
    mockService.getHeroes.and.returnValue( of(mockHeores) )
    component=new HeroesComponent(mockService)
   })
    it("exepct heores[] to be empty",()=>{
        expect(component.heroes).toEqual([])
    })
    it("expect after call ngOninit to set heroes[] and call service.getHoroes",()=>{
        component.ngOnInit()

        expect(component.heroes.length).toBe(3)
        expect(mockService.getHeroes).toHaveBeenCalled()
    })
    it("expect after calling delete() to set heroes=[] and call service.deleteHero(hero)",()=>{
        component.ngOnInit()
        let mockHero={
            id: 13,
            name: "Bombasto",
            strength: 8
        }
        component.delete(mockHero)

        expect(mockService.deleteHero).toHaveBeenCalledWith(mockHero)
        expect(component.heroes.length).toBe(2)
    })
})