import IndianStates from './IndianStates';

const emailRegex =
  /^(?=.{1,64}@)[A-Za-z0-9_+-]+(\.[A-Za-z0-9_+-]+)*@[^-][A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*(\.[A-Za-z]{2,})$/;
const pincodeRegex = /^\d{6}$/;
const phoneRegex = /^\d{10}$/;
const simpleValidityCheckFields = [
  'address1',
  'city',
  'stateOrProvinceCode',
  'countryCode',
  'firstName',
  'lastName',
];

const equalityCheckFields = [
  'address1',
  'city',
  'stateOrProvinceCode',
  'countryCode',
  'firstName',
  'lastName',
  'phone',
  'postalCode',
];

function cleanEmail(value) {
  // TODO
  return value;
}

function cleanPhone(value) {
  let temp = value.replace('/[^0-9]/', '');
  temp = temp.substr(-10, 10);
  return temp;
}

function Address(instance) {
  this.id = null;
  this.address1 = '';
  this.address2 = '';
  this.city = '';
  this.company = '';
  this.country = 'India';
  this.countryCode = 'IN';
  this.customFields = {};
  this.email = '';
  this.firstName = '';
  this.lastName = '';
  this.phone = '';
  this.postalCode = '';
  this.stateOrProvince = '';
  this.stateOrProvinceCode = '';
  this.acceptsAbandonedCartEmails = false;
  this.acceptsMarketingNewsletter = false;
  this.shouldSaveAddress = true; // This was found to exist in original checkout's consignment update API call

  this.isEmailValid = () => {
    return emailRegex.test(this.email);
  };

  this.isPhoneValid = () => {
    return phoneRegex.test(this.phone);
  };
  this.isPostalcodeValid = () => {
    return pincodeRegex.test(this.postalCode);
  };
  this.isAddress1Valid = () => {
    return this.address1.length >= 4;
  };

  this.isValid = (_attrs) => {
    const attrs = _attrs || {};
    if (attrs.isGuest) {
      if (this.email.length < 1) {
        return false;
      }
    }

    for (let i = 0; i < simpleValidityCheckFields.length; i += 1) {
      const k = simpleValidityCheckFields[i];
      if (typeof this[k] === 'undefined') {
        // console.error("Missing field " + k + " in Address")
      } else if (this[k].length < 1) {
        // console.debug("Empty field " + k + " in Address")
        return false;
      }
    }

    if (attrs.isGuest) {
      if (!this.isEmailValid()) {
        // console.debug("Invalid email in Address")
        return false;
      }
    }

    if (!this.isPostalcodeValid()) {
      // console.debug("Invalid postalCode in Address")
      return false;
    }

    if (!this.isPhoneValid()) {
      // console.debug("Invalid phone in Address")
      return false;
    }

    if (!this.isAddress1Valid()) {
      // console.debug("Invalid Address1 in Address")
      return false;
    }

    return true;
  };

  this.isEmpty = (options) => {
    const emptyRef = new Address();
    if (this.isEqual(emptyRef, options)) {
      return true;
    }

    return false;
  };

  this.isEqual = (_addr, _options) => {
    const options = _options || {};
    const { exclude = [] } = options;
    const addr = new Address(_addr);
    for (let i = 0; i < equalityCheckFields.length; i += 1) {
      const k = equalityCheckFields[i];

      if (!exclude.includes(k)) {
        if (typeof this[k] === 'undefined') {
          // console.debug("Mismatch: Undefined field " + k + " in Address")
          return false;
        }
        if (this[k] !== addr[k]) {
          // console.debug("Mismatch: field " + k + " in Address. Values:", this[k], " ||| ", addr[k])
          return false;
        }
      }
    }
    return true;
  };

  this.update = (addr) => {
    // console.debug("typeof addr", typeof addr)
    let foundState;
    if (typeof addr === 'object') {
      Object.keys(this).forEach((k) => {
        // console.debug("Setting Address key: ", k)

        // Only set supported keys from incomming "Address"-like object
        if (typeof addr[k] !== 'undefined' && this[k] !== 'function') {
          switch (k) {
            case 'stateOrProvince':
            case 'country':
            case 'countryCode':
              // Do nothing
              break;
            case 'stateOrProvinceCode':
              this[k] = addr[k];
              foundState = IndianStates.filter((o) => {
                return o.value === addr[k].toUpperCase();
              });
              if (foundState.length > 0) {
                this.stateOrProvince = foundState[0].name;
              }
              break;
            case 'email':
              this[k] = cleanEmail(addr[k]);
              break;
            case 'phone':
              this[k] = cleanPhone(addr[k]);
              break;
            default:
              this[k] = addr[k];
          }
        }
      });
    }
  };

  this.update(instance);
}

export default Address;
