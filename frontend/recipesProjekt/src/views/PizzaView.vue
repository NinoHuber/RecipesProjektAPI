<template>
  <div class="header1">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/login">Log In</RouterLink>
    <RouterLink to="/signup">Sign Up</RouterLink>
  </div>

  <div class="header">Pizza</div>

  <div class="container">
    <img src="./slike/the-best-homemade-margherita-pizza-1-4.jpg" alt="Pizza" class="recipe-image" />

    <h2 class="recipe-title">Recept za Domaću Pizzu</h2>

    <div class="section-title">Sastojci za tijesto:</div>
    <ul>
      <li>500g brašna</li>
      <li>1 kesica suvog kvasca (ili 20g svežeg)</li>
      <li>1 kašičica šećera</li>
      <li>1,5 kašičica soli</li>
      <li>250ml tople vode</li>
      <li>2 kašike maslinovog ulja</li>
    </ul>

    <div class="section-title">Sastojci za nadev (Margherita):</div>
    <ul>
      <li>200ml pelata ili sos od paradajza</li>
      <li>200g mozzarella sira</li>
      <li>Sveži bosiljak</li>
      <li>Maslinovo ulje</li>
      <li>Soli i origano po ukusu</li>
    </ul>

    <div class="section-title">Priprema:</div>
    <ol>
      <li>U toploj vodi razmutiti šećer i kvasac, ostaviti 10 minuta da nadođe.</li>
      <li>Dodati brašno, so i ulje, zamesiti meko testo. Pokriti i ostaviti da naraste 1h.</li>
      <li>Razvući testo u oblik pizze, premazati sosom, dodati sir i ostale sastojke po želji.</li>
      <li>Peći u unapred zagrejanoj rerni na 220°C oko 12–15 minuta dok ivice ne porumene.</li>
      <li>Po želji dodati još maslinovog ulja i svež bosiljak nakon pečenja.</li>
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