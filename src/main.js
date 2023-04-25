import { World } from './World/World.js';

async function main() {
  button.onclick = function() {
    let div = document.createElement('div');
    div.className = "msg_1";
    div.innerHTML = "Финансовая грамотность — сочетание осведомленности, знаний, навыков, установок и поведения, связанных с финансами и необходимых для принятия разумных финансовых решений, а также достижения личного финансового благополучия; набор компетенций человека, которые образуют основу для разумного принятия финансовых решений. "
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

