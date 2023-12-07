import * as Yup from 'yup';

export const accountFormSchema = Yup.object().shape({
  companyName: Yup.string()
    .min(3, 'Too Short!')
    .required('Company name is required'),
  TaxID: Yup.string().required('Please select one!'),
  TaxIdNumber: Yup.string()
    .min(3, 'Too Short!')
    .max(40, 'Too Long!')
    .required('Tax ID is required'),
  currency: Yup.string().required('Please select one!'),
  AddressLine1: Yup.string()
    .min(3, 'Too Short!')
    .required('Address line 1 is required'),
  AddressLine2: Yup.string().min(3, 'Too Short ').optional(),
  city: Yup.string().min(3, 'Too Short!').required('city is required'),
  country: Yup.string().min(3, 'Too Short!').required('country is required'),
  state: Yup.string().min(3, 'Too Short!').required('state is required'),
  postalCode: Yup.string()
    .min(3, 'Too Short!')
    .required('postal code is required'),
});

export const searchEmail = Yup.object().shape({
  searchEmail: Yup.string()
    .email('Invalid email')
    .required('Please enter a valid email address'),
});
