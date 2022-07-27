<template>
  <div class="form">
    <form @submit.prevent="submitData">
      <label for="">Nombre</label>
      <input type="text" placeholder="nombre" v-model="enteredName" />
      <label for="">Email</label>
      <input type="email" placeholder="email" v-model="enteredPhone" />
      <label for="">Phone</label>
      <input type="text" placeholder="phone" v-model="enteredEmail" />
      <label for="">Tipo de amigue</label>
      <select name="" id="" v-model="enteredMejorAmigue">
        <option value="true">Mejor amigue</option>
        <option value="false">Gran amigue de Tita y Popy</option>
      </select>
      <button>Enviar</button>
    </form>
  </div>
</template>
<script>
  export default {
    emits: ["add-contact"],
    data() {
      return {
        enteredName: "",
        enteredPhone: "",
        enteredEmail: "",
        enteredMejorAmigue: false,
      };
    },
    methods: {
      submitData() {
        this.$emit(
          "add-contact",
          this.enteredName,
          this.enteredPhone,
          this.enteredEmail,
          this.enteredMejorAmigue
        );
      },
    },
  };
</script>
<style>
  .form {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    text-align: center;
    width: 30%;

    box-shadow: 1px 1px 5px gray;
  }
  form {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  input {
    margin: 1rem 0;
  }
  select {
    margin: 1rem 0;
  }
  button {
    background: #ec3169;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
    margin: 1rem 0;
  }
</style>
