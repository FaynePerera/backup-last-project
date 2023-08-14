import { getData } from 'country-list';
import hardcodedCountries from '@/lib/lists/_fixedCountries';

export default function Countries() {
  const countries = getData().sort((a, b) => a.name.toLowerCase()
    .localeCompare(b.name.toLowerCase(), 'en'));

  return (
    <>
      <option value="">Please select a country</option>
      {hardcodedCountries.map((country) => (
        <option value={country.code} key={`country_${country.code}`}>
          {country.name}
        </option>
      ))}
      {countries.map(
        (country) => !hardcodedCountries.find((c) => c.code === country.code) && (
          <option value={country.code} key={`country_${country.code}`}>
            {country.name}
          </option>
        )
      )}
    </>
  );
}
