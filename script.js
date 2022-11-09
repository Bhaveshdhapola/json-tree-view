const tree = document.getElementById('tree');
const newTree = document.getElementById('newTree');


tree.addEventListener('click', (e) => {
    console.log(e.target.classList[0] == 'addChild')
    if (e.target.classList[0] == 'addChild') {
        let child = document.createElement('ul');
        child.innerHTML = `<li>
        <div>
            <div>
            <span><input type="text" id="fname" name="fname" class="input-text" placeholder="Field Name"></span>
            <span class="cselect">
                <select name="ftype" id="ftype">
                    <option class="values"  value="">Field Type</option>
                    <option class="values" value="string">String</option>
                    <option class="values"  value="number">Number</option>
                    <option class="values" value="integer">Integer</option>
                    <option class="values" value="object">Object</option>
                    <option class="values" value="array">Array</option>
                    <option class="values" value="null">Null</option>
                </select>
            </span>
            <span class="ok"><img class="addChild" src="./ok.svg"></span>
            </div>
            <div class="ftype">
            <textarea id="fdesc" name="fdesc" rows="2" cols="50">Field Description</textarea>
            </div>
        </div>
        
        <i class="fa fa-plus-square addChild" aria-hidden="true"></i>
        <i class="fa fa-trash deleteChild" aria-hidden="true"></i>
        </li>`
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