<script lang="ts">
import axios from 'axios';

export default {
  data() {
    return {
      tickets: [] as Array<{ id: number; date: string; montant: number }>,
    };
  },
  mounted() {
    axios
      .get('http://localhost:3000/commandes')
      .then((response) => {
        this.tickets = response.data;
      })
      .catch((error) => console.log('Erreur:', error));
  },
};
</script>

<template>
  <div>
    <h2>Liste des Tickets</h2>
    <table>
      <thead>
        <tr>
          <th>Numéro</th>
          <th>Date</th>
          <th>Montant</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="ticket in tickets" :key="ticket.id">
          <td>{{ ticket.id }}</td>
          <td>{{ ticket.date }}</td>
          <td>{{ ticket.montant.toFixed(2) }} TND</td>
        </tr>
      </tbody>
    </table>
  
  </div>
</template>
