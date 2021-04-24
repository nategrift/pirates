export const DIALOGUE = {
  welcome: {
    text: `
      Welcome to Pirates' Quest, Captain! I'm Marina, your first mate. <br>
      Let's get underway, press <code>W</code> to raise the sail.
    `,
    triggered: false,
    image: "happy",
  },
  lower: {
    text: `
      Sweet! I love the sea. Let's slow down by pressing <code>S</code>
    `,
    triggered: false,
    image: "talking",
  },
  turn: {
    text: `
      Land Ahoy! Use <code>A</code> and <code>D</code> to avoid running into anything.
    `,
    triggered: false,
    image: "talking",
  },
  shooting: {
    text: `
      These waters aren't safe, use <code>,</code> and <code>.</code> to fire off the cannons.<br>
      Careful which fights you pick, you only have a limited number of cannonballs.
    `,
    triggered: false,
    image: "talking",
  },
  port: {
    text: `
      To load up on cannon balls, hire crew, and repair your ship we need to dock at a port. Sail up 
      to a port and slow down so we stop in the circle.
    `,
    triggered: false,
    image: "talking",
  },
  port_store: {
    text: `
      We made it to land! You've done a fantastic job Captain. Here we can buy resources to sell for profit at 
      other ports or load up on cannon balls for defending ourselves against other players.
    `,
    triggered: false,
    image: "talking_happy",
  },
  port_crew: {
    text: `
      From this screen we can hire new crew members. Each has a different bonus that could help us on our quest.
    `,
    triggered: false,
    image: "talking",
  },
  treasure: {
    text: `
      Oh no, a lady at the port told me her son is lost as sea! Let's sail around and see if we can rescue him.
    `,
    triggered: false,
    image: "shock",
  },
  found_treasure: {
    text: `
      We found him! His mother will be so excited to see him. He offered us some gold for coming out all this way. 
      This should help us keep our cannon ball stock high. Let's go blow up some ships!
    `,
    triggered: false,
    image: "happy",
  },
};

export type Dialogue = {
  text: string;
  triggered: boolean;
  image: string;
};
