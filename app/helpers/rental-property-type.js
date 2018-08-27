import { helper } from '@ember/component/helper';

const communityPropertyTypes = [
  'Condo',
  'Townhouse',
  'Apartment'
];

export function rentalPropertyType([propertyType]) {
  if (communityPropertyTypes.includes(propertyType)) {
    return 'Community';
  }
//look if a property exists in an array of communityPropertyTypes, return either 'Community' or 'Standalone':
  return 'Standalone';
}


export default helper(rentalPropertyType);
