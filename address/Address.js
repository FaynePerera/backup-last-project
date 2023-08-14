import { useFormContext } from 'react-hook-form';
import { Row, Col, Form } from 'react-bootstrap';
import States from '../dropdowns/states';
import Countries from '../dropdowns/countries';
import usePlacesAutocomplete, {
  getDetails,
  getGeocode
} from 'use-places-autocomplete';
import { useRef, useEffect, useState } from 'react';
import GetLocation from './GetLocation';
import { AutoComplete, AutoCompleteItem } from '../results/AutoComplete';
import { characters, phone } from '@/utils/validate/_pattern';

export default function Address() {
  const {
    register,
    setValue,
    clearErrors,
    formState: { errors }
  } = useFormContext();
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [stateSelect, setStateSelect] = useState(true);

  const autoComplete = useRef(null);
  const {
    value,
    setValue: setAutoCompleteValue,
    suggestions: { status, data },
    clearSuggestions
  } = usePlacesAutocomplete();

  const setDetails = (details) => {
    let address;
    details.address_components.forEach((component) => {
      const componentType = component.types[0];
      switch (componentType) {
        case 'street_number': {
          address = component.long_name;
          break;
        }
        case 'route': {
          address += ` ${component.short_name}`;
          break;
        }
        case 'postal_code': {
          setValue('post_code', component.long_name);
          break;
        }
        case 'locality':
          setValue('city', component.long_name);
          break;

        case 'administrative_area_level_1': {
          setValue('state', component.short_name);
          break;
        }
        case 'country':
          setValue('country', component.short_name);
          setStateSelect(component.short_name === 'US');
          break;
        default:
          break;
      }
    });
    setValue('address1', address);
    setAutoCompleteValue(address, false);
    clearErrors();
  };
  const handleSelect = async (address) => {
    const parameter = {
      placeId: address.place_id
    };

    getDetails(parameter)
      .then((details) => {
        setDetails(details);
      })
      .catch(() => {});

    clearSuggestions();
  };
  const handleCountryChange = (e) => {
    setStateSelect(e.target.value === 'US');
  };
  const handleStateChange = (e) => {
    if (e.target.value === 'INT') {
      setStateSelect(false);
      setValue('country', null);
    }
  };
  useEffect(() => {
    setValue('country', 'US');
  }, []);
  useEffect(() => {
    setValue('state', null);
    clearErrors('state');
  }, [stateSelect]);
  useEffect(() => {
    const closeAutoComplete = (e) => {
      if (autoComplete.current && !autoComplete.current.contains(e.target)) {
        clearSuggestions();
      }
      clearErrors('address1');
    };
    window.addEventListener('mouseup', closeAutoComplete);
  }, [clearSuggestions]);
  useEffect(() => {
    if (lat && lng) {
      const parameter = {
        location: { lat, lng }
      };
      getGeocode(parameter)
        .then((results) => {
          setDetails(results[0]);
        })
        .catch(() => {});
    }
  }, [lat, lng]);
  return (
    <>
      <Row className="mb-3 g-0">
        <Col>
          <Row>
            <Col sx="auto">
              <Form.Label htmlFor="address1">Address</Form.Label>
            </Col>

            <Col className="text-end">
              <Form.Label>
                <GetLocation {...{ setLat, setLng, automatic: false }} />
              </Form.Label>
            </Col>
          </Row>
          <Form.Control
            {...register('address1', {
              required: true,
              pattern: characters,
              onChange: (e) => setAutoCompleteValue(e.target.value)
            })}
            className={`mb-2 ${errors.address1 && 'is-invalid'}`}
            maxLength="50"
            placeholder="Street or postal address"
            value={value}
          />
          {status === 'OK' && (
            <div ref={autoComplete}>
              <AutoComplete>
                {data.map((suggestion) => (
                  <AutoCompleteItem
                    key={suggestion.place_id}
                    value={suggestion.description}
                    onClick={() => handleSelect(suggestion)}
                  >
                    {suggestion.description}
                  </AutoCompleteItem>
                ))}
              </AutoComplete>
            </div>
          )}
          <Form.Control
            {...register('address2', {
              pattern: /^([\s]*[\w]){2,}[\s]*$/
            })}
            className={errors.address2 && 'is-invalid'}
            maxLength="50"
            placeholder="Apartment, suite, unit, building, floor, etc."
          />
          {errors.address1 && (
            <div className="invalid-feedback">Address is required</div>
          )}
        </Col>
      </Row>
      <Row className="mb-3">
        <Col xs={12} lg={6}>
          <Form.Label htmlFor="city">City</Form.Label>
          <Form.Control
            {...register('city', {
              required: true,
              pattern: characters
            })}
            className={errors.city && 'is-invalid'}
            maxLength="24"
          />
          {errors.city && (
            <div className="invalid-feedback">City is required</div>
          )}
        </Col>
        <Col xs={12} lg={6}>
          {stateSelect ? (
            <>
              <Form.Label htmlFor="state">State</Form.Label>
              <Form.Select
                {...register('state', {
                  required: true,
                  onChange: handleStateChange
                })}
                className={errors.state && 'is-invalid'}
              >
                <States />
              </Form.Select>
            </>
          ) : (
            <>
              <Form.Label htmlFor="state">State / Province / Region</Form.Label>
              <Form.Control
                {...register('state', {
                  required: true
                })}
                className={errors.state && 'is-invalid'}
                maxLength="48"
              />
            </>
          )}

          {errors.state && (
            <div className="invalid-feedback">State is required</div>
          )}
        </Col>
      </Row>
      <Row className="mb-3">
        <Col xs={12} lg={6}>
          <Form.Label htmlFor="post_code">Postal Code</Form.Label>
          <Form.Control
            {...register('post_code', {
              required: true,
              pattern: characters
            })}
            className={errors.post_code && 'is-invalid'}
            maxLength="10"
          />
          {errors.post_code && (
            <div className="invalid-feedback">Postal code is required</div>
          )}
        </Col>
        <Col xs={12} lg={6}>
          <Form.Label htmlFor="country">Country</Form.Label>
          <Form.Select
            {...register('country', {
              required: true,
              onChange: handleCountryChange
            })}
            className={errors.country && 'is-invalid'}
          >
            <Countries />
          </Form.Select>
          {errors.country && (
            <div className="invalid-feedback">Country is required</div>
          )}
        </Col>
      </Row>
      <Row className="mb-3">
        <Col xs={12} lg={6}>
          <Form.Label htmlFor="phone">Phone Number</Form.Label>
          <Form.Control
            {...register('phone', {
              pattern: phone
            })}
            className={errors.phone && 'is-invalid'}
            maxLength="15"
          />
          {errors.phone && (
            <div className="invalid-feedback">Enter a valid phone number</div>
          )}
        </Col>
      </Row>
    </>
  );
}
