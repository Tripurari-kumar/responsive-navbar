
const lists= document.querySelectorAll('.nav-items-list');
 
lists.forEach((list)=>{
  list.addEventListener('click', ()=>{
    //console.log(document.querySelector('.nav-items-list.active'));
    document.querySelector('.nav-items-list.active').classList.remove('active');
    list.classList.add('active');
  })
})

console.log(lists);