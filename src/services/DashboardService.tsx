import { Result } from "@badrap/result";
import axios from "axios";

export interface CategoryViews {
  categoryName: string;
  views: number;
}
export interface PieChartStats {
  advertisingId: string;
  totalViewsPerCategory: CategoryViews[];
}

export interface SegmentViews {
  date: string;
  views: CategoryViews[];
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

export const fetchSegmentStats = async (
  adId: string
): Promise<SegmentViews[] | Error> => {
  return axios
    .get(
      `https://16utwkbybk.execute-api.eu-central-1.amazonaws.com/prod/api/v1/smartads/${adId}/views/daily?from=11.01.2023&to=23.12.2028`
    )
    .then((res) => {
      if (res.status === 200) {
        return res.data as SegmentViews[];
      }
    })
    .catch((err) => {
      console.log("Error during fetching segments.");
      console.log(err);
      return err;
    });
};
