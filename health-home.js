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
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import './shared-styles.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/paper-input/paper-input.js'
import '@polymer/paper-button/paper-button.js';
class Home extends PolymerElement {
  static get template() {
    return html`
    <style>
    a {
      text-decoration: none;
      font-size: inherit;
      color: inherit;
    }
    .toolbar {
      @apply --layout-horizontal;
      @apply --layout-end-justified;
      background-color: rgba(255, 255, 255, 0.95);
    }
    .tabs {
      height: 100%;
      @apply --layout-horizontal;
    }
    .tabs > a {
      @apply --layout-vertical;
      @apply --layout-center-center;
      margin: 12px 16px 12px;
      border-bottom: 1px solid #222;
    }
    header {
      @apply --layout-vertical;
      @apply --layout-center-center;
      height: calc(100vh - 64px);
      padding: 0 16px;
      background-image: url('/images/doctors.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      color: white;
      text-align: center;
    }
    header > h2 {
      font-size: 56px;
      font-weight: 300;
      margin: 0;
    }
    header > p {
      font-size: 32px;
    }
    section {
      padding: 88px 16px;
    }
    .container {
      @apply --layout-horizontal;
      max-width: 800px;
      margin: 0 auto;
    }
    .container > * {
      @apply --layout-flex;
    }
    .container img {
      max-width: 100%;
      max-height: 100%;
    }
    .container h3 {
      font-size: 32px;
      font-weight: 300;
      margin: 24px 0;
    }
    .head{
      color:black;
      position:relative;
      bottom:200px;
    }
    .container p {
      line-height: 1.5;
    }
    paper-button.indigo {
      background-color: var(--paper-indigo-500);
      color: white;
      --paper-button-raised-keyboard-focus: {
        background-color: var(--paper-pink-a200) !important;
        color: white !important;
      };
    }
    @media (max-width: 600px) {
      .container {
        @apply --layout-vertical;
      }
    }
  </style>
  <app-location route="{{route}}"> 
  </app-location>

  <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
  </app-route>
  <app-header-layout>
    <app-header reveals effects="waterfall" slot="header">
      <app-toolbar class="toolbar">
        <div class="tabs">
         <paper-button raised class="custom indigo" on-click="doctor">Book An Appointment</paper-button>
         <paper-button raised class="custom indigo" on-click="feedback">Feedback</paper-button>
         <paper-button raised class="custom indigo" on-click="handleDoctor">Logout</paper-button>
        </div>
      </app-toolbar>
    </app-header>
    <header>
      <h2 class="head">Welcome To Our Healthcare</h2>
      <p>....</p>
    </header>
    <section id="Stay In Stay Safe">
      <div class="container">
        <div>
          <img src="/images/bg.png">
        </div>
        <div>
          <h3>Stay In Stay Safe</h3>
          <p>Lets all work together to put an end to this pandemic.</p>
          <p>Help us to stop the spread</p>
        </div>
      </div>
    </section>
    <section id="bookanappointment">
      <div class="container">
        <div>
          <img src="/images/movie.png">
        </div>
        <div>
          <h3>Why is it important that you stay home?</h3>
          <p> Covid-19, which is now a fast growing global pandemic. The number of confirmed cases worldwide has exceeded 25,65,000 due to rapid spreading of the virus.</p>
          <p> Covid-19, spreads very easily, much easier than many other regular illnesses we deal with on a regular basis. That's what makes it so dangerous.</p>
          <p>The best course of action is to stay at home prevent the spread of the disease as well as hospitals getting overwhelmed with patients who simply shoudn't be there.</p>
          <p>Kerala,Maharashtra,Punjab,Chattisgarh & MP witness an upsurge in daily new cases</p>
        </div>
      </div>
    </section>
    <section id="contact">
      <div class="container">
        <div>
          <img src="/images/videocall.png">
        </div>
        <div>
          <h3>Consult Through Videocall</h3>
          <p>Consult with Doctors across 22+ Specialities over chat,video and voice calls</p>
          <p>Skip the struggle of booking appointments.Consult a doctor at your ease</p>
        </div>
      </div>
    </section>
  </app-header-layout>
    `;
  }
  //Navigating from one element to another
  handleDoctor(){
    this.set('route.path','/login')
  }
  doctor(){
    this.set('route.path','/doctor')
}
  feedback(){
    this.set('route.path','/feedback')
  }
}

window.customElements.define('health-home', Home);
