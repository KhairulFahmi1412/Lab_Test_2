<template>
<div class="table-container">
      <table class="styled-table">
        <tr>
          <th>Name</th>
          <td>{{ profile.name }}</td>
        </tr>
        <tr>
          <th>Course Year</th>
          <td>{{ profile.courseYear }}</td>
        </tr>
        <tr>
          <th>Matrix No</th>
          <td>{{ profile.matrixNo }}</td>
        </tr>
        <tr>
          <th>Address</th>
          <td>{{ profile.address }}</td>
        </tr>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutPage',
    computed: {
      profile() {
        return this.$store.getters.profile
      }
    }
  }
  </script>

<style scoped>
.table-container {
  display: flex;
  justify-content: center;
}

.styled-table {
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 1.5em;
  border: 1px solid #ffffff;
}

.styled-table th,
.styled-table td {
  padding: 12px 15px;
  border: 1px solid #ffffff;
  color: #ffffff;
}

.styled-table tbody tr {
  border-bottom: 1px solid #ffffff;
}
</style>