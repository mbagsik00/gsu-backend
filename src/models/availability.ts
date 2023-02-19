import { DataTypes } from 'sequelize';
import database from '../database';

const enum AvailabilityStatus {
  available = 'AVAILABLE',
  booked = 'BOOKED',
}

const enum AvailabilityDay {
  monday = 'MONDAY',
  tuesday = 'TUESDAY',
  wednesday = 'WEDNESDAY',
  thursday = 'THURSDAY',
  friday = 'FRIDAY',
  saturday = 'SATURDAY',
  sunday = 'SUNDAY',
}

const Availability = database.define('availability', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  weekNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  start: {
    type: DataTypes.DATE,
    allowNull: false,
    validate: {
      isDate: true,
    },
  },
  end: {
    type: DataTypes.DATE,
    allowNull: false,
    validate: {
      isDate: true,
    },
  },
  day: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: [
        [
          AvailabilityDay.monday,
          AvailabilityDay.tuesday,
          AvailabilityDay.wednesday,
          AvailabilityDay.thursday,
          AvailabilityDay.friday,
          AvailabilityDay.saturday,
          AvailabilityDay.sunday,
        ],
      ],
    },
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: AvailabilityStatus.available,
    validate: {
      isIn: [[AvailabilityStatus.available, AvailabilityStatus.booked]],
    },
  },
});

Availability.sync();

export default Availability;
