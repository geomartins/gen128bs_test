<template>
  <div class="c_contact">
    <div class="c_contact__left">
      <!-- <div class="title">
          Your first click
          <br>
           to making a difference
      </div>
      <div class="subtitle">
          Register Here
      </div> -->
    </div>

    <div class="c_contact__right">
      <div class="c_contact__right__form">
        <div class="form_vertical">
          <div class="form_vertical__label">
            Your Name
          </div>
          <div class="form_vertical__body">
            <q-input
              filled
              bg-color="white"
              dense
              v-model="text"
              label="First Name"
            />
          </div>

          <div class="form_vertical__body">
            <q-input
              filled
              bg-color="white"
              dense
              v-model="text"
              label="Last Name"
            />
          </div>
        </div>

        <div class="form_vertical ">
          <div class="form_vertical__label">
            Email Address
          </div>
          <div class="form_vertical__body">
            <q-input
              filled
              bg-color="white"
              dense
              v-model="text"
              label="First Name"
            />
          </div>
        </div>

        <div class="form_vertical ">
          <div class="form_vertical__label">
            Company
          </div>
          <div class="form_vertical__body">
            <q-input
              filled
              bg-color="white"
              dense
              v-model="text"
              label="First Name"
            />
          </div>
        </div>

        <div class="form_vertical ">
          <div class="form_vertical__label">
            Why do u want to be part of our team
          </div>
          <div class="form_vertical__body">
            <q-input
              filled
              bg-color="white"
              dense
              v-model="text"
              label="First Name"
            />
          </div>
        </div>

        <div class="form_vertical ">
          <div class="form_vertical__body">
            <q-btn
              color="secondary"
              label="Register"
              unelevated
              style="border-radius: 1rem;"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      text: ""
    };
  }
};
</script>
