import { Result } from "@badrap/result";
import axios from "axios";

export interface CategoryViews {
  categoryName: string;
  views: number;
}

interface DailyView {
  date: string;
//   viewsPerCategory: CategoryViews[];
}

export interface StatisticsData {
  advertisingId: string;
  totalViewsPerCategory: CategoryViews[];
  dailyViews: DailyView[];
}

export const fetchStatistics = async (
  adId: string
): Promise<Result<StatisticsData>> => {
  return axios
    .get(
      `https://16utwkbybk.execute-api.eu-central-1.amazonaws.com/prod/ad/${adId}/views`
    )
    .then((res) => {
      if (res.status === 200) {
        return Result.ok(res.data as StatisticsData);
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
