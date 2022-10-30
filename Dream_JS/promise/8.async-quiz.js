// async 퀴즈 정답

function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}

function getChicken() {
  return Promise.reject(new Error("치킨을 가지고 올 수 없음!"));
  //return Promise.resolve(`🪴 => 🐓`);
}

async function makeFiredEgg() {
  let chicken;
  try {
    chicken = await getChicken();
  } catch {
    chicken = "🐔";
  }
  const egg = await fetchEgg(chicken);
  const result_1 = await fryEgg(egg);
  console.log(result_1);
  return result_1;
}

makeFiredEgg().then(console.log);
