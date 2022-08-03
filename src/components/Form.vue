<template>
  <FormulateForm @submit="submitHandler">
    <div v-for="(input, index) in inputs" :key="index">
      <FormulateInput
        class="formInput"
        :class="input.name"
        :type="input.type"
        :name="input.name"
        :label="input.label"
        :validation="input.validation"
        :validation-messages="input.validationMessages"
        :options="input.options"
      />
    </div>
  </FormulateForm>
</template>

<script>
import inputs from "../data/inputsData.js";

export default {
  name: "Form",
  methods: {
    submitHandler(data) {
      console.log(data);
    },
  },
  data: function () {
    return { inputs };
  },
};
</script>

<style scoped>
@import "../assets/styles/form.css";

.formInput {
  margin-bottom: 1rem;
}
.prefix {
  position: absolute;
}
.phoneNumber {
  width: 52%;
  margin-top: 2.45rem;
  margin-left: 7rem;
}
</style>
