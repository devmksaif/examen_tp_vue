<script lang="ts">
import NouveauTicket from './NouveauTicket.vue';
import ListeDesTickets from './ListeTickets.vue';

export default {
  components: {
    NouveauTicket,
    ListeDesTickets,
  },
  data(): { afficheNov: boolean; afficheTick: boolean } {
    return {
      afficheNov: false,
      afficheTick: false,
    };
  },
  methods: {
    afficherNouveau() {
      this.afficheNov = true;
      this.afficheTick = false;
    },
    afficherTickets() {
      this.afficheNov = false;
      this.afficheTick = true;
    },
  },
};
</script>

<template>
  <div>
    <div class="grid grid-flow-col">
      <button @click="afficherNouveau()" class="border rounded-lg p-3 bg-gray-200">
        Nouveau Ticket
      </button>
      <button @click="afficherTickets()" class="border rounded-lg p-3 bg-gray-200">
        Liste des Tickets
      </button>
    </div>

    <div v-if="afficheNov">
      <NouveauTicket />
    </div>
    <div v-if="afficheTick">
      <ListeDesTickets />
    </div>
  </div>
</template>
