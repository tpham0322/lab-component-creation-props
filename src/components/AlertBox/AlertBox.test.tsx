import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { AlertBox } from "./AlertBox";

describe("AlertBox", () => {
  it("renders the alert message", () => {
    render(
      <AlertBox
        type="success"
        message="Profile updated successfully!"
      />
    );

    expect(
      screen.getByText("Profile updated successfully!")
    ).toBeInTheDocument();
  });

  it("renders children", () => {
    render(
      <AlertBox
        type="info"
        message="Information"
      >
        <p>Additional information</p>
      </AlertBox>
    );

    expect(
      screen.getByText("Additional information")
    ).toBeInTheDocument();
  });

  it("calls onClose when the close button is clicked", () => {
    const onClose = vi.fn();

    render(
      <AlertBox
        type="error"
        message="Something went wrong"
        onClose={onClose}
      />
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: "Close alert",
      })
    );

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});