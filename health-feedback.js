import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import '@polymer/paper-input/paper-input.js'
import '@polymer/paper-button/paper-button.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';

class Feedback extends PolymerElement {
  static get properties(){
    return{
    };
  }
  static get template() {
    return html`
    <style include="shared-styles">
    :host{
      display:block;
      padding:10px;
    }
    .center{
      position:relative;
      left:550px;
    }
    .back{
      background-image: linear-gradient(#00b09b, #96c93d);
      height:650px;
    }
    .newcard{
      position:relative;
      top:200px;
      left:400px;
      width:500px;
    }
    paper-button.green {
      background-color: var(--paper-green-500);
      color: black;
      --paper-button-raised-keyboard-focus: {
        background-color: var(--paper-pink-a200) !important;
        color: white !important;
      };
    }
    </style>
    
    <app-location route="{{route}}"> 
    </app-location>

    <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
    </app-route>
    <div class="back">

    
      <div class="card newcard">
      <paper-input always-float-label id="user" label=" Username" ></paper-input>
      <paper-input always-float-label id="feedback" label="Description"></paper-input>
         <paper-button  raised class="green" on-click="alertMsg">Share Your Feedback</paper-button>
      <br/>
      </div>
   
      </div>
    `;
  }
  alertMsg(){
    alert("Thanks For your Valuable Feedback");
  }
    
    
}

window.customElements.define('health-feedback', Feedback);
