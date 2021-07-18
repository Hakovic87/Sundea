import { render, screen } from "../../../test-utils/testing-library-utils";
import Options from "../Options";
import { OrderDetailsProvider } from "../../../context/OrderDetails";

test("Displays image for each scoop option from server", async () => {
  render(<Options optionType="scoops" />);

  //find the images
  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  //Confirm alt text text of images
  const altText = scoopImages.map((element) => element.alt);
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});

test("Displays image for each toppings option from server", async () => {
  render(<Options optionType="toppings" />);

  //find the images
  const toppingsImages = await screen.findAllByRole("img", {
    name: /topping$/i,
  });
  expect(toppingsImages).toHaveLength(3);

  //Confirm alt text text of images
  const imageTitles = toppingsImages.map((element) => element.alt);
  expect(imageTitles).toEqual([
    "Cherries topping",
    "M&Ms topping",
    "Hot fudge topping",
  ]);
});
