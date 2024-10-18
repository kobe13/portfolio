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

describe("portfolio page", () => {
  it("renders the main heading with the correct name", () => {
    render(<IndexPage {...mockPageProps} />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toHaveTextContent(`Hi, I'm ${DATA.name}`);
  });

  it("renders the image component", () => {
    render(<IndexPage {...mockPageProps} />);

    expect(screen.getByTestId("mock-static-image")).toBeInTheDocument();
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

    DATA.skills.forEach((skill) => {
      expect(screen.getAllByText(skill).length).toBeGreaterThan(0);
    });

    DATA.keySkills.forEach((skill) => {
      expect(screen.getByText(skill)).toBeInTheDocument();
    });
  });

  it("renders the work section", () => {
    render(<IndexPage {...mockPageProps} />);

    expect(
      screen.getByRole("heading", { name: /latest work experience/i }),
    ).toBeInTheDocument();

    DATA.work.forEach((job) => {
      const jobElement = screen.getByText(job.title).closest("section");

      expect(jobElement).toBeInTheDocument();
      expect(jobElement).toHaveTextContent(job.dates);
      expect(jobElement).toHaveTextContent(job.location);
      job.description.forEach((description) => {
        expect(jobElement).toHaveTextContent(description);
      });
      job.skills.forEach((skill) => {
        expect(jobElement).toHaveTextContent(skill);
      });
    });
  });

  it("renders the get in touch section with correct email", () => {
    render(<IndexPage {...mockPageProps} />);

    expect(
      screen.getByRole("heading", { name: /get in touch/i }),
    ).toBeInTheDocument();

    const emailLink = screen.getByRole("link", { name: /email/i });

    expect(emailLink).toBeInTheDocument();
    expect(emailLink.getAttribute("href")).toMatch(
      new RegExp(`^mailto:${DATA.contact.email}`),
    );
  });
});
