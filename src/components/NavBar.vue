<template>
  <div class="gen_nav">
    <div class="gen_nav__left">
      <div class="gen_nav_left__box">
        <img src="/logo.png" style="height: 70px" />
      </div>
    </div>
    <div class="gen_nav__right">
      <div class="gen_nav__right__box">
        <ul>
          <li>
            <a href="">HOME</a>
          </li>
          <li>
            <a href="">CONTACT</a>
          </li>
        </ul>
        <ul>
           <li>
            <q-btn
              round
              color="primary"
              icon="fab fa-twitter"
              size="sm"
              class="q-mr-xs"
              unelevated
            />
            <q-btn
              round
              color="primary"
              icon="fab fa-instagram"
              class="q-mr-xs"
              size="sm"
              unelevated
            />
            <q-btn
              round
              color="primary"
              icon="fab fa-linkedin-in"
              class="q-mr-xs"
              size="sm"
              unelevated
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {};
  }
};
</script>
