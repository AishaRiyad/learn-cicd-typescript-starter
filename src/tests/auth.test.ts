import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";

describe("getAPIKey", () => {
  test("returns null when authorization header is missing", () => {
    expect(getAPIKey({})).toBeNull();
  });

  test("returns null when authorization header does not start with ApiKey", () => {
    expect(getAPIKey({ authorization: "Bearer abc123" })).toBeNull();
    expect(getAPIKey({ authorization: "apikey abc123" })).toBeNull(); 
  });

  test("returns null when authorization header is missing the key token", () => {
  expect(getAPIKey({ authorization: "ApiKey" })).toBeNull();
});

test("returns empty string when authorization header has an empty key", () => {
  expect(getAPIKey({ authorization: "ApiKey " })).toBe("");
});


  test("returns api key when authorization header is valid", () => {
    expect(getAPIKey({ authorization: "ApiKey abc123" })).toBe("abc123");
  });

  test("uses the second token as the key even if there are extra tokens", () => {
    expect(getAPIKey({ authorization: "ApiKey abc123 extra" })).toBe("abc123");
  });
});

