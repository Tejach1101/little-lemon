// Generate a seeded random number generator
const seededRandom = (seed) => {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % m;

  return () => (s = (s * a) % m) / m;
};

// Fetch available time slots for a given date
const fetchAPI = (date) => {
  const result = [];
  const random = seededRandom(date.getDate());

  for (let hour = 17; hour <= 23; hour++) {
    if (random() < 0.5) result.push(`${hour}:00`);
    if (random() < 0.5) result.push(`${hour}:30`);
  }

  return result;
};

// Simulate API submission
const submitAPI = (formData) => true;

export {
  fetchAPI,
  submitAPI
};
