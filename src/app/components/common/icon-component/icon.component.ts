import { Component, Input } from "@angular/core";

@Component({
  selector: "icon",
  templateUrl: "./icon.component.html"
})
export class IconComponent  {
    @Input("path") data: string = "M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z";
}
