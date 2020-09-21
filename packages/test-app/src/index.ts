import { IsAfterDate } from 'class-validator-date';
import { IsString, validateSync } from 'class-validator';

export class Meeting {
  @IsString()
  name: string;
  startTime: string;

  @IsAfterDate('endTime')
  endTine: string;
}

const meeting = new Meeting();
meeting.name = 'Møte';
meeting.startTime = '2020-04-30T09:45:00';
meeting.endTine = '2020-04-30T09:45:00';

const error = validateSync(meeting);
console.log(error);

