import { Product } from "@stripe/firestore-stripe-payments";

interface Props {
  products: Product[];
  selectedPlan: Product | null;
}

function Table({ products, selectedPlan }: Props) {
  console.log(products);
  return (
    <table>
      <body>
        <tbody className="divide-y divide-[gray] block">
          <tr className="tableRow">
            <td className="tableDataTitle">Monthly price</td>
            {products.map((product) => (
              <td
                key={product.id}
                className={`tableDataFeature ${
                  selectedPlan?.id === product.id
                    ? "text-[#e50914]"
                    : "text-[gray]"
                }`}
              >
                Baht{product.prices[0].unit_amount! / 100}
              </td>
            ))}
          </tr>

          <tr className="tableRow">
            <td className="tableDataTitle">Video quality</td>
            {products.map((product) => (
              <td
                key={product.id}
                className={`tableDataFeature ${
                  selectedPlan?.id === product.id
                    ? "text-[#e50914]"
                    : "text-[gray]"
                }`}
              >
                {product.metadata.videoQuality}
              </td>
            ))}
          </tr>

          <tr className="tableRow">
            <td className="tableDataTitle">Resolution</td>
            {products.map((product) => (
              <td
                key={product.id}
                className={`tableDataFeature ${
                  selectedPlan?.id === product.id
                    ? "text-[#e50914]"
                    : "text-[gray]"
                }`}
              >
                {product.metadata.resolution}
              </td>
            ))}
          </tr>

          <tr className="tableRow">
            <td className="tableDataTitle">Devices you can use to watch</td>
            {products.map((product) => (
              <td
                key={product.id}
                className={`tableDataFeature ${
                  selectedPlan?.id === product.id
                    ? "text-[#e50914]"
                    : "text-[gray]"
                }`}
              >
                {product.metadata.devicesYouCanUseToWatch}
              </td>
            ))}
          </tr>
        </tbody>
      </body>
    </table>
  );
}

export default Table;
