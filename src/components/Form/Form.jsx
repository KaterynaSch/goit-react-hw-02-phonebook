import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { StyledForm, StyledLabel, StyledField, AddContact  } from './Form.styled';

const formSchema = Yup.object().shape({
    name: Yup.string() 
    .matches(/^[a-zA-Zа-яА-Я]+(([ ' -][a-zA-Zа-яА-Я ])?[a-zA-ЯА-Я]*)*$/, 'The name format is incorrect!')    
    .required('Required'),
    number: Yup.string()
    .matches(/\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}/,'The phone number format is incorrect!')    
    .required('Required'),
})

export const ContactForm = ({onAdd}) => {
    return ( 
        <Formik
        initialValues={{
          name: '',
          number: '',          
        }}
        validationSchema={formSchema}        
        onSubmit={(values, actions) => {         
         onAdd(values);
         actions.resetForm();
        }}
      >
        <StyledForm>
          <StyledLabel>
            Name
            <StyledField  name="name" type="text"/>
            <ErrorMessage name="name" />
          </StyledLabel>
          <StyledLabel>
            Number
          <StyledField  name="number" type='tel' />
          <ErrorMessage name="number" />
            </StyledLabel>          
          <AddContact type="submit">Add contact</AddContact>
        </StyledForm>
      </Formik>
       
    )
}