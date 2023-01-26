import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';
import { Btn } from './FormContacts.styled';
import { Label } from './FormContacts.styled';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().min(9).max(9).required(),
});

const initialValues = { name: '', number: '' };

const FormData = styled(Form)`
  display: block;
  border: 1px solid black;
  padding: 20px 200px 20px 30px;
  background-color: #c0c0c0;
`;

const Input = styled(Field)`
  display: block;
  padding: 10px 10px;
  background-color: white;
  border: 1px solid black;
  border-radius: 4px;
  font: 0.6em 'typewriter', sans-serif;
  color: black;
  outline: none;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    border: 2px solid #4169e1;
  }
`;
const ErrorText = styled.p`
  font: 0.6em 'typewriter', sans-serif;
  color: red;
  margin-top: 5px;
`;

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

// export class FormContacts extends Component {

// state = {
//   name: '',
//   number: '',
// };

// handleChange = evt => {
//   const { name, value } = evt.currentTarget;
//   this.setState({
//     [name]: value,
//   });
// };

// handleSubmit = evt => {
//   evt.preventDefault();

//   this.props.onSubmit(this.state);

//   this.reset();
// };

// reset = () => {
//   this.setState({ name: '', number: '' });
// };

export const FormContacts = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
    onSubmit(values);
    //   evt.preventDefault();
    //   this.props.onSubmit(this.state);
    //   this.reset();
  };

  // reset = () => {
  //   this.setState({ name: '', number: '' });
  // };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormData>
        <Label>
          Name
          <br />
          <Input type="text" name="name" placeholder="Rosie Simpson" />
          <FormError name="name" component="div" />
        </Label>
        <Label>
          Number
          <br />
          <Input type="tel" name="number" placeholder="345-45-45" />
          <FormError name="number" component="div" />
        </Label>
        <Btn type="submit">Add contact</Btn>
      </FormData>
    </Formik>
  );
};
