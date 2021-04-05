import { Map } from "./Map";
import { Sprite, Spritesheet } from "./Sprites";

export type EntityInTransit = {
  type: string;
  x: number;
  y: number;
  health: number;
  id: string;
  speed: number;
  heading: number;
};

export class Entity {
  x: number;
  y: number;
  speed: number;
  health: number;
  id: string;
  type: string;
  heading: number;
  spritesheet: Spritesheet;

  constructor(d: EntityInTransit) {
    this.type = d.type;
    this.x = d.x;
    this.y = d.y;
    this.id = d.id;
    this.health = d.health;
    this.speed = d.speed;
    this.heading = d.heading;

    this.spritesheet = new Spritesheet("./assets/ships.png");
  }

  render(map: Map): void {
    if (this.type == "explosion") {
      map.drawSprite(
        new Sprite(map.ENTITY_SHEET, 0, 0, 74, 75),
        this.x,
        this.y,
        this.heading
      );
    }
  }

  toJSON(): EntityInTransit {
    return {
      type: this.type,
      x: this.x,
      y: this.y,
      health: this.health,
      id: this.id,
      speed: this.speed,
      heading: this.heading,
    };
  }
}
