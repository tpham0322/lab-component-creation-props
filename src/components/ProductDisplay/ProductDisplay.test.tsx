import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { ProductDisplay } from "./ProductDisplay";

const product = {
  id: "1",
  name: "Wireless Headphones",
  price: 199.99,
  description: "Noise cancelling headphones",
  inStock: true,
};

describe("ProductDisplay", () => {
  it("renders product information", () => {
    render(<ProductDisplay product={product} />);

    expect(
      screen.getByText("Wireless Headphones")
    ).toBeInTheDocument();

    expect(screen.getByText("$199.99")).toBeInTheDocument();

    expect(
      screen.getByText("Noise cancelling headphones")
    ).toBeInTheDocument();
  });

  it("shows stock status", () => {
    render(<ProductDisplay product={product} />);

    expect(screen.getByText("In Stock")).toBeInTheDocument();
  });

  it("calls onAddToCart", () => {
    const onAddToCart = vi.fn();

    render(
      <ProductDisplay
        product={product}
        onAddToCart={onAddToCart}
      />
    );

    fireEvent.click(
      screen.getByRole("button", { name: "Add to Cart" })
    );

    expect(onAddToCart).toHaveBeenCalledWith("1");
  });
});