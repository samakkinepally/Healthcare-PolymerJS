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

class Login extends PolymerElement {
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
    paper-button.green {
      background-color: var(--paper-green-500);
      color: white;
      --paper-button-raised-keyboard-focus: {
        background-color: var(--paper-pink-a200) !important;
        color: white !important;
      };
    }
    .newcard{
      position:relative;
      top:200px;
      left:400px;
      width:500px;
    }
    </style>
    
    <app-location route="{{route}}"> 
    </app-location>

    <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
    </app-route>
    <div class="back">

    
      <div class="card newcard">
      <paper-input always-float-label id="user" label="User Name" required auto-validate pattern="[a-zA-Z]*" error-message="Enter valid Username" ></paper-input>
      <paper-input always-float-label id="pass" label="Password" required auto-validate pattern="[/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/]*" error-message="Enter valid password"></paper-input>
         <paper-button  raised class="custom green" on-click="handleClick">Sign in</paper-button>
         <paper-button  raised class="custom green" on-click="register">Register</paper-button>
      <br/>
      </div>
   
      </div>
    `;
  }
    handleClick(){
     if(this.$.user.value=="samakkinepally" && this.$.pass.value=="****"){
      this.set('route.path','/home')
     }
     else{
       alert("Invalid credentials");
     }
  }
  register(){
    this.set('route.path','/register')
  }
  
      
    
    
}

window.customElements.define('health-login', Login);
