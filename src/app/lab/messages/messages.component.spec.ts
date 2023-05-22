import { Token } from "@angular/compiler";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { MessagesComponent } from "src/app/messages/messages.component";
import { MessageService } from "src/app/services/message/message.service";


describe("message component integration testing:", () => {
  let messageService: jasmine.SpyObj<MessageService>;
  let fixture: ComponentFixture<MessagesComponent>, component: MessagesComponent;
  beforeEach(() => {
    messageService = jasmine.createSpyObj("message Service", ["add", "clear"], { messages: [] });
    TestBed.configureTestingModule({
      declarations: [MessagesComponent],
      providers: [
        {provide:MessageService,useValue:messageService}
      ]
    })
    fixture = TestBed.createComponent(MessagesComponent);

    component = fixture.componentInstance
    fixture.detectChanges();
    // messagesComponent = new MessagesComponent(messageService);
  })

  it("expect comp. created successfully", () => {
    expect(component).toBeDefined();
  })
  it("expect component to be empty", () => {
    expect(component.messageService.messages).toEqual([]);
  })
  it("then expect div#msg to have the messages after setting it", () => {
    let msg = "Message 1"
    component.messageService.messages.push(msg);
    expect(component.messageService.messages.length).toBe(1);

    fixture.detectChanges();
    let divCon = fixture.debugElement.query(By.css("#container"));
    expect(divCon).toBeDefined();
    console.log(divCon);

    let msgCon = divCon.queryAll(By.css(".msg"));
    expect(msgCon[0].nativeElement.textContent).toContain(msg);
  })
})
