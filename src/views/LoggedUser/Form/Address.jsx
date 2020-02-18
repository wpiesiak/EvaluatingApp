import React from 'react'
import { Field, FormSection } from 'redux-form'
import { Input } from '../../../components/Input.jsx'
import { Select } from '../../../components/Select.jsx'

const UserFormAddress = () => {

  return (
    <FormSection name="address">
      <h3>Address</h3>
      <div className="form-group">
        <Field
          label="Street Address"
          name="street"
          component={Input}
          type="text"
          placeholder="your address.."
          className="form-control"
        />
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <Field
              label="City"
              name="city"
              component={Input}
              type="text"
              className="form-control"
            />
          </div>
        </div>
        <div className="col-md-6">
          <Field
            label="Province / State"
            name="state"
            component={Input}
            type="text"
            className="form-control"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <Field
            label="Zip Code"
            name="zipcode"
            component={Input}
            type="text"
            className="form-control"
          />
        </div>
        <div className="col-md-6">
          <Field
            label="Country"
            name="country"
            component={Select}
            className="form-control"
            options={[
              { key: 'USA', value: 'USA' },
              { key: 'Canada', value: 'Canada' },
              { key: 'Australia', value: 'Australia' },
              { key: 'UK', value: 'UK' },
            ]}
          />
        </div>
      </div>
    </FormSection>
  )
}

export default UserFormAddress
