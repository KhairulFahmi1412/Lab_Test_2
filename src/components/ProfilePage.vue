<template>
    <div class="table-container">
      <table class="styled-table">
          <tr>
            <td>Name</td>
            <td><input v-model="editableProfile.name" class="input-field"></td>
          </tr>
          <tr>
            <td>Course Year</td>
            <td><input v-model="editableProfile.courseYear" class="input-field"></td>
          </tr>
          <tr>
            <td>Matrix No</td>
            <td><input v-model="editableProfile.matrixNo" class="input-field"></td>
          </tr>
          <tr>
            <td>Address</td>
            <td><input v-model="editableProfile.address" class="input-field"></td>
          </tr>
        </table>
        <div class="button-container">
          <button @click="save">Save</button>
          <button @click="reset">Reset</button>
        </div>
      </div>
  </template>


<script>
export default {
  name: 'ProfilePage',
  data() {
    return {
      editableProfile: {
        name: this.$store.state.profile.name,
        courseYear: this.$store.state.profile.courseYear,
        matrixNo: this.$store.state.profile.matrixNo,
        address: this.$store.state.profile.address,
      },
    };
  },
  methods: {
    save() {
      this.$store.commit('updateProfile', this.editableProfile);
    },
    reset() {
      this.editableProfile = {
        name: this.$store.state.profile.name,
        courseYear: this.$store.state.profile.courseYear,
        matrixNo: this.$store.state.profile.matrixNo,
        address: this.$store.state.profile.address,
      };
    },
  },
};
</script>

<style scoped>
.table-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.styled-table {
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 1.2em; /* Adjusted font size */
  border: 1px solid #ffffff;
  width: 70%;
}

.styled-table td {
  padding: 12px 15px;
  border: 1px solid #ffffff;
  color: #ffffff;
}

.input-field {
  width: 100%;
  box-sizing: border-box;
  font-size: 1.2em; /* Adjusted font size */
  color: #2828e4;
  background: #808080; /* Gray background */
  border: none;
}

button {
  padding: 10px 20px;
  font-size: 1.2em;
  margin: 10px;
}

.button-container {
  display: flex;
  justify-content: center;
}
</style>