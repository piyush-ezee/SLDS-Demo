<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <div class="slds-notify slds-notify_alert slds-alert_warning" role="alert">
      <span class="slds-assistive-text">warning</span>
      <span
        class="slds-icon_container slds-icon-utility-warning slds-m-right_x-small"
        title="Description of icon when needed"
      >
        <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
          <use :xlink:href="require('@salesforce-ux/design-system/assets/icons/utility-sprite/svg/symbols.svg')+'#warning'"
          ></use>
        </svg>
      </span>
      <h2>
        Your browser is outdated. Your Salesforce experience may be degraded.
        <a href="#">More Information</a>
      </h2>
      <div class="slds-notify__close">
        <button
          class="slds-button slds-button_icon slds-button_icon-small"
          title="Close"
        >
          <svg class="slds-button__icon" aria-hidden="true">
            <use
              :xlink:href="require('@salesforce-ux/design-system/assets/icons/utility-sprite/svg/symbols.svg')+'#close'"
            ></use>
          </svg>
          <span class="slds-assistive-text">Close</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
