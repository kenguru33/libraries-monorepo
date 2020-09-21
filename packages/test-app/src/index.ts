import { IsAfterDate } from 'class-validator-date';
import { IsString, validateSync } from 'class-validator';
import {IsCog, IsMmsi} from 'class-validator-ais'

export class Meeting {
  @IsString()
  name: number;
  startTime: string;
  @IsMmsi()
  mmsi: string
  @IsCog()
  hastighet: number
  @IsAfterDate('endTime')
  endTine: string;
}

const meeting = new Meeting();
meeting.name = 12;
meeting.mmsi = '123d'
meeting.startTime = '2020-04-30T09:45:00';
meeting.endTine = '2020-04-30T09:46:00';

const error = validateSync(meeting);
console.log(error);

