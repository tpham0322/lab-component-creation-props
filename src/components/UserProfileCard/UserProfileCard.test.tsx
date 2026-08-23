import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { UserProfileCard } from "./UserProfileCard";

const user = {
  id: "1",
  name: "John Doe",
  email: "john@example.com",
  role: "Developer",
};

describe("UserProfileCard", () => {
  it("renders user information", () => {
    render(<UserProfileCard user={user} />);

    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("john@example.com")).toBeInTheDocument();
    expect(screen.getByText("Developer")).toBeInTheDocument();
  });

  it("hides email when showEmail is false", () => {
    render(
      <UserProfileCard
        user={user}
        showEmail={false}
      />
    );

    expect(
      screen.queryByText("john@example.com")
    ).not.toBeInTheDocument();
  });

  it("calls onEdit with the user ID", () => {
    const onEdit = vi.fn();

    render(
      <UserProfileCard
        user={user}
        onEdit={onEdit}
      />
    );

    fireEvent.click(
      screen.getByRole("button", { name: "Edit Profile" })
    );

    expect(onEdit).toHaveBeenCalledWith("1");
  });
});