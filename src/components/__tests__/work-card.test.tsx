import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { WorkCard } from "../work-card";

describe("WorkCard Component", () => {
  it("renders the WorkCard component with all props", () => {
    const props = {
      title: "Software Engineer",
      description: ["Developed features", "Fixed bugs"],
      dates: "Jan 2020 - Present",
      location: "Remote",
      skills: ["React", "TypeScript"],
    };
    render(<WorkCard {...props} />);
    expect(screen.getByText("Software Engineer")).toBeInTheDocument();
    expect(screen.getByText("Developed features")).toBeInTheDocument();
    expect(screen.getByText("Fixed bugs")).toBeInTheDocument();
    expect(screen.getByText("Jan 2020 - Present")).toBeInTheDocument();
    expect(screen.getByText("Remote")).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
  });
});
