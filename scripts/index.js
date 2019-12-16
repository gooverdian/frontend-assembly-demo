function component() {
    const element = document.createElement('div');

    // Мы используем lodash underscore, в надежде, что он был импортирован
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());
