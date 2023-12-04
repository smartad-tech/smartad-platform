import { Result } from "@badrap/result";
import axios from "axios";

export interface CategoryViews {
  categoryName: string;
  views: number;
}

interface DailyView {
  date: string;
}

export interface PieChartStats {
  advertisingId: string;
  totalViewsPerCategory: CategoryViews[];
}

export const fetchPieChartStats = async (
  adId: string
): Promise<Result<PieChartStats>> => {
  return axios
    .get(
      `https://16utwkbybk.execute-api.eu-central-1.amazonaws.com/prod/ad/${adId}/segment-views`
    )
    .then((res) => {
      if (res.status === 200) {
        return Result.ok(res.data as PieChartStats);
      }
      console.log(
        `Error requesting advertising statistics. Status code: ${res.status}`
      );
      return Result.err(new Error());
    })
    .catch((err) => {
      return Result.err(new Error());
    });
};
