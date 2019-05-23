
  
let list = document.querySelector('#list'),
    form = document.querySelector('form'),
    item = document.querySelector('#item');
    
form.addEventListener('submit',function(e) {
    e.preventDefault();

    // removing initial message
    if (list.firstChild) {
        let firstState = list.firstChild.innerHTML;
        console.log(firstState);
        if (firstState === 'Make a to do list') {
            list.removeChild(list.firstChild);
        }
    } 

    // saving task
    list.innerHTML += '<li>' + item.value + '</li>';
    saveTask();
    //console.log(list.firstChild.innerHTML);
    item.value = "";;
},false)

// checking tasks as completed
list.addEventListener('click',function(e) {
    var t = e.target;

    if(t.classList.contains('checked')) {
        t.parentNode.removeChild(t);
      } else {
        t.classList.add('checked');
      }

    saveTask();

},false)

// Save task
function saveTask() {
    window.localStorage.myTasks = list.innerHTML;
}

// listing tasks and initial message
function getValues() {
    var storedValues = window.localStorage.myTasks;
    if(storedValues) {
        list.innerHTML = storedValues;
      }
      else {
        list.innerHTML = '<li>Make a to do list</li>';
      }
}

window.onload = getValues();
 