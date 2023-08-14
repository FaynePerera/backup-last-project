import { getData } from 'country-list';
import Form from 'react-bootstrap/Form';
import hardcodedCountries from '@/lib/lists/_fixedCountries';

export default function CountrySelector({ selectedCountry }) {
  const countries = getData().sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase(), 'en'));

  return (
    <Form.Group>
      <Form.Label>Country</Form.Label>
      <Form.Select
        aria-label="Select a Country"
        onChange={(e) => selectedCountry(e.currentTarget.value)}
      >
        <option value={null}>Please select</option>
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
      </Form.Select>
    </Form.Group>
  );
}
