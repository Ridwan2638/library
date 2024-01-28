import Tooltip from './ui-mors/tooltip';
import Dropdown from './ui-mors/dropdown';

const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init()

const dropdown = document.querySelectorAll('.dropdown');
dropdown.forEach(dropdown => {
    const instance = new Dropdown(dropdown);
    instance.init()
}

)