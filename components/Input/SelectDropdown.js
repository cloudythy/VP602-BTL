import SelectDropdown from 'react-native-select-dropdown'

const SelectDropdown = (props) => {
    const {options} = props;
    return (
        <SelectDropdown 
        data = {options}

        onSelect={(selectedItem, index) => {
            console.log(selectedItem, index)
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem
        }}
        rowTextForSelection={(item, index) => {
            return item
        }}
        />
    );
};

export default SelectDropdown;