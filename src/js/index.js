import { parameters, views } from './configGeo';
import './intervals'
import * as ggb from './ggb'
import '../styles.css'
import { elements, getInputValue, updateFeedbackSection, resetDOM } from './UI';
import Interval from './intervals';

let ggbApp = new GGBApplet(parameters, '5.0', views);

function update() {
    const string = getInputValue('input1');
    const range = new Interval(string, 'y');
    ggb.updateRange(range);
    ggb.domainVisible();

}

function newRange() {
    ggbAppState.counter = ggbAppState.currentIndex;
    ggb.newConstruction();
    ggb.loadCodebase(parameters.ggbBase64);
    resetDOM();
}



function handleKeyPress(e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        elements.submit1.click();
    }
}

window.onload = function() {
    ggbApp.inject('ggbApplet', 'preferHTML5');
    elements.input1.focus();
    elements.submit1.addEventListener('click', update);
    elements.newBtn1.addEventListener('click', newRange);
    elements.input1.onkeypress = handleKeyPress;
}
