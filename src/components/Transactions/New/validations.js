import Yup from 'yup';
import 'components/Common/YupCustomValidations';

// New transaction validations
export default Yup.object().shape({

   targetAccNumber: Yup.number()
      .required('Please enter the account number')
      .typeError('Account must be a number')
      .positive('Account must be a positive number')
      .length(8, 'Account must be 8 numbers'),

   targetSortCode: Yup.number()
      .required('Please enter the sort code')
      .typeError('Sort code must be a number')
      .positive('Sort code must be a positive number')
      .length(6, 'Sort code must be 6 numbers'),

   targetName: Yup.string()
      .required('Please enter the name')
      .min(2, 'Name must be at least 2 characters')
      .max(50, 'Name must be a maximum of 50 characters'),

   targetAddress: Yup.string()
      .required('Please enter the address')
      .min(3, 'Address must be at least 3 characters')
      .max(200, 'Address must be a maximum of 50 characters'),

   reference: Yup.string()
      .required('Please enter the reference')
      .min(2, 'Reference must be at least 2 characters')
      .max(50, 'Reference must be a maximum of 50 characters'),

   amount: Yup.number()
      .required('Please enter the amount')
      .typeError('Amount must be a number')
      .positive('Amount must be a positive number')
});