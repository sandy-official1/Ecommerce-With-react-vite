import Card from "../UI/Card";
import BrandFilter from "../filters-sidebar/BrandFilter";
import ColorFilter from "../filters-sidebar/ColorFilter";
import PriceFilter from "../filters-sidebar/PriceFilter";

const MobFilter = ({...rest}) => {
  return (
    <Card {...rest} style={{ padding: "50px" }}>
      <PriceFilter />
      <BrandFilter />
      <ColorFilter />
    </Card>
  );
};
export default MobFilter;
