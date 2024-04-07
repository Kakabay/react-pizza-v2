import ContentLoader from "react-content-loader";

const PizzaBlockSkeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="140" cy="140" r="125" />
    <rect x="0" y="300" rx="4" ry="4" width="280" height="25" />
    <rect x="-1" y="417" rx="4" ry="4" width="116" height="30" />
    <rect x="127" y="417" rx="4" ry="4" width="149" height="30" />
    <rect x="1" y="325" rx="0" ry="0" width="280" height="80" />
  </ContentLoader>
);

export default PizzaBlockSkeleton;
