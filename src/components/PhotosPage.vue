<template>
    <table class="photos-table">
        <tr>
            <th>Thumbnail</th>
            <th>Description</th>
        </tr>
      <tr v-for="photo in photos" :key="photo.id"> 
        <td><img :src="photo.thumbnailUrl" :alt="photo.title"></td>
        <td>{{ photo.title }}</td>
      </tr>
    </table>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'PhotosPage',
    data() {
      return {
        photos: [],
      };
    },
    async created() {
      const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
      this.photos = response.data.slice(0, 10);
    },
  };
  </script>
  
  <style scoped>
  .photos-table {
    border-collapse: collapse;
    margin: 0 auto;
    background-color: #ffffff; /* White background */
  }
  
  .photos-table td {
    border: 1px solid #000000; /* Black border */
    padding: 3px;
  }
  </style>