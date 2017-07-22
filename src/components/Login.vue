<template>
  <!-- LOGIN -->
  <div class="section section-login">

    <h2>A Healthy Family is a Happy Family.</h2>
    <p class="login-intro">
      Login below to add your spouse, roommate and family to your Onelife membership for $20/each! <strong>But hurry! Offer ends June 23, 2017.</strong>
    </p>

    <div class="form-wrapper">
      <form>
        <label for="bar-code-number">

          <p :class="{ 'control': true }">
            <div :class="{ 'control': true }" class="text text-right" for="numeric">BAR CODE NUMBER <span class="smaller">(on the back of your membership card)</span></div>
            <input type="text"  id="bar-code-number" data-vv-as="barcode number" v-validate="'required|numeric'" :class="{'input': true, 'is-danger': errors.has('numeric') }" name="numeric">
          </br>
            <span v-show="errors.has('numeric')" class="help is-danger">{{ errors.first('numeric') }}</span>
          </p>

        </label>

        <label for="last-name">
          <p :class="{ 'control': true}">
            <div class="text text-right">LAST NAME</div>
            <input type="text"  id="last-name" class="textfield" data-vv-as="name" v-validate="'required|alpha'" :class="{'input': true, 'is-danger': errors.has('alpha') }" name="alpha" >
          </br>
            <span v-show="errors.has('alpha')" class="help is-danger">{{ errors.first('alpha') }}</span>
          </p>
        </label>

        <p class="text-center">
          <router-link v-bind:to="'/home'">
            <button type="button" id="login-button">UPDATE MY MEMBERSHIP</button>
          </router-link>
        </p>
      </form>
    </div>
    <div class="rule"></div>
  </div>
</template>

<script>
export default {
  name: 'login'
}
</script>
