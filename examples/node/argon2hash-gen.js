const argon2 = require('argon2');

(async () => {
  try {
    const hash = await argon2.hash("Vyap@Admin#SupplyNote", {
      type: argon2.argon2id,
      memoryCost: 65536,
      timeCost: 3,
      parallelism: 4,
    });
    console.log(hash);
  } catch (err) {
    console.error(err);
  }
})();
