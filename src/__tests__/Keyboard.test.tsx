import {
  describe, it, expect, beforeEach,
} from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "../App";

beforeEach(() => {
});

describe("Keyboard component", () => {
  const user = userEvent.setup();

  it("clicking the right key should reveal letter h in hello", async () => {
    render(<App initialWord="hello" />);
    
    const hiddenLetterH: HTMLSpanElement = await screen.findByTestId("hidden-letter-h");
    expect(hiddenLetterH.style.visibility).toBe("hidden");

    const hButton: HTMLButtonElement = screen.getByRole("button", { name: /h/i });
    user.click(hButton);
    
    await waitFor(() => {
      const revealedLetterH = screen.getByTestId("hidden-letter-h");
      expect(revealedLetterH.style.visibility).toBe("visible");
    });
});


  it("clicking the z key should reveal part of hangman and disable the z key", async () => {
    render(<App initialWord="hello" />);

    const zButton: HTMLButtonElement = screen.getByRole("button", { name: /z/i });

    let head = screen.queryByRole("head");
    expect(head).toBeNull();

    user.click(zButton);

    head = await screen.findByRole("head");

    expect(head).toBeDefined();
    expect(zButton.disabled).toBeTruthy();
  });
});
