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

class Register extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          padding: 0px;
          margin-top:0px;
          margin-left:20px;
          margin-bottom:0px;
        }
        .newcard{
          margin-top:20px;
          margin-bottom:20px;
          position:relative;
          top:500px;
          bottom:100px;
          left:100px;
          width:500px;
        }
        .center{
          position:relative;
          left:1000px;
        }
        .back{
          background-image: linear-gradient(#00b09b, #96c93d);
          height:700px;
        }
        paper-button.green {
          background-color: var(--paper-green-500);
          color: black;
          --paper-button-raised-keyboard-focus: {
            background-color: var(--paper-black-a200) !important;
            color: white !important;
          };
        }
      </style>
      <app-location route="{{route}}"> 
    </app-location>

    <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
    </app-route>
    <div class="back">

      <div class="card">
        <div class="circle">Registration</div>
        <h1>Enter Valid details</h1>
      <paper-input always-float-label label="First Name" required auto-validate pattern="[a-zA-Z]*" error-message="Enter valid name" value="{{userName}}"></paper-input>
      <paper-input always-float-label label="Last Name" required auto-validate pattern=[a-zA-Z]*" error-message="Enter valid name" value="{{userName}}"></paper-input>
      <paper-input always-float-label label="Password" required auto-validate pattern="[a-zA-Z\-0-9]*" error-message="Enter valid password" value="{{password}}"></paper-input>
      <paper-input always-float-label label="Enter valid Mailid" required auto-validate pattern="[/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/]*" error-message="Please Enter valid mail id!"></paper-input>
      <paper-button raised class="custom green" on-click="alertMsg">Submit</paper-button>
      <br/>

      </div>
    `;
  }
handleClick(){
  this.set('route.path','/register')
}
alertMsg(){
  alert("Successfully Registered");
}

}

window.customElements.define('health-register', Register);
