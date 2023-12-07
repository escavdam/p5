function createRange(name, min, max, value){
    const div = document.createElement('div');
    const input_range = document.createElement('input');
    const input_min = document.createElement('input');
    const input_max = document.createElement('input');
    const label = document.createElement('label');
    div.appendChild(label);
    div.appendChild(input_range);
    div.appendChild(input_min);
    div.appendChild(input_max);
    div.className = 'range';
    input_range.type = 'range';
    input_min.type = 'number'
    input_max.type = 'number'
    input_range.id = name;
    input_range.min = min;
    input_min.value = min;
    input_max.value = max;
    input_range.max = max;
    input_range.value = value;
    label.innerText = name;
    input_min.addEventListener('change', function(){
        input_range.min = input_min.value;
    });
    input_max.addEventListener('change', function(){
        input_range.max = input_max.value;
    });
    input_range.addEventListener('input', function(){
        label.innerText = name + ': ' + input_range.value;
    });
    return div;
}




class RangeComponent {
    constructor(name, min, max, value) {
        this.name = name;
        this.min = min;
        this.max = max;
        this.value = value;
    }
    
    create() {
        const div = document.createElement('div');
        const label = document.createElement('label');
        const input_range = document.createElement('input');
        const input_min = document.createElement('input');
        const input_max = document.createElement('input');
        
        input_range.type = 'range';
        input_min.type = 'number';
        input_max.type = 'number';

        div.className = 'range';

        div.appendChild(label);
        div.appendChild(input_range);
        div.appendChild(input_min);
        div.appendChild(input_max);

        input_min.value = this.min;
        input_max.value = this.max;
        input_range.min = this.min;
        input_range.max = this.max;
        input_range.value = this.value;
        label.innerText = this.name;
        
        input_min.addEventListener('change', () => {
            input_range.min = input_min.value;
        });
        
        input_max.addEventListener('change', () => {
            input_range.max = input_max.value;
        });
        
        input_range.addEventListener('input', () => {
            label.innerText = this.name + ': ' + input_range.value;
        });

        this.element = div;
    }
}

const tools = document.createElement('div');
const showButton = document.createElement('button');

tools.className = 'tools';
showButton.className = 'showButton';
showButton.innerText = 'Show';

//create classList.toggle
showButton.addEventListener('click', function(){
    
});
document.body.appendChild(showButton);
document.body.appendChild(tools);

// const speedX = createRange('speedX', 0, 100, 50);
// const speedY = createRange('speedY', 0, 100, 50);
// tools.appendChild(speedX);
// tools.appendChild(speedY);

const speedX = new RangeComponent('speedX', 0, 100, 50);
speedX.create();
tools.appendChild(speedX.element);

const speedY = new RangeComponent('speedY', 0, 100, 50);
speedY.create();
tools.appendChild(speedY.element);