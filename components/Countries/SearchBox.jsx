import Input from "../UI/Input/Input";

const SearchBox = () => {
  return (
    <div className="search__box">
      <Input type="text" placeholder="Enter a country" />
      <Input fieldType="select"/>
    </div>
  );
};
export default SearchBox;
