const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

const eq = sampleActivity => MODERN_ACTIVITY / sampleActivity;

const k = tHalf => 0.693 / tHalf;

module.exports = function dateSample(sampleActivity) {
  if (sampleActivity === undefined || +sampleActivity <= 0 || typeof sampleActivity !== 'string' || +sampleActivity < 0 || +sampleActivity > HALF_LIFE_PERIOD) {
      return false;
  }
  const coeff = k(HALF_LIFE_PERIOD);
  const e = eq(parseFloat(sampleActivity));
  const t = Math.log(e) / coeff;
  const res = Math.ceil(t);
  return res > 0 ? res : false;
};
