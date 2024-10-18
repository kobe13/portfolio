import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { DATA } from "../../data/resume";
import IndexPage from "../index";
import { PageProps } from "gatsby";
import { WindowLocation } from "@reach/router";

jest.mock("gatsby-plugin-image", () => ({
  StaticImage: () => <div data-testid="mock-static-image" />,
}));

const mockPageProps: PageProps<object> = {
  path: "/",
  uri: "/",
  location: window.location as WindowLocation,
  params: {},
} as PageProps<object>;

describe("IndexPage", () => {
  it("renders the main heading with the correct name", () => {
    render(<IndexPage {...mockPageProps} />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent(`Hi, I'm ${DATA.name}`);
  });

  it("displays the presentation text", () => {
    render(<IndexPage {...mockPageProps} />);
    expect(screen.getByText(DATA.presentation)).toBeInTheDocument();
  });

  it("renders social media links", () => {
    render(<IndexPage {...mockPageProps} />);
    expect(screen.getByRole("link", { name: /linkedin/i })).toHaveAttribute(
      "href",
      DATA.contact.social.LinkedIn.url,
    );
    expect(screen.getByRole("link", { name: /github/i })).toHaveAttribute(
      "href",
      DATA.contact.social.GitHub.url,
    );
    expect(screen.getByRole("link", { name: /resume/i })).toHaveAttribute(
      "href",
      DATA.contact.social.Resume.url,
    );
  });

  it("renders the skills section", () => {
    render(<IndexPage {...mockPageProps} />);
    expect(
      screen.getByRole("heading", { name: /skills/i }),
    ).toBeInTheDocument();
  });

  it("renders the StaticImage component", () => {
    render(<IndexPage {...mockPageProps} />);
    expect(screen.getByTestId("mock-static-image")).toBeInTheDocument();
  });
});
