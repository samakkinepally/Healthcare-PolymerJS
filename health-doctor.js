/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import '@polymer/paper-input/paper-input.js'
import '@polymer/paper-button/paper-button.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';

class Doctor extends PolymerElement {
  static get properties(){
    return{
      Username:{
        type:String,
        value:''
      },
      password: {
        type:String,
        value:''
      }
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
      background-image:linear-gradient(#00b09b,#96c93d);
      height:650px;
    }
    paper-button.indigo {
      background-color: var(--paper-indigo-500);
      color: white;
      --paper-button-raised-keyboard-focus: {
        background-color: var(--paper-pink-a200) !important;
        color: white !important;
      };
    }
    paper-button.green {
      background-color: var(--paper-green-500);
      color: white;
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
    <div class="button">
    <header>
     <h1>Book An Appointment</h1>
    </header>

    <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
    </app-route>
      <div class="card">
      <h1>Consult with a Doctor</h1>
      <h4>Tell us your symptom or health problem</h4>
      
      <paper-input always-float-label label="Mention your symptoms"  value="{{userName}}"></paper-input>
      <paper-input always-float-label label="Enter Mobile Number" required auto-validate pattern="[0-9]*" error-message="Enter valid Mobile Number" value="{{textarea}}"></paper-input>
      <br/>
      <div class="card-actions">
      <p>Check doctor's availability today</p>
      <div class="horizontal justified">
      <paper-icon-button icon="icons:event"></paper-icon-button>
      <paper-button raised class="custom indigo" on-click="button">5:30PM</paper-button>
      <paper-button raised class="custom indigo" on-click="button">7:30PM</paper-button>
      <paper-button raised class="custom indigo" on-click="button">9:00PM</paper-button>
      <paper-button raised class="custom indigo" on-click="">9:30PM</paper-button>
      </div>
      <div class="center">
      <paper-button raised class="custom green" on-click="alertMsg">Confirm Appointment</paper-button>
      </div>
    `;
  }
    handleClick(){
      this.set('route.path','/home')
    }
    alertMsg(){
      alert("Appointment has been booked");
    }
    
}

window.customElements.define('health-doctor', Doctor);
