import { parseResult } from '../utils/parseResult';
import Availability, {
  AvailabilityDay,
  AvailabilityStatus,
} from '../models/availability';

interface IAvailabilityDetails {
  weekNumber: number;
  day: AvailabilityDay;
  start: string;
  end: string;
  status?: AvailabilityStatus;
}

export interface IAvailability extends IAvailabilityDetails {
  id: number;
}

interface IAddUserAvailability extends IAvailabilityDetails {
  userId: number;
}

export const addUserAvailability = async (
  availability: IAddUserAvailability
): Promise<IAvailability> => {
  const result = await Availability.create({
    ...availability,
  });

  return parseResult(result);
};

export const getUserAvailability = async (
  userId: number
): Promise<IAvailability[]> => {
  // TODO:
  // - Sort by week number
  const result = await Availability.findAll({ where: { userId } });

  return parseResult(result);
};
