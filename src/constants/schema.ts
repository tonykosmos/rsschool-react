import * as yup from 'yup';

export const schema = yup.object({
  name: yup
    .string()
    .required('Required field')
    .matches(/^[A-Z]/, 'Name should start from uppercase letter'),
  age: yup
    .number()
    .required('Required field')
    .positive('Should be a positive number'),
  email: yup.string().required('Required field').email(),
  password: yup
    .string()
    .required('Required field')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      'Should contain 1 number, 1 uppercased letter, 1 lowercased letter, 1 special character'
    ),
  confirmPassword: yup
    .string()
    .required('Required field')
    .oneOf([yup.ref('password')], 'Passwords doesnt match'),
  gender: yup.string().required('Required field'),
  accept: yup.boolean().test({
    name: 'accept',
    message: 'You should agree with terms and conditions to continue',
    test: (value) => value,
  }),
  country: yup.string().required('Required field'),
  image: yup
    .mixed()
    .required('Required field')
    .test({
      name: 'image',
      message:
        'Incorrect file, only JPEG or PNG with size less than 1 MB can be uploaded',
      test: (value) => {
        console.log(value);
        const image = value as File;
        return (
          image.size <= 1000000 &&
          (image.type === 'image/jpeg' || image.type === 'image/png')
        );
      },
    }),
});
