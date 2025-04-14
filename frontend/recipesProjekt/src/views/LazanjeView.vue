<template>
    <div class="header1">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/login">Log In</RouterLink>
      <RouterLink to="/signup">Sign Up</RouterLink>
  </div>

  <div class="header">Lazanje</div>

  <div class="container">
    <img src="./slike/Lasagna-Bolognese-scaled.jpg" alt="Lazanje" class="recipe-image" />

    <h2 class="recipe-title">Recept za Lazanje</h2>

    <div class="section-title">Sastojci:</div>
    <ul>
      <li>500g mljevenog mesa</li>
      <li>1 glavica luka</li>
      <li>2 čehna bijelog luka</li>
      <li>400ml pelata (sjeckane rajčice)</li>
      <li>Bešamel sos (maslac, brašno, mlijeko)</li>
      <li>Lazanja kore</li>
      <li>Ribani sir (mozzarella i/ili parmezan)</li>
      <li>Soli, bibera, origana po ukusu</li>
    </ul>

    <div class="section-title">Priprema:</div>
    <ol>
      <li>Na ulju propržiti luk i bijeli luk, dodati mljeveno meso i dinstati dok ne porumeni.</li>
      <li>Dodati pelate, začiniti i kuvati 15–20 minuta dok se sos ne zgusne.</li>
      <li>Za bešamel: otopiti maslac, dodati brašno i postepeno mlijeko uz stalno miješanje. Kuvati dok se ne zgusne.</li>
      <li>U vatrostalnu posudu redati: sos, kore, bešamel, sir. Ponavljati slojeve, završiti sirom.</li>
      <li>Zapeći u rerni na 180°C oko 30–40 minuta dok ne porumeni.</li>
    </ol>
  </div>

  <footer>
    © 2025 Recipe Site. All rights reserved.
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