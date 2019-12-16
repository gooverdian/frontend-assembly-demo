import _ from 'lodash';

function component() {
    const element = document.createElement('div');

    // Теперь underscore действительно импортирован прям в этом файле
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());
