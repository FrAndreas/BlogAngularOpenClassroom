import { Component } from "@angular/core";
import { PostListComponent } from "./post-list/post-list.component";
import { Post } from "./entities/post";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  titulo = "mon Blog";
  
  postTable: Post[] = [
    {
      title: "Times Like These",
      content:
        "I, I'm a one way motorway I'm the one that drives away Then follows you back home I, I'm a street light shining I'm a wild light blinding bright Burning off alone It's times like these you learn to live again It's times like these you give and give again It's times like these you learn to love again It's times like these time and time again",
      loveIts: 0,
      created_at: new Date("01-14-03 13:02")
    },
    {
      title: "Walk",
      content: "A million miles away      Your signal in the distance      To whom it may concern      I think I lost my way      Getting good at starting over      Every time that I return      Learning to walk again      I believe I've waited long enough      Where do I begin?      Learning to talk again Can't you see I've waited long enough? Where do I begin?",
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: "Blackbird",
      content:"Blackbird singing in the dead of night       Take these broken wings and learn to fly       All your life       You were only waiting for this moment to arise       Blackbird singing in the dead of night       Take these sunken eyes and learn to see       All your life       You were only waiting for this moment to be free",
      loveIts:0,
      created_at: new Date()
    }
  ];
}
