import axios from "axios";
import { Result } from "@badrap/result";

export interface LoginData {
  advertisingId: string;
  userId: string;
}

export const loginToDashboard = async (
  pin: string
): Promise<Result<LoginData>> => {
  return axios
    .get(
      `https://16utwkbybk.execute-api.eu-central-1.amazonaws.com/prod/users?pin=${pin}`
    )
    .then((res) => {
      if (res.status !== 200) {
        return Result.err(new Error());
      }
      const loginData: LoginData = res.data;
      return Result.ok(loginData);
    })
    .catch((error) => {
      return Result.err(error);
    });
};
