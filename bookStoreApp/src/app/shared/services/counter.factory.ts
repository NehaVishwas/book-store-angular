import { CounterService } from "./counter.service";
import { Counter2Service } from "./counter2.service";
import { TestService } from "./test.service";

export const factory={provide:CounterService,useFactory:(testservice:TestService)=>testservice.status?
    new CounterService():new Counter2Service(),deps:[TestService]}