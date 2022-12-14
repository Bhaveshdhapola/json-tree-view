const tree = document.getElementById('tree');
const newTree = document.getElementById('newTree');


tree.addEventListener('click', (e) => {
    if(document.querySelector('.container')) return;
    console.log(e.target.classList[0] == 'addChild')
    if (e.target.classList[0] == 'addChild') {
        let child = document.createElement('ul');
        child.classList.add('parent');
        child.innerHTML = `<li>
        <div class='container'>
            <div>
            <span><input type="text" id="fname" name="fname" required class="input-text" placeholder="Field Name"></span>
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
            <svg class="deleteChild" width="20" height="20" viewBox="0 0 20 20" fill="#C4C4C4" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.33333 5H11.6667C11.6667 4.55797 11.4911 4.13405 11.1785 3.82149C10.866 3.50893 10.442 3.33333 10 3.33333C9.55797 3.33333 9.13405 3.50893 8.82149 3.82149C8.50893 4.13405 8.33333 4.55797 8.33333 5ZM6.66667 5C6.66667 4.11594 7.01786 3.2681 7.64298 2.64297C8.2681 2.01785 9.11595 1.66666 10 1.66666C10.8841 1.66666 11.7319 2.01785 12.357 2.64297C12.9821 3.2681 13.3333 4.11594 13.3333 5H17.5C17.721 5 17.933 5.0878 18.0893 5.24408C18.2455 5.40036 18.3333 5.61232 18.3333 5.83333C18.3333 6.05434 18.2455 6.26631 18.0893 6.42259C17.933 6.57887 17.721 6.66666 17.5 6.66666H16.765L16.0267 15.2833C15.9557 16.1154 15.575 16.8905 14.9599 17.4553C14.3448 18.0201 13.5401 18.3334 12.705 18.3333H7.295C6.45993 18.3334 5.65523 18.0201 5.04013 17.4553C4.42502 16.8905 4.04432 16.1154 3.97333 15.2833L3.235 6.66666H2.5C2.27899 6.66666 2.06703 6.57887 1.91075 6.42259C1.75447 6.26631 1.66667 6.05434 1.66667 5.83333C1.66667 5.61232 1.75447 5.40036 1.91075 5.24408C2.06703 5.0878 2.27899 5 2.5 5H6.66667ZM12.5 10C12.5 9.77898 12.4122 9.56702 12.2559 9.41074C12.0996 9.25446 11.8877 9.16666 11.6667 9.16666C11.4457 9.16666 11.2337 9.25446 11.0774 9.41074C10.9211 9.56702 10.8333 9.77898 10.8333 10V13.3333C10.8333 13.5543 10.9211 13.7663 11.0774 13.9226C11.2337 14.0789 11.4457 14.1667 11.6667 14.1667C11.8877 14.1667 12.0996 14.0789 12.2559 13.9226C12.4122 13.7663 12.5 13.5543 12.5 13.3333V10ZM8.33333 9.16666C8.55435 9.16666 8.76631 9.25446 8.92259 9.41074C9.07887 9.56702 9.16667 9.77898 9.16667 10V13.3333C9.16667 13.5543 9.07887 13.7663 8.92259 13.9226C8.76631 14.0789 8.55435 14.1667 8.33333 14.1667C8.11232 14.1667 7.90036 14.0789 7.74408 13.9226C7.5878 13.7663 7.5 13.5543 7.5 13.3333V10C7.5 9.77898 7.5878 9.56702 7.74408 9.41074C7.90036 9.25446 8.11232 9.16666 8.33333 9.16666ZM5.63333 15.1417C5.66884 15.5578 5.85931 15.9455 6.16704 16.2279C6.47477 16.5103 6.87732 16.6669 7.295 16.6667H12.705C13.1224 16.6665 13.5245 16.5097 13.8319 16.2274C14.1393 15.945 14.3295 15.5575 14.365 15.1417L15.0917 6.66666H4.90833L5.635 15.1417H5.63333Z"/>
            </svg>
            </div>
            <div class="ftype">
                <textarea id="fdesc" name="fdesc" placeholder="Field Description" rows="2" cols="50"></textarea>
            </div>
        </div>
        
        <i class="fa fa-plus-square addChild" aria-hidden="true"></i>
        <i class="fa fa-trash deleteChild" aria-hidden="true"></i>
        </li>`
        // e.target.parentElement.append(child)
        newTree.append(child)
    }
})

