import { MessageService } from "./message.service"

describe("message Service:",()=>{
    let service:MessageService
    beforeEach(()=>{
        service=new MessageService()
    })
    it("expect messages [] to be empty",()=>{
        expect(service.messages).toEqual([])
    })
    it("expect to add a msg successfully",()=>{
        service.add("msg1")
        expect(service.messages.length).toBe(1)
    })
    it("expect clear() to clear successfully",()=>{
        service.add("msg2")
        expect(service.messages.length).toBe(1)

        service.clear()
        expect(service.messages.length).toBe(0)
    })
})