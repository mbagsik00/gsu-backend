import { Model } from 'sequelize';

type ModelResult =
  | Model<string, string | number>
  | Model<string, string | number>[];

export const parseResult = (result: ModelResult) =>
  JSON.parse(JSON.stringify(result));
