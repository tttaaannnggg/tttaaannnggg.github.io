const createIterator = (content)=>{
  let position = 0;
  return [
    ()=>{
      console.log(position);
      result = content[position]
      if(position < content.length){
        position++;
        return result;
      }else{
        return null;
      }
    },
    ()=> {
      console.log('resetting');
      position = 0
    }
  ]
}

const content = [
  `<img src="./web-cover.png"/>`,
  `<p class="text-container">
          he\'d fallen off of the scaffolding. he was holding a rivet gun that had landed beneath him and punched three sharp notes into his gut and he cried out three times in return. i could smell the earthy sawdust, the chemical sweet insulation foam, the sweat, the sharp iron wafting into the air. 

          his eyes looked into mine. he grabbed my wrist and guided my fingers into the dark slime that leaked from his torso. his sixth and seventh ribs scraped against my fingertips as i probed inside of him. i felt my nail bounce as i bumped the first rivet. he tensed and gasped with the shock that must have echoed through his bones.

          i tried to reach my fingernails underneath the smooth surface, but they were packed with thick black blood and slipped against the steel.
          </p>`,
  `<img src="./flowers.png"/>`,
]

const [getNextItem, reset] = createIterator(content);

const onLoad = ()=>{
  const contentContainer = document.querySelector('.content-container');
  contentContainer.addEventListener("click", ()=>{
    const next = getNextItem();
    if(next === null){
      reset();
    }
    contentContainer.innerHTML = next
  })
}

document.addEventListener('DOMContentLoaded', onLoad);

