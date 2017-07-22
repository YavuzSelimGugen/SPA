<template>
  <form>
    <div class="column is-12">
        <label class="label" for="email">Email</label>
        <p :class="{ 'control': true }">
            <input v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" name="email" type="text" placeholder="Email">
            <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
        </p>
    </div>
    <div class="column is-12">
      <label class="label" for="numeric">Barcode number</label>
      <p :class="{ 'control': true }">
        <input v-validate="'required|numeric'" :class="{'input': true, 'is-danger': errors.has('numeric') }" name="numeric" type="text" placeholder="BarcodeNumber">
        <span v-show="errors.has('numeric')" class="help is-danger">{{ errors.first('numeric') }}</span>
      </p>
    </div>
  </form>

</template>

<script>
import Vue from 'vue'
import VeeValidate from 'vee-validate'
Vue.use(VeeValidate)

export default {
  name: 'form'
}
</script>
