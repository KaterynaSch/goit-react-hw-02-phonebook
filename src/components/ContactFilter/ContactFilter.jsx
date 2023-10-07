export const ContactFilter = ({filter, onChangeFilter}) => {
    return (
        <label>
            Find contacts by name
            <input type="text" name="filter" value= {filter}
            onChange={onChangeFilter}/>
        </label>
        
    )
}