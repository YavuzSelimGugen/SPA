<template>
  <!-- HOME -->
            <div class="section section-home">
              <h2>A Healthy Family is a Happy Family.</h2>
              <p class="home-intro">
                Login below to add your spouse, roommate and family to your Onelife membership and save! <strong>But hurry! Offer ends June 23, 2017.</strong>
              </p>

              <div class="home-form-wrapper">
                <form>
                  <div class="checkbox-wrapper square">
                    <input type="checkbox" name="first-member" id="first-member" checked />
                    <label for="first-member"></label>
                    <p class="home-checkbox-label">First Additional Family Member: <strong>$20/month</strong></p>
                  </div>

                  <label for="first-name">
                    <p :class="{ 'control': true}">
                      <div class="text text-right">FIRST NAME</div>
                      <input type="text"  id="first-name" class="textfield" data-vv-as="name" v-validate="'required|alpha'" :class="{'input': true, 'is-danger': errors.has('alpha') }" name="alpha">
                    </br>
                      <span v-show="errors.has('alpha')" class="help is-danger">{{ errors.first('alpha') }}</span>
                    </p>
                  </label>

                  <label for="last-name">
                    <p :class="{ 'control': true}">
                      <div class="text text-right">LAST NAME</div>
                      <input type="text" id="last-name" class="textfield" data-vv-as="name"  v-validate="'required|alpha'" :class="{'input': true, 'is-danger': errors.has('alpha') }" name="alpha">
                    </br>
                      <span v-show="errors.has('alpha')" class="help is-danger">{{ errors.first('alpha') }}</span>
                    </p>
                  </label>

                  <label for="birth-date">
                    <p :class="{ 'control': true}">
                      <div class="text text-right">BIRTH DATE</div>
                      <input type="text" id="birth-date" class="textfield" data-vv-as="Birth day"  v-validate="'required|date_format:DD-MM-YYYY'" :class="{'input': true, 'is-danger': errors.has('date_format') }" name="date_format">
                    </br>
                      <span v-show="errors.has('date_format')" class="help is-danger">{{ errors.first('date_format') }}</span>
                    </p>
                  </label>

                  <label for="gender" class="select-wrapper">
                    <div class="text text-right">GENDER</div>
                    <select name="gender" id="gender">
                      <option>Option 1</option>
                      <option>Option 2</option>
                      <option>Option 3</option>
                    </select>
                    <i class="fa fa-caret-down dropdown-arrow"></i>
                  </label>

                  <label for="relationship" class="select-wrapper">
                    <div class="text text-right">RELATIONSHIP</div>
                    <select name="relationship" id="relationship">
                      <option>Option 1</option>
                      <option>Option 2</option>
                      <option>Option 3</option>
                    </select>
                    <i class="fa fa-caret-down dropdown-arrow"></i>
                  </label>

                  <div class="checkbox-wrapper square">
                    <input type="checkbox" name="additional-member" id="additional-member" />
                    <label for="additional-member"></label>
                    <p class="home-checkbox-label">Second Additional Family Member: <strong>$20/month</strong></p>
                  </div>

                  <p class="home-totals">TOTAL DUES ADDED: $20/month</p>
                  <p class="home-legal">Monthly dues are processed the first of each month for the upcoming month of club access.</p>
                  <p class="home-subtitle">PAYMENT OPTIONS</p>

                  <div class="radio-wrapper">
                    <input type="radio" name="payment-method" id="payment-method-filed-card" value="filed-card" />
                    <label for="payment-method-filed-card"></label>
                    <p class="home-checkbox-label"><strong>Please bill my card on file </strong>for the additional monthly membership dues and fees for the family members added above.</p>
                  </div>

                  <div class="table">
                    <div class="cell">
                      Card Type<br>
                      <strong>Visa</strong>
                    </div>
                    <div class="cell">
                      Card # on File<br>
                      <strong>xxxx-1674</strong>
                    </div>
                    <div class="cell">
                      Exp. Date<br>
                      <strong>02/19</strong>
                    </div>
                  </div>

                  <div class="radio-wrapper">
                    <input type="radio" name="payment-method" id="payment-method-new-card" value="new-card" />
                    <label for="payment-method-new-card"></label>
                    <p class="home-checkbox-label"><strong>Please bill the card below</strong> for the monthly membership dues for the family members added above and make this my card on file for future payments.</p>
                  </div>

                  <label for="name-on-card">
                    <p :class="{ 'control': true}">
                      <div class="text text-right">NAME ON CARD</div>
                      <input type="text" id="name-on-card" class="textfield" data-vv-as="name"  v-validate="'required|alpha'" :class="{'input': true, 'is-danger': errors.has('alpha') }" name="alpha">
                    </br>
                      <span v-show="errors.has('alpha')" class="help is-danger">{{ errors.first('alpha') }}</span>
                    </p>
                  </label>

                  <label for="card-number">
                    <p :class="{ 'control': true}">
                      <div class="text text-right">CARD NUMBER</div>
                      <input type="text"  id="card-number" class="textfield" data-vv-as="card number"  v-validate="'required|numeric'" :class="{'input': true, 'is-danger': errors.has('numeric') }" name="numeric">
                    </br>
                      <span v-show="errors.has('numeric')" class="help is-danger">{{ errors.first('numeric') }}</span>
                    </p>
                  </label>

                  <label for="card-type" class="select-wrapper">
                    <div class="text text-right">CARD TYPE</div>
                    <select name="card-type" id="card-type">
                      <option>Option 1</option>
                      <option>Option 2</option>
                      <option>Option 3</option>
                    </select>
                    <i class="fa fa-caret-down dropdown-arrow"></i>
                  </label>

                  <label for="expiration-month" class="select-wrapper">
                    <div class="text text-right">EXPIRATION MONTH</div>
                    <select name="expiration-month" id="expiration-month">
                      <option>January</option>
                      <option>February</option>
                      <option>March</option>
                    </select>
                    <i class="fa fa-caret-down dropdown-arrow"></i>
                  </label>

                  <label for="expiration-year" class="select-wrapper">
                    <div class="text text-right">EXPIRATION YEAR</div>
                    <select name="expiration-year" id="expiration-year">
                      <option>2017</option>
                      <option>2018</option>
                      <option>2019</option>
                    </select>
                    <i class="fa fa-caret-down dropdown-arrow"></i>
                  </label>

                  <div class="checkbox-wrapper square">
                    <input type="checkbox" name="conditions-accept" id="conditions-accept" />
                    <label for="conditions-accept"></label>
                    <p class="home-checkbox-label"><strong>I accept</strong> that adding members to my membership increases my total monthly dues and does not extend my membership term.</p>
                  </div>

                  <p class="text-center">
                    <router-link v-bind:to="'/confirmation'">
                      <button type="button" id="home-button">UPDATE MY MEMBERSHIP</button>
                    </router-link>
                  </p>
                  <p class="home-legal-button text-center">
                    Click the button above to submit these additions to your Onelife membership.<br>
                    Offer ends June 23, 2017. Not valid with any other discount or promotion.<br>
                    Must reside in your same residence. Limit two adults per membership. Some restrictions apply.
                  </p>
                </form>
              </div>
            </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      UserInput: ''
    }
  },
  methods: {
    GoToRoute: function () {
      this.$router.push({name: 'Paramdetails', params: { id: this.UserInput }})
    }
  }
}
</script>