newTree.addEventListener('click', (e) => {
    console.log(e.target)
    // console.log(e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement)
    if (e.target.classList == 'addChild') {
        // let child = document.createElement('ul');
        // child.innerHTML = `<li><span>Key : Value</span><img class="addChild" src="./add.svg"><i class="fa fa-trash deleteChild" aria-hidden="true"></i></li>`
        // e.target.parentElement.append(child)
        let child = document.createElement('ul');
        child.classList.add('child');
        child.innerHTML = `<li>
        <div class='child-container'>
            <div>
            <span><input type="text" id="fname" name="fname" required class="input-text" placeholder="Field Name"></span>
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
            <svg class="deleteChild" width="20" height="20" viewBox="0 0 20 20" fill="#C4C4C4" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.33333 5H11.6667C11.6667 4.55797 11.4911 4.13405 11.1785 3.82149C10.866 3.50893 10.442 3.33333 10 3.33333C9.55797 3.33333 9.13405 3.50893 8.82149 3.82149C8.50893 4.13405 8.33333 4.55797 8.33333 5ZM6.66667 5C6.66667 4.11594 7.01786 3.2681 7.64298 2.64297C8.2681 2.01785 9.11595 1.66666 10 1.66666C10.8841 1.66666 11.7319 2.01785 12.357 2.64297C12.9821 3.2681 13.3333 4.11594 13.3333 5H17.5C17.721 5 17.933 5.0878 18.0893 5.24408C18.2455 5.40036 18.3333 5.61232 18.3333 5.83333C18.3333 6.05434 18.2455 6.26631 18.0893 6.42259C17.933 6.57887 17.721 6.66666 17.5 6.66666H16.765L16.0267 15.2833C15.9557 16.1154 15.575 16.8905 14.9599 17.4553C14.3448 18.0201 13.5401 18.3334 12.705 18.3333H7.295C6.45993 18.3334 5.65523 18.0201 5.04013 17.4553C4.42502 16.8905 4.04432 16.1154 3.97333 15.2833L3.235 6.66666H2.5C2.27899 6.66666 2.06703 6.57887 1.91075 6.42259C1.75447 6.26631 1.66667 6.05434 1.66667 5.83333C1.66667 5.61232 1.75447 5.40036 1.91075 5.24408C2.06703 5.0878 2.27899 5 2.5 5H6.66667ZM12.5 10C12.5 9.77898 12.4122 9.56702 12.2559 9.41074C12.0996 9.25446 11.8877 9.16666 11.6667 9.16666C11.4457 9.16666 11.2337 9.25446 11.0774 9.41074C10.9211 9.56702 10.8333 9.77898 10.8333 10V13.3333C10.8333 13.5543 10.9211 13.7663 11.0774 13.9226C11.2337 14.0789 11.4457 14.1667 11.6667 14.1667C11.8877 14.1667 12.0996 14.0789 12.2559 13.9226C12.4122 13.7663 12.5 13.5543 12.5 13.3333V10ZM8.33333 9.16666C8.55435 9.16666 8.76631 9.25446 8.92259 9.41074C9.07887 9.56702 9.16667 9.77898 9.16667 10V13.3333C9.16667 13.5543 9.07887 13.7663 8.92259 13.9226C8.76631 14.0789 8.55435 14.1667 8.33333 14.1667C8.11232 14.1667 7.90036 14.0789 7.74408 13.9226C7.5878 13.7663 7.5 13.5543 7.5 13.3333V10C7.5 9.77898 7.5878 9.56702 7.74408 9.41074C7.90036 9.25446 8.11232 9.16666 8.33333 9.16666ZM5.63333 15.1417C5.66884 15.5578 5.85931 15.9455 6.16704 16.2279C6.47477 16.5103 6.87732 16.6669 7.295 16.6667H12.705C13.1224 16.6665 13.5245 16.5097 13.8319 16.2274C14.1393 15.945 14.3295 15.5575 14.365 15.1417L15.0917 6.66666H4.90833L5.635 15.1417H5.63333Z"/>
            </svg>
            </div>
            <div class="ftype">
            <textarea id="fdesc" name="fdesc" placeholder="Field Description" rows="2" cols="50"></textarea>
            </div>
        </div>
        
        <i class="fa fa-plus-square addChild" aria-hidden="true"></i>
        <i class="fa fa-trash deleteChild" aria-hidden="true"></i>
        </li>`
        e.target.parentElement.parentElement.append(child);

        // newTree.append(child)
    }
    if (e.target.classList == 'deleteChild') {
        // e.target.parentElement.remove();
        if(document.querySelector('.parent')) document.querySelector('.parent').remove();
        else if(document.querySelector('.child')) document.querySelector('.child').remove();
        else e.target.parentElement.parentElement.remove()

        // console.log(e.target.parentElement.parentElement);
        // e.target.parentElement.parentElement.remove()
        // e.target.remove();
    }

let field = document.querySelector("#fname");
let fielDesc = document.querySelector("#fdesc");
let fielType = document.querySelector("#ftype");

if(e.target.parentElement.classList == 'ok' && document.querySelector('.parent')){
    console.log(field.value)
    console.log(fielDesc.value)
    console.log(fielType.value)
    document.querySelector('.parent').remove();
    let child = document.createElement('ul');
    // if(fielType.value == "object" || fielType.value == "array"){
        child.innerHTML = `<li>
        <span>${field.value} : ${fielType.value}</span>
        ${fielType.value == "object" || fielType.value == "array" ? `<img class="addChild" src="./add.svg">` : ''}
        <svg class="deleteChild" width="20" height="20" viewBox="0 0 20 20" fill="#C4C4C4" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.33333 5H11.6667C11.6667 4.55797 11.4911 4.13405 11.1785 3.82149C10.866 3.50893 10.442 3.33333 10 3.33333C9.55797 3.33333 9.13405 3.50893 8.82149 3.82149C8.50893 4.13405 8.33333 4.55797 8.33333 5ZM6.66667 5C6.66667 4.11594 7.01786 3.2681 7.64298 2.64297C8.2681 2.01785 9.11595 1.66666 10 1.66666C10.8841 1.66666 11.7319 2.01785 12.357 2.64297C12.9821 3.2681 13.3333 4.11594 13.3333 5H17.5C17.721 5 17.933 5.0878 18.0893 5.24408C18.2455 5.40036 18.3333 5.61232 18.3333 5.83333C18.3333 6.05434 18.2455 6.26631 18.0893 6.42259C17.933 6.57887 17.721 6.66666 17.5 6.66666H16.765L16.0267 15.2833C15.9557 16.1154 15.575 16.8905 14.9599 17.4553C14.3448 18.0201 13.5401 18.3334 12.705 18.3333H7.295C6.45993 18.3334 5.65523 18.0201 5.04013 17.4553C4.42502 16.8905 4.04432 16.1154 3.97333 15.2833L3.235 6.66666H2.5C2.27899 6.66666 2.06703 6.57887 1.91075 6.42259C1.75447 6.26631 1.66667 6.05434 1.66667 5.83333C1.66667 5.61232 1.75447 5.40036 1.91075 5.24408C2.06703 5.0878 2.27899 5 2.5 5H6.66667ZM12.5 10C12.5 9.77898 12.4122 9.56702 12.2559 9.41074C12.0996 9.25446 11.8877 9.16666 11.6667 9.16666C11.4457 9.16666 11.2337 9.25446 11.0774 9.41074C10.9211 9.56702 10.8333 9.77898 10.8333 10V13.3333C10.8333 13.5543 10.9211 13.7663 11.0774 13.9226C11.2337 14.0789 11.4457 14.1667 11.6667 14.1667C11.8877 14.1667 12.0996 14.0789 12.2559 13.9226C12.4122 13.7663 12.5 13.5543 12.5 13.3333V10ZM8.33333 9.16666C8.55435 9.16666 8.76631 9.25446 8.92259 9.41074C9.07887 9.56702 9.16667 9.77898 9.16667 10V13.3333C9.16667 13.5543 9.07887 13.7663 8.92259 13.9226C8.76631 14.0789 8.55435 14.1667 8.33333 14.1667C8.11232 14.1667 7.90036 14.0789 7.74408 13.9226C7.5878 13.7663 7.5 13.5543 7.5 13.3333V10C7.5 9.77898 7.5878 9.56702 7.74408 9.41074C7.90036 9.25446 8.11232 9.16666 8.33333 9.16666ZM5.63333 15.1417C5.66884 15.5578 5.85931 15.9455 6.16704 16.2279C6.47477 16.5103 6.87732 16.6669 7.295 16.6667H12.705C13.1224 16.6665 13.5245 16.5097 13.8319 16.2274C14.1393 15.945 14.3295 15.5575 14.365 15.1417L15.0917 6.66666H4.90833L5.635 15.1417H5.63333Z"/>
        </svg></li>`
        // e.target.parentElement.append(child)
        newTree.append(child)
    // } else{
    //     child.innerHTML = `<li><span>${field.value} : ${fielType.value}</span><i class="fa fa-plus-square addChild" aria-hidden="true"></i><i class="fa fa-trash deleteChild" aria-hidden="true"></i></li>`
    //     // e.target.parentElement.append(child)
    //     newTree.append(child)
    // }
    // console.log(e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement)

}
if(e.target.parentElement.classList == 'ok' && document.querySelector('.child')){
    console.log(field.value)
    console.log(fielDesc.value)
    console.log(fielType.value)
    let child = document.createElement('ul');
        child.innerHTML = `<li>
        <span>${field.value} : ${fielType.value}</span>
        ${fielType.value == "object" || fielType.value == "array" ? `<img class="addChild" src="./add.svg">` : ''}
        <svg class="deleteChild" width="20" height="20" viewBox="0 0 20 20" fill="#C4C4C4" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.33333 5H11.6667C11.6667 4.55797 11.4911 4.13405 11.1785 3.82149C10.866 3.50893 10.442 3.33333 10 3.33333C9.55797 3.33333 9.13405 3.50893 8.82149 3.82149C8.50893 4.13405 8.33333 4.55797 8.33333 5ZM6.66667 5C6.66667 4.11594 7.01786 3.2681 7.64298 2.64297C8.2681 2.01785 9.11595 1.66666 10 1.66666C10.8841 1.66666 11.7319 2.01785 12.357 2.64297C12.9821 3.2681 13.3333 4.11594 13.3333 5H17.5C17.721 5 17.933 5.0878 18.0893 5.24408C18.2455 5.40036 18.3333 5.61232 18.3333 5.83333C18.3333 6.05434 18.2455 6.26631 18.0893 6.42259C17.933 6.57887 17.721 6.66666 17.5 6.66666H16.765L16.0267 15.2833C15.9557 16.1154 15.575 16.8905 14.9599 17.4553C14.3448 18.0201 13.5401 18.3334 12.705 18.3333H7.295C6.45993 18.3334 5.65523 18.0201 5.04013 17.4553C4.42502 16.8905 4.04432 16.1154 3.97333 15.2833L3.235 6.66666H2.5C2.27899 6.66666 2.06703 6.57887 1.91075 6.42259C1.75447 6.26631 1.66667 6.05434 1.66667 5.83333C1.66667 5.61232 1.75447 5.40036 1.91075 5.24408C2.06703 5.0878 2.27899 5 2.5 5H6.66667ZM12.5 10C12.5 9.77898 12.4122 9.56702 12.2559 9.41074C12.0996 9.25446 11.8877 9.16666 11.6667 9.16666C11.4457 9.16666 11.2337 9.25446 11.0774 9.41074C10.9211 9.56702 10.8333 9.77898 10.8333 10V13.3333C10.8333 13.5543 10.9211 13.7663 11.0774 13.9226C11.2337 14.0789 11.4457 14.1667 11.6667 14.1667C11.8877 14.1667 12.0996 14.0789 12.2559 13.9226C12.4122 13.7663 12.5 13.5543 12.5 13.3333V10ZM8.33333 9.16666C8.55435 9.16666 8.76631 9.25446 8.92259 9.41074C9.07887 9.56702 9.16667 9.77898 9.16667 10V13.3333C9.16667 13.5543 9.07887 13.7663 8.92259 13.9226C8.76631 14.0789 8.55435 14.1667 8.33333 14.1667C8.11232 14.1667 7.90036 14.0789 7.74408 13.9226C7.5878 13.7663 7.5 13.5543 7.5 13.3333V10C7.5 9.77898 7.5878 9.56702 7.74408 9.41074C7.90036 9.25446 8.11232 9.16666 8.33333 9.16666ZM5.63333 15.1417C5.66884 15.5578 5.85931 15.9455 6.16704 16.2279C6.47477 16.5103 6.87732 16.6669 7.295 16.6667H12.705C13.1224 16.6665 13.5245 16.5097 13.8319 16.2274C14.1393 15.945 14.3295 15.5575 14.365 15.1417L15.0917 6.66666H4.90833L5.635 15.1417H5.63333Z"/>
        </svg></li>`
        // e.target.parentElement.append(child)
        // newTree.append(child)
        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.append(child)
        document.querySelector('.child').remove();
        // e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.append(child);
    // console.log(e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement)
    // console.log(e.target.parentElement.parentElement.parentElement.parentElement)

}
})