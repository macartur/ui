import Vue from 'vue'
import VueHotkey from 'v-hotkey'
import App from './App.vue'

Vue.use(VueHotkey)
window.$ = window.jQuery = require('jquery');

import KytosToolbar from '../src/components/kytos/Toolbar.vue';
import KytosMap from '../src/components/kytos/map/Map.vue';
import KytosTopology from '../src/components/kytos/topology/Topology.vue';
import KytosMenubar from '../src/components/kytos/Menubar.vue';
import KytosContextPanel from '../src/components/kytos/ContextPanel.vue';
import KytosTabs from '../src/components/kytos/tabs/tabs.vue';
import KytosTerminal from '../src/components/kytos/terminal/Terminal.vue';
import KytosLogging from '../src/components/kytos/logging/Logging.vue';
import KytosButton from '../src/components/kytos/inputs/buttons/Button.vue';
import KytosButtonGroup from '../src/components/kytos/inputs/buttons/ButtonGroup.vue';
import KytosDropdown from '../src/components/kytos/inputs/Dropdown.vue';
import KytosActionMenu from '../src/components/kytos/misc/ActionMenu.vue';
import KytosInfoPanel from '../src/components/kytos/misc/InfoPanel.vue';
import KytosStatusBar from '../src/components/kytos/misc/StatusBar.vue'
import KytosInput from '../src/components/kytos/inputs/Input.vue';
import KytosTextarea from '../src/components/kytos/inputs/Textarea.vue';
import KytosCheckbox from '../src/components/kytos/inputs/Checkbox.vue';

import KytosSlider from '../src/components/kytos/inputs/Slider.vue';
import KytosAccordion from '../src/components/kytos/accordion/Accordion.vue';
import KytosAccordionItem from '../src/components/kytos/accordion/AccordionItem.vue';
import KytosPropertyPanel from '../src/components/kytos/ppanel/PropertyPanel.vue';
import KytosPropertyPanelItem from '../src/components/kytos/ppanel/PropertyPanelItem.vue';

import KytosInterface from '../src/components/kytos/switch/Interface.vue';
import KytosFlow from '../src/components/kytos/switch/Flow.vue';

import KytosSwitchInfo from '../src/kytos/switchInfo.vue';
import KytosSwitchRadar from '../src/kytos/switchRadar.vue';
import KytosInterfaceInfo from '../src/kytos/interfaceInfo.vue';

import KytosChartTimeseries from '../src/components/kytos/chart/Timeseries.vue'
import KytosChartRadar from '../src/components/kytos/chart/RadarChart.vue'


Vue.component('kytos-menubar', KytosMenubar);
Vue.component('kytos-toolbar', KytosToolbar);
Vue.component('kytos-map', KytosMap);
Vue.component('kytos-topology', KytosTopology);
Vue.component('kytos-context-panel', KytosContextPanel);
Vue.component('kytos-tabs', KytosTabs);
Vue.component('kytos-terminal', KytosTerminal);
Vue.component('kytos-logging', KytosLogging);
Vue.component('kytos-button', KytosButton);
Vue.component('kytos-dropdown', KytosDropdown);
Vue.component('kytos-button-group', KytosButtonGroup);
Vue.component('kytos-action-menu', KytosActionMenu);
Vue.component('kytos-input', KytosInput);
Vue.component('kytos-textarea', KytosTextarea);
Vue.component('kytos-checkbox', KytosCheckbox);
Vue.component('kytos-status-bar', KytosStatusBar)

Vue.component('kytos-slider', KytosSlider);
Vue.component('kytos-accordion', KytosAccordion);
Vue.component('kytos-accordion-item', KytosAccordionItem);
Vue.component('kytos-property-panel', KytosPropertyPanel);
Vue.component('kytos-property-panel-item', KytosPropertyPanelItem);
Vue.component('kytos-info-panel', KytosInfoPanel);

Vue.component('kytos-interface', KytosInterface);
Vue.component('kytos-flow', KytosFlow);

Vue.component('kytos-switch-info', KytosSwitchInfo);
Vue.component('kytos-switch-radar', KytosSwitchRadar);
Vue.component('kytos-interface-info', KytosInterfaceInfo);

Vue.component('kytos-chart-timeseries', KytosChartTimeseries)
Vue.component('kytos-chart-radar', KytosChartRadar)

Vue.filter('humanize_bytes', function (num, precision = 0, suffix = 'bps') {
    num = Number(num);
    if (isNaN(num)) {
      throw new TypeError('Expected a number');
    }

    var neg = num < 0;
    var units = ['', 'k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'];

    if (neg) {
      num = -num;
    }

    if (num < 1) {
      return (neg ? '-' : '') + num + ' ' + suffix;
    }

    var exponent = Math.min(Math.floor(Math.log(num) / Math.log(1000)), units.length - 1);
    num = (num / Math.pow(1000, exponent)).toFixed(precision) * 1;
    var unit = units[exponent] + suffix;

    return (neg ? '-' : '') + num + ' ' + unit;
});

Vue.prototype.$kytos = new Vue()
Vue.prototype.$kytos_server = "http://localhost:8181/"
Vue.prototype.$kytos_server_api = "http://localhost:8181/api/"

var kytos = new Vue({
  el: '#app',
  render: h => h(App),
  data () {
    return {
        infoPanelView: undefined
    }
  }
})
