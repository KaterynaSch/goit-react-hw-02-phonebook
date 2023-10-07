import { DeleteBtn, ListItem } from "./ContactListItem.styled"

export const ContactListItem = ({contact, onDelete}) => {
    return(
        <ListItem key={contact.id}>
            {contact.name}: {contact.number}
            <DeleteBtn type="button" onClick={() => onDelete(contact.id)}>
                Delete
            </DeleteBtn>
        </ListItem>
    )
}