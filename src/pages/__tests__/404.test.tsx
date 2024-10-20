import * as React from "react";
import { render, screen } from "@testing-library/react";
import NotFoundPage from "../404";
import { PageProps } from "gatsby";
import { DATA } from "../../data/resume";

const mockPageProps: PageProps<object> = {
  path: "/404",
  uri: "/404",
  location: { pathname: "/404" },
} as PageProps<object>;

describe("NotFoundPage", () => {
  it("renders the 404 page with correct text", () => {
    render(<NotFoundPage {...mockPageProps} />);

    // Check if the 404 text is present
    expect(screen.getByText("404")).toBeInTheDocument();

    // Check if the main heading is present
    expect(screen.getByText("Page not found")).toBeInTheDocument();

    // Check if the description text is present
    expect(
      screen.getByText("Sorry, we couldn’t find the page you’re looking for."),
    ).toBeInTheDocument();

    // Check if the link to go back home is present
    const linkElement = screen.getByRole("link", { name: /Go back home/i });

    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute(
      "href",
      expect.stringContaining(DATA.url),
    );
  });
});
