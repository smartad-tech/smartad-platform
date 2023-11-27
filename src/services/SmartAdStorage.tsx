import { Result } from "@badrap/result";

export const setGlobalUserId = (userId: string) => {
  localStorage.setItem("userId", userId);
};

export const getGlobalUserId = (): Result<string> => {
  const userId = localStorage.getItem("userId");
  if (userId == null) {
    return Result.err(new Error());
  }

  return Result.ok(userId);
};

export const setGlobalAdId = (advertisingId: string) => {
  localStorage.setItem("advertisingId", advertisingId);
};

export const getGlobalAdId = (): Result<string> => {
  const adId = localStorage.getItem("advertisingId");
  if (adId == null) {
    return Result.err(new Error());
  }
  return Result.ok(adId);
};

export const clearGlobalStorage = () => {
  localStorage.removeItem("advertisingId");
  localStorage.removeItem("userId");
};
