// JobListCard.test.tsx
import { render, fireEvent } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import JobListCard, { CardType } from "./JobListCard";
import {
  useCreateBookmarkMutation,
  useDeleteBookmarkMutation,
} from "../service/job-info";

// Mocking the service hooks
jest.mock("../service/job-info", () => ({
  useCreateBookmarkMutation: jest.fn(),
  useDeleteBookmarkMutation: jest.fn(),
}));

describe("JobListCard", () => {
  jest.mock("next/navigation", () => require("__mocks__/next/navigation"));
  const renderComponent = (props: Partial<CardType> = {}) => {
    const defaultProps: CardType = {
      id: "657063e2144042c215319530",
      title: "Software Engineer",
      description: "Great job opportunity",
      imageLink: "/logo.png",
      company: "Tech Company",
      location: ["New York"],
      where: "Remote",
      categories: ["Full-time"],
      accessToken: "mock-token",
      isBookmarked: false,
      status: "authenticated",
    };
    return render(<JobListCard {...defaultProps} {...props} />);
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should create a bookmark when the bookmark button is clicked and the job is not bookmarked", async () => {
    jest.mock("next/navigation", () => require("__mocks__/next/navigation"));
    const createBookmarkMock = jest.fn().mockResolvedValue({});
    (useCreateBookmarkMutation as jest.Mock).mockReturnValue([
      createBookmarkMock,
      { isLoading: false },
    ]);
    (useDeleteBookmarkMutation as jest.Mock).mockReturnValue([
      jest.fn(),
      { isLoading: false },
    ]);

    renderComponent({ isBookmarked: false });
    const bookmarkButton = screen.getByTestId(
      "bookmark-button-657063e2144042c215319530"
    );
    fireEvent.click(bookmarkButton);

    expect(createBookmarkMock).toHaveBeenCalledWith({
      accessToken: "mock-token",
      id: "657063e2144042c215319530",
    });
    expect(createBookmarkMock).toHaveBeenCalledTimes(1);
  });

  test("should delete a bookmark when the bookmark button is clicked and the job is already bookmarked", async () => {
    jest.mock("next/navigation", () => require("__mocks__/next/navigation"));
    const deleteBookmarkMock = jest.fn().mockResolvedValue({});
    (useCreateBookmarkMutation as jest.Mock).mockReturnValue([
      jest.fn(),
      { isLoading: false },
    ]);
    (useDeleteBookmarkMutation as jest.Mock).mockReturnValue([
      deleteBookmarkMock,
      { isLoading: false },
    ]);

    renderComponent({ isBookmarked: true });
    const bookmarkButton = screen.getByTestId(
      "bookmark-button-657063e2144042c215319530"
    );

    fireEvent.click(bookmarkButton);

    expect(deleteBookmarkMock).toHaveBeenCalledWith({
      accessToken: "mock-token",
      id: "657063e2144042c215319530",
    });
    expect(deleteBookmarkMock).toHaveBeenCalledTimes(1);
  });

  test("should disable the bookmark button when the mutation is loading", () => {
    jest.mock("next/navigation", () => require("__mocks__/next/navigation"));
    (useCreateBookmarkMutation as jest.Mock).mockReturnValue([
      jest.fn(),
      { isLoading: true },
    ]);
    (useDeleteBookmarkMutation as jest.Mock).mockReturnValue([
      jest.fn(),
      { isLoading: false },
    ]);

    renderComponent();
    const bookmarkButton = screen.getByTestId(
      "bookmark-button-657063e2144042c215319530"
    );

    expect(bookmarkButton).toBeDisabled();
  });
});
