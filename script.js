const tree = document.getElementById('tree');
const newTree = document.getElementById('newTree');


tree.addEventListener('click', (e) => {
    console.log(e.target.classList[2] == 'addChild')
    if (e.target.classList[2] == 'addChild') {
        let child = document.createElement('ul');
        child.innerHTML = `<li><span>Key : Value</span><i class="fa fa-plus-square addChild" aria-hidden="true"></i><i class="fa fa-trash deleteChild" aria-hidden="true"></i></li>`
        // e.target.parentElement.append(child)
        newTree.append(child)
    }
    // if (e.target.classList[2] == 'deleteChild') {
    //     // e.target.parentElement.remove();
    //     console.log(e.target)
    // }
})

newTree.addEventListener('click', (e)=>{
    if (e.target.classList[2] == 'addChild') {
        let child = document.createElement('ul');
        child.innerHTML = `<li><span>Key : Value</span><i class="fa fa-plus-square addChild" aria-hidden="true"></i><i class="fa fa-trash deleteChild" aria-hidden="true"></i></li>`
        e.target.parentElement.append(child)
        // newTree.append(child)
    }
    if (e.target.classList[2] == 'deleteChild') {
        // e.target.parentElement.remove();
        console.log(e.target.parentElement.parentElement);
        e.target.parentElement.parentElement.remove()
        // e.target.remove();
    }
})