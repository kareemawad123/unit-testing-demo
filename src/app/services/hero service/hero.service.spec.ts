import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HeroService } from './hero.service';
import { MessageService } from '../message/message.service';
describe("hero service:", () => {
    let mockService: jasmine.SpyObj<MessageService>, httpController: HttpTestingController, service: HeroService, URL: string
    beforeEach(() => {
        mockService = jasmine.createSpyObj("message", ['add'])
        TestBed.configureTestingModule({
            // providers: [
            //     // { provide: MessageService, useValue: mockService }
            // ],
            imports: [HttpClientTestingModule]
        })
        httpController = TestBed.inject(HttpTestingController)
        service = TestBed.inject(HeroService)
        URL = 'http://localhost:3000/heroes'
    })
    it("getHero by id", () => {
        let hero = {
            name: "asia", id: 12, strength: 20
        }
        service.getHero(12).subscribe({
            next: (data) => {
                expect(data).toEqual(hero)
            }
        })

        let req = httpController.expectOne(URL + "/12")
        expect(req.request.method).toBe("GET")

        req.flush(hero)
    })
    it("getHeroes", () => {
        let heroes = [{
            name: "asia", id: 12, strength: 20
        },
        { name: "ahmed", id: 13, strength: 20 }
        ]
        service.getHeroes().subscribe({next:(data)=>{
            expect(data.length).toBe(2)
            expect(data).toEqual(heroes)
        }})

        let req = httpController.expectOne(URL)

        expect(req.request.method).toBe("GET")

        req.flush(heroes)
    })
})
