import yup from 'yup';

export const schema = yup.object({
  name: yup
    .string()
    .required('Please, enter the name')
    .matches(/^[A-Z]/, 'Name should start from uppercase letter'),
  age: yup
    .number()
    .required('Please, enter the age')
    .positive('Age must be a positive number')
    .integer('Age must be an integer'),
  email: yup.string().required().email(),
  password: yup
    .string()
    .required()
    .matches(
      /^[A-Z]/,
      'Should contain 1 number, 1 uppercased letter, 1 lowercased letter, 1 special character'
    ),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref('password')], 'Passwords doesnt match'),
  gender: yup.string().required().oneOf(['Male, Female']),
  't&c': yup.boolean().test({
    name: 't&c',
    message: 'You should agree with t&c to continue',
    test: (value) => value,
  }),
});
