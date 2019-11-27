import { Component, OnInit, Inject, Input } from "@angular/core";
import TenantPinboardService from "src/app/services/api/tenant/pinboard-service";
import IPinboardResponse from "src/app/models/response/tenant/pinboard-response.interface";

@Component({
  selector: "app-pinboard",
  templateUrl: "./pinboard.page.html",
  styleUrls: ["./pinboard.page.scss"],
})
export class PinboardPage implements OnInit {


  @Input() pinboard: IPinboardResponse;

  constructor(@Inject(TenantPinboardService) private pinboardService: TenantPinboardService) { }

  async ngOnInit() {
    const response = await this.pinboardService.getPinBoard();
    this.pinboard = response.payload;
    console.log(this.pinboard.text);
  }
}
