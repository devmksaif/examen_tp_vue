<script lang="ts">
export default {
  data() {
    return {
      listeJoueur: [] as Array<{ nom: string; prenom: string; score: number; id: number }>,
      premiere: null as { nom: string; prenom: string; score: number; id: number } | null,
      second: null as { nom: string; prenom: string; score: number; id: number } | null,
      nom: '',
      prenom: '',
      score: 0,
      id: 1,
    };
  },
  methods: {
    ajouter() {
      if (!this.nom || !this.prenom || this.score <= 0) {
        alert('Saisir le nom , prenom et score svp !');
        return;
      }
    
      this.listeJoueur.push({
        nom: this.nom,
        prenom: this.prenom,
        score: this.score,
        id: this.id++,
      });


      this.listeJoueur.sort((a, b) => b.score - a.score);

      this.premiere = this.listeJoueur[0] || null;
      this.second = this.listeJoueur[1] || null;

      this.nom = '';
      this.prenom = '';
      this.score = 0;
    },
  },
};
</script>

<template>
  <main>
   
    <table class="border shadow-lg p-4 rounded-lg">
      <tr>
        <td>Nom</td>
        <td>
          <input type="text" v-model="nom" class="border" />
        </td>
      </tr>
      <tr>
        <td>Prenom</td>
        <td>
          <input type="text" v-model="prenom" class="border" />
        </td>
      </tr>
      <tr>
        <td>Score</td>
        <td>
          <input type="number" v-model="score" class="border" />
        </td>
      </tr>
      <tr>
        <td>
          <button class="border p-2 rounded-lg" @click="ajouter">Soumettre</button>
        </td>
      </tr>
    </table>

    <!-- Player List -->
    <table class="p-4 mt-10 border">
      <thead>
        <tr>
          <th>Placement</th>
          <th>Nom</th>
          <th>Prenom</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="li in listeJoueur"
          :key="li.id"
          :class="{
            'bg-red-400 hover:bg-blue-400 hover:shadow-lg hover:border hover:font-bold': li.id === premiere?.id,
            'bg-orange-400': li.id === second?.id,
          }"
        >
          <td>{{ listeJoueur.indexOf(li) + 1 }}</td>
          <td>{{ li.nom }}</td>
          <td>{{ li.prenom }}</td>
          <td>{{ li.score }}</td>
          <td v-if="li.id == premiere?.id">🥇</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>
