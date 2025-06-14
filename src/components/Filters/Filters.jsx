import CustomSelect from "../CustomSelect/CustomSelect";

const languages = ["French", "English", "German", "Ukrainian", "Polish"];
const level = [
  "A1 Beginner",
  "A2 Elementary",
  "B1 Intermediate",
  "B2 Upper-Intermediate",
];
const price = ["10", "20", "30", "40"];

const Filters = ({ filter, setFilter }) => {
  return (
    <>
      <CustomSelect
        options={languages}
        placeholder={"Languages"}
        type={"lang"}
        filter={filter}
        setFilter={setFilter}
      />
      <CustomSelect
        options={level}
        placeholder={"Level of knowledge"}
        type={"level"}
        filter={filter}
        setFilter={setFilter}
      />
      <CustomSelect
        options={price}
        placeholder={"Price"}
        type={"price"}
        filter={filter}
        setFilter={setFilter}
      />
    </>
  );
};

export default Filters;
