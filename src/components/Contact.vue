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
              v-model="firstname"
              label="First Name"
            />
          </div>

          <div class="form_vertical__body">
            <q-input
              filled
              bg-color="white"
              dense
              v-model="lastname"
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
              v-model="email"
              label="Email Address"
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
              v-model="company"
              placeholder="ex: myname@example.com"
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
              type="textarea"
              v-model="reason"
              placeholder="Type here"
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
              @click.prevent="submit()"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "Footer",
  data() {
    return {
      text: ""
    };
  },
  computed: {
    ...mapState("contact", ["formData", "is_loading"]),
    firstname: {
      get() {
        return this.formData.firstname;
      },
      set(value) {
        this.updateFormData({ key: "firstname", value: value });
      }
    },
    lastname: {
      get() {
        return this.formData.lastname;
      },
      set(value) {
        this.updateFormData({ key: "lastname", value: value });
      }
    },

    email: {
      get() {
        return this.formData.email;
      },
      set(value) {
        this.updateFormData({ key: "email", value: value });
      }
    },

    company: {
      get() {
        return this.formData.company;
      },
      set(value) {
        this.updateFormData({ key: "company", value: value });
      }
    },

    reason: {
      get() {
        return this.formData.reason;
      },
      set(value) {
        this.updateFormData({ key: "reason", value: value });
      }
    }
  },
  methods: {
    ...mapMutations("contact", ["updateFormData"]),
    ...mapActions("contact",["create"]),
    async submit() {
      this.create(this);
    }
  }
};
</script>
