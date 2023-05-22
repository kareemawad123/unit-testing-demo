import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HeroServiceForLab } from './hero.service';

describe("hero service:", () => {
  let httpController: HttpTestingController, service: HeroServiceForLab, URL: string
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
    httpController = TestBed.inject(HttpTestingController)
    service = TestBed.inject(HeroServiceForLab)
    URL = 'http://localhost:3000/heroes'
  })
  it("addHero function", () => {
    let hero = {
      name: "Kareem", id: 12, strength: 20
    }
    // console.log(service);

    service.addHero(hero).subscribe({
      next: (res)=>{
        console.log(res);

      }
    });
    let req = httpController.expectOne(URL)
    expect(req.request.method).toBe("POST")
    req.flush("Add successful")
  })
  it("updateHero function", () => {
    let hero = {
      name: "Kareem", id: 12, strength: 20
    }

    service.updateHero(hero).subscribe({
        next: (res) => {
          console.log(res)
        }
      });
    let req = httpController.expectOne(URL)
    expect(req.request.method).toBe("PUT")
    req.flush("Update successful")

  })



})
