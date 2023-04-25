import { World } from './World/World.js';

async function main() {
  button.onclick = function() {
    let div = document.createElement('div');
    div.className = "msg_1";
    div.innerHTML = "Робототе́хника — прикладная наука, занимающаяся разработкой автоматизированных технических систем и являющаяся важнейшей технической основой развития производства."
    document.body.append(div);
  }
  // Get a reference to the container element
  const container = document.querySelector('#scene-container');

  // create a new world
  const world = new World(container);

  // complete async tasks
  await world.init();

  // start the animation loop
  world.start();
}

main().catch((err) => {
  console.error(err);
});

