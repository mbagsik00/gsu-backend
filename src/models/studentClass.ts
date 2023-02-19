import { DataTypes } from 'sequelize';
import database from '../database';

const StudentClassBooking = database.define('student_class_booking', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  studentId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  availabilityId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default StudentClassBooking;
