import { useState } from "react";

export default function App() {
  const [country, setCountry] = useState(null);
  const [city, setCity] = useState(null);

  const countryOptions = [
    { value: "usa", label: "USA" },
    { value: "canada", label: "Canada" },
    { value: "uk", label: "UK" }
  ];

  const citiesByCountry = {
    usa: [
      { value: "newyork", label: "New York" },
      { value: "losangeles", label: "Los Angeles" },
      { value: "chicago", label: "Chicago" }
    ],
    canada: [
      { value: "toronto", label: "Toronto" },
      { value: "vancouver", label: "Vancouver" },
      { value: "montreal", label: "Montreal" }
    ],
    uk: [
      { value: "london", label: "London" },
      { value: "manchester", label: "Manchester" },
      { value: "edinburgh", label: "Edinburgh" }
    ]
  };

  const handleCountry = (e) => {
    setCountry(e.target.value);
    setCity(null);
  };

  const getCitiesByCountry = () => {
    if (country) {
      return citiesByCountry[country] || [];
    } else return [];
  };

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  return (
    <div style={{ display: "flex" }}>
      <div>
        <label>Select your country : </label>
        <select onChange={handleCountry}>
          <option>Select country</option>
          {countryOptions.map((el) => {
            return <option key={el.label}>{el.value}</option>;
          })}
        </select>

        <div>
          <label>Select your city : </label>
          <select onChange={handleCity}>
            <option>Select city</option>
            {getCitiesByCountry().map((el) => {
              return <option key={el.label}>{el.value}</option>;
            })}
          </select>
        </div>
        {country && city && (
          <p>
            {country}: {city}
          </p>
        )}
      </div>
    </div>
  );
}
