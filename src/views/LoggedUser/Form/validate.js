export const validate = values => {
  const errors = {
    address: {},
  }

  if (!values.firstName) {
    errors.firstName = 'First name is required'
  } else if (values.firstName.length < 2) {
    errors.firstName = 'Name should be minimum 2 characters long'
  }

  if (!values.lastName) {
    errors.lastName = 'Last name is required'
  } else if (values.lastName.length < 2) {
    errors.firstName = 'Name should be minimum 2 characters long'
  }

  if (!values.email) {
    errors.email = 'Email is required'
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address'
  }

  if (!values.age) {
    errors.age = 'Age is required'
  } else if (!/[0-9]$/i.test(values.age)) {
    errors.age = 'Age should contain only numbers'
  }

  if (values.address && !values.address.street) {
    errors.address.street = 'Street address is required'
  }

  if (values.address && !values.address.city) {
    errors.address.city = 'City is required'
  }

  return errors
}
