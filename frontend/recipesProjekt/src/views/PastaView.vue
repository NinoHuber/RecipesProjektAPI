<template>
  <div class="header1">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/login">Log In</RouterLink>
    <RouterLink to="/signup">Sign Up</RouterLink>
  </div>

  <div class="header">Pasta Carbonara</div>

  <div class="container">
    <img src="./slike/1200-Spaghetti-Carbonara-2-SpendWithPennies.jpg" alt="Pasta Carbonara" class="recipe-image" />

    <h2 class="recipe-title">Recept za Pasta Carbonara</h2>

    <div class="section-title">Sastojci:</div>
    <ul>
      <li>400g špageta</li>
      <li>150g pancete (ili slanine)</li>
      <li>2 cela jaja + 2 žumanca</li>
      <li>50g rendanog parmezana</li>
      <li>1 čen belog luka (opciono)</li>
      <li>So i sveže mleven biber</li>
      <li>Maslinovo ulje</li>
    </ul>

    <div class="section-title">Priprema:</div>
    <ol>
      <li>Skuvaj špagete u posoljenoj vodi dok ne budu al dente.</li>
      <li>U međuvremenu isprži pancetu na malo maslinovog ulja dok ne postane hrskava. Po želji dodaj čen belog luka (nakon prženja izvadi).</li>
      <li>U posudi umuti jaja, žumanca, parmezan, so i dosta bibera.</li>
      <li>Kada su špagete gotove, sačuvaj malo vode od kuvanja i odmah ih ubaci u tiganj sa pancetom.</li>
      <li>Makni s vatre i brzo umešaj jaja i parmezan dok je sve još toplo – dodaj po potrebi malo vode od kuvanja da dobiješ kremasti sos.</li>
      <li>Serviraj odmah uz dodatni parmezan i biber.</li>
    </ol>
  </div>

  <footer>
   Recipe Site.
  </footer>
</template>

<style scoped>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #F4F3EF;
      color: #333;
    }

    .header1 {
      background-color: #1B3B2F;
      padding: 15px 30px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }

    .header1 a {
      color: white;
      text-decoration: none;
      font-size: 16px;
      margin-left: 20px;
      padding: 8px 12px;
      border-radius: 4px;
      transition: background 0.3s ease;
    }

    .header1 a:hover {
      background-color: #A3B9A3;
      color: #1B3B2F;
    }

    .header {
      background: url('./slike/header.png') no-repeat center/cover;
      padding: 160px 20px;
      text-align: center;
      color: white;
      font-size: 3em;
      font-weight: bold;
      background-blend-mode: multiply;
      background-color: rgba(27, 59, 47, 0.7);
    }

    .container {
      max-width: 900px;
      margin: 50px auto;
      padding: 30px;
      background: white;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
    }

    .recipe-image {
      width: 100%;
      border-radius: 12px;
      object-fit: cover;
      height: auto;
      max-height: 400px;
      margin-bottom: 25px;
    }

    .recipe-title {
      font-size: 2em;
      margin-bottom: 20px;
      text-align: center;
      color: #1B3B2F;
    }

    .section-title {
      font-weight: bold;
      font-size: 1.2em;
      margin-top: 30px;
      color: #1B3B2F;
    }

    ul, ol {
      margin-top: 10px;
      padding-left: 20px;
    }

    footer {
      background-color: #1B3B2F;
      color: white;
      text-align: center;
      padding: 20px 10px;
      font-size: 14px;
      margin-top: 50px;
    }

    @media (max-width: 600px) {
      .header {
        font-size: 2em;
        padding: 100px 10px;
      }

      .container {
        padding: 20px;
        margin: 20px;
      }
    }
</style>