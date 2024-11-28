<script lang="ts">
import axios from 'axios';

export default {
  data() {
    return {
      plats: [] as Array<{ id: number; titre: string; prix: number }>,
      quantite: 1,
      platChoisi: null as null | { id: number; titre: string; prix: number },
      panier: [] as Array<{ id: number; titre: string; prix: number; quantite: number }>,
    };
  },
  computed: {
    total(): number {
      return this.panier.reduce((sum, item) => sum + item.prix * item.quantite, 0);
    },
  },
  mounted() {
    axios
      .get('http://localhost:3000/plats')
      .then((response) => {
        this.plats = response.data;
      })
      .catch((error) => console.log('Erreur:', error));
  },
  methods: {
    ajouterAuPanier() {
      if (this.platChoisi && this.quantite > 0) {
        this.panier.push({ ...this.platChoisi, quantite: this.quantite });
      }
    },
    enregistrer(rediriger = false) {
      const ticket = {
        date: new Date().toISOString(),
        montant: this.total,
      };
      axios.post('http://localhost:3000/commandes', ticket).then(() => {
        if (rediriger) {
          this.$emit('retour');
        } else {
          this.panier = [];
          this.quantite = 1;
        }
      });
    },
  },
};
</script>

<template>
  <div>
    <h2>Nouveau Ticket</h2>
    <div>
      <select v-model="platChoisi">
        <option disabled value="">-- Sélectionnez un plat --</option>
        <option v-for="plat in plats" :key="plat.id" :value="plat">
          {{ plat.titre }} - {{ plat.prix }} TND
        </option>
      </select>
      <input type="number" v-model="quantite" min="1" />
      <button @click="ajouterAuPanier" class="border rounded-lg p-2 bg-gray-200">
        Ajouter
      </button>
    </div>

    <table>
      <thead>
        <tr>
          <th>Plat</th>
          <th>Prix Unitaire</th>
          <th>Quantité</th>
          <th>Prix Total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in panier" :key="item.id">
          <td>{{ item.titre }}</td>
          <td>{{ item.prix.toFixed(2) }} TND</td>
          <td>{{ item.quantite }}</td>
          <td>{{ (item.prix * item.quantite).toFixed(2) }} TND</td>
        </tr>
      </tbody>
    </table>

    <h3>Montant Total: {{ total.toFixed(2) }} TND</h3>

    <button @click="enregistrer(true)" class="border rounded-lg p-2 bg-gray-200">
      Enregistrer
    </button>
    <button @click="enregistrer(false)" class="border rounded-lg p-2 bg-gray-200">
      Enregistrer et Nouveau
    </button>
  </div>
</template>
