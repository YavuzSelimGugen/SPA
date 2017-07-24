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
          <p class="control">
            <div class="text text-right" for="numeric">BAR CODE NUMBER <span class="smaller">(on the back of your membership card)</span></div>
            <input type="text" v-model="scancode"  id="bar-code-number" class="textfield" data-vv-as="barcode number" v-validate="'required|numeric'" :class="{'is-danger': errors.has('numeric') }" name="numeric">
          </br>
            <span v-show="errors.has('numeric')" class="help is-danger">{{ errors.first('numeric') }}</span>
          </p>

        </label>

        <label for="last-name">
          <p :class="{ 'control': true}">
            <div class="text text-right">LAST NAME</div>
            <input type="text" v-model="lname" id="last-name" class="textfield" data-vv-as="name" v-validate="'required|alpha'" :class="{'input': true, 'is-danger': errors.has('alpha') }" name="alpha" >
          </br>
            <span v-show="errors.has('alpha')" class="help is-danger">{{ errors.first('alpha') }}</span>
          </p>
        </label>

        <p class="text-center">
            <button type="button" id="login-button" @click="login">UPDATE MY MEMBERSHIP</button>
        </p>
      </form>
    </div>
    <div class="rule"></div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'login',
  data: () => ({
    scancode: '',
    lname: ''
  }),
  methods: {
    login () {
      this.$validator.validateAll().then(result => {
        if (result) {
          // API call. To see if credentials are legit
          axios.post(`https://www2.usfitnessgroup.com/restAPI/addfamily/search`, {
            scancode: this.scancode,
            lname: this.lname
          })
          .then(response => {
            // match was found, go to form
            console.log(response)
            console.log(response.data.AddLimit)
            this.$router.push('home')
          })
          .catch(e => {
            if (e.response.status === 404) {
              // 404 is sent when there is no match.
              alert('Sorry, no match was found!') // later on, we need to change alerts to pretier popup.
            } else {
              // there is different error, such as offer expired
              // show what is sent by server.
              alert(e.response.data)
            }
          })
        }
      })
    }
  }
}
</script>
